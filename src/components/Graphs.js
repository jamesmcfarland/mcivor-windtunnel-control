import { useEffect, useState } from "react";
import LineGraph from "./LineGraph";
import { useToast } from "./shadcn/use-toast";

const Graphs = ({ ip, maxRPM }) => {
  const { toast } = useToast();
  const [fanSpeeds, setfanSpeeds] = useState({
    f1: [{ index: 0, target: 0, actual: 0 }],
    f2: [{ index: 0, target: 0, actual: 0 }],
    f3: [{ index: 0, target: 0, actual: 0 }],
    f4: [{ index: 0, target: 0, actual: 0 }],
    global: [{ index: 0, target: 0, actual: 0 }],
  });
  const rpmMultiplier = maxRPM / 100;
  const historyLength = 100;
  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const data = await fetch(`http://${ip}/getfans`);
        const json = await data.json();
        const {
          global,
          f1,
          f2,
          f3,
          f4,
          actual_global,
          actual_f1,
          actual_f2,
          actual_f3,
          actual_f4,
        } = json;

        console.log(f1, f2, f3, f4, global);

        setfanSpeeds((prev) => {
          return {
            f1: [
              ...prev.f1.slice(prev.f1.length - historyLength, prev.f1.length),
              {
                index: prev.f1[prev.f1.length - 1].index + 1,
                target: f1 * rpmMultiplier,
                actual: actual_f1 * rpmMultiplier,
              },
            ],
            f2: [
              ...prev.f2.slice(prev.f2.length - historyLength, prev.f2.length),
              {
                index: prev.f2[prev.f2.length - 1].index + 1,
                target: f2 * rpmMultiplier,
                actual: actual_f2 * rpmMultiplier,
              },
            ],
            f3: [
              ...prev.f3.slice(prev.f3.length - historyLength, prev.f3.length),
              {
                index: prev.f3[prev.f3.length - 1].index + 1,
                target: f3 * rpmMultiplier,
                actual: actual_f3 * rpmMultiplier,
              },
            ],
            f4: [
              ...prev.f4.slice(prev.f4.length - historyLength, prev.f4.length),
              {
                index: prev.f4[prev.f4.length - 1].index + 1,
                target: f4 * rpmMultiplier,
                actual: actual_f4 * rpmMultiplier,
              },
            ],
            global: [
              ...prev.global.slice(
                prev.global.length - historyLength,
                prev.global.length
              ),
              {
                index: prev.global[prev.global.length - 1].index + 1,
                target: global * rpmMultiplier,
                actual: actual_global * rpmMultiplier,
              },
            ],
          };
        });
      } catch (e) {
        console.warn(e, ip);
        toast({
          variant: "destructive",
          title: "Failed to get fan data",
          description: "Check the controller IP! (Current: " + ip + ")",
        });
      }
    }, 250);
    return () => clearInterval(interval);
  }, [toast, ip, rpmMultiplier]);
  return (
    <div className="grid grid-cols-2 w-full py-4">
      <LineGraph
        fanName="Global Fans"
        isGlobal={true}
        data={fanSpeeds.global}
      />
      <LineGraph fanName="Fan 1" data={fanSpeeds.f1} />
      <LineGraph fanName="Fan 2" data={fanSpeeds.f2} />
      <LineGraph fanName="Fan 3" data={fanSpeeds.f3} />
      <LineGraph fanName="Fan 4" data={fanSpeeds.f4} />
    </div>
  );
};

export default Graphs;
