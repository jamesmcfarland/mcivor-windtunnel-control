import Image from "next/image";
import fan from "@/images/fan.png";
import { Slider } from "./shadcn/slider";

const mapPercentsToRPM = (percent) => {
  const minRPM = 0;
  const maxRPM = 1800;

  return Math.round((percent / 100) * (maxRPM - minRPM) + minRPM);
};

const FanController = ({ fanName, fanRPM, enabled, rpmChanged }) => {
  return (
    <div
      className={`grid w-full grid-cols-2 my-2 items-center ${
        enabled ? "opacity-100" : "opacity-50"
      }`}
    >
      <div className="flex justify-between">
        <p>{fanName}</p>
        <Image
          src={fan}
          alt="fan icon"
          width={25}
          className="fan-animation mx-2 "
        ></Image>
      </div>
      <p className="text-end text-sm opacity-70 ">
        {mapPercentsToRPM(fanRPM)} rpm
      </p>
      <Slider
        defaultValue={[fanRPM]}
        step={1}
        max={100}
        disabled={!enabled}
        className="w-full my-2 col-span-2 "
        onValueChange={(value) => rpmChanged(value[0])}
      />
    </div>
  );
};

export default FanController;
