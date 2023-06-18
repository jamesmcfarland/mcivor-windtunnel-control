import { useState } from "react";
import { Button } from "./shadcn/button";
import { Input } from "./shadcn/input";
import { Label } from "./shadcn/label";
import { Separator } from "./shadcn/separator";
import { useToast } from "./shadcn/use-toast";
import { Save } from "lucide-react";

const Settings = ({ setIP, ip, setmaxRPM, maxRPM }) => {
  const { toast } = useToast();
  const [localIP, setlocalIP] = useState(ip);
  const [maxrpmState, setmaxrpmState] = useState(maxRPM);
  return (
    <div className="border-4 rounded-md border-slate-800 p-4 h-fit  m-4 pr-4">
      <p className="text-xl">Settings</p>
      <Separator className="my-4" />
      <div className="flex justify-around items-center py-4">
        <Label htmlFor="ip" className="pr-2">
          Control IP
        </Label>
        <Input
          type="text"
          id="ip"
          placeholder="0.0.0.0"
          className="w-min"
          value={localIP}
          onChange={(e) => setlocalIP(e.target.value)}
        />
        <Button
          className="mx-2"
          onClick={() => {
            setIP(localIP);
            toast({
              title: "IP changed",
              description: `IP changed to ${localIP}`,
            });
          }}
          variant="outline"
        >
          <Save />
        </Button>
      </div>
      <div className="flex justify-between items-center py-4">
        <Label htmlFor="maxRPM" className="pr-2">
          Max RPM
        </Label>
        <Input
          type="number"
          id="maxRPM"
          placeholder={1800}
          className="w-min"
          value={maxrpmState}
          onChange={(e) => setmaxrpmState(e.target.value)}
        />
        <Button
          variant="outline"
          className="mx-2"
          onClick={() => {
            setmaxRPM(maxrpmState);
            toast({
              title: "Max RPM changed",
              description: `Max RPM changed to ${maxrpmState}`,
            });
          }}
        >
          <Save />
        </Button>
      </div>
    </div>
  );
};

export default Settings;
