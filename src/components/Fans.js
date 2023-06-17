"use client";
import { useState } from "react";
import FanController from "./fanControl";
import { Label } from "./shadcn/label";
import { Slider } from "./shadcn/slider";
import { Switch } from "./shadcn/switch";

const Fans = () => {
  const [globalControl, setglobalControl] = useState(true);
  const [globalRPM, _setglobalRPM] = useState(0);
  const [fan1RPM, setfan1RPM] = useState(0);
  const [fan2RPM, setfan2RPM] = useState(0);
  const [fan3RPM, setfan3RPM] = useState(0);
  const [fan4RPM, setfan4RPM] = useState(0);

  const setglobalRPM = (value) => {
    _setglobalRPM(value);
    if (globalControl) {
      setfan1RPM(value);
      setfan2RPM(value);
      setfan3RPM(value);
      setfan4RPM(value);
    }
  };

  return (
    <div className="border-4 rounded-md border-slate-950 p-4 w-max m-4">
      <p className="text-xl">fans</p>
      <Label htmlFor="globalFans">Global control</Label>
      <Switch
        id="globalFans"
        checked={globalControl}
        onCheckedChange={(checked) => {
          setfan1RPM(globalRPM);
          setfan2RPM(globalRPM);
          setfan3RPM(globalRPM);
          setfan4RPM(globalRPM);
          setglobalControl(checked);
        }}
      />
      <div>
        <FanController
          fanName="Global"
          fanRPM={globalRPM}
          enabled={globalControl}
          rpmChanged={setglobalRPM}
        />
        <div className="h-10"></div>
        <FanController
          fanName="Fan 1"
          fanRPM={fan1RPM}
          rpmChanged={setfan1RPM}
          enabled={!globalControl}
        />
        <FanController
          fanName="Fan 2"
          fanRPM={fan2RPM}
          rpmChanged={setfan2RPM}
          enabled={!globalControl}
        />
        <FanController
          fanName="Fan 3"
          fanRPM={fan3RPM}
          rpmChanged={setfan3RPM}
          enabled={!globalControl}
        />
        <FanController
          fanName="Fan 4"
          fanRPM={fan4RPM}
          rpmChanged={setfan4RPM}
          enabled={!globalControl}
        />
      </div>
    </div>
  );
};

export default Fans;
