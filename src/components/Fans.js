"use client";
import { useEffect, useState } from "react";
import FanController from "./fanControl";
import { Label } from "./shadcn/label";
import { Slider } from "./shadcn/slider";
import { Switch } from "./shadcn/switch";
import { Input } from "./shadcn/input";
import { Button } from "./shadcn/button";
import { Separator } from "./shadcn/separator";
import { useToast } from "./shadcn/use-toast";

const Fans = ({ ip, setmaxRPM, maxRPM }) => {
  const [globalControl, setglobalControl] = useState(true);
  const [globalRPM, _setglobalRPM] = useState(0);
  const [fan1RPM, setfan1RPM] = useState(0);
  const [fan2RPM, setfan2RPM] = useState(0);
  const [fan3RPM, setfan3RPM] = useState(0);
  const [fan4RPM, setfan4RPM] = useState(0);

  const postFanSpeeds = async (f1, f2, f3, f4, global) => {
    await fetch(`http://${ip}/setfans`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        global: global,
        f1: f1,
        f2: f2,
        f3: f3,
        f4: f4,
      }),
    });
  };

  const setglobalRPM = (value) => {
    _setglobalRPM(value);
    if (globalControl) {
      setfan1RPM(value);
      setfan2RPM(value);
      setfan3RPM(value);
      setfan4RPM(value);
    }
    // postFanSpeeds(value, value, value, value, value);
  };

  // const setfan1RPM = (value) => {
  //   _setfan1RPM(value);
  //   postFanSpeeds(value, fan2RPM, fan3RPM, fan4RPM, globalRPM);
  // };

  // const setfan2RPM = (value) => {
  //   _setfan2RPM(value);
  //   postFanSpeeds(fan1RPM, value, fan3RPM, fan4RPM, globalRPM);
  // };

  // const setfan3RPM = (value) => {
  //   _setfan3RPM(value);

  //   postFanSpeeds(fan1RPM, fan2RPM, value, fan4RPM, globalRPM);
  // };

  // const setfan4RPM = (value) => {
  //   _setfan4RPM(value);
  //   postFanSpeeds(fan1RPM, fan2RPM, fan3RPM, value, globalRPM);
  // };

  const sendFans = () => {
    postFanSpeeds(fan1RPM, fan2RPM, fan3RPM, fan4RPM, globalRPM);
  };

  return (
    <div className="border-4 rounded-md border-slate-800 p-4 h-fit  m-4 pr-4">
      <p className="text-xl">fans</p>
      <div className="flex items-center justify-start my-4">
        <Label htmlFor="globalFans" className="mr-4">
          Global control
        </Label>
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
      </div>
      <div>
        <FanController
          fanName="Global"
          fanRPM={globalRPM}
          enabled={globalControl}
          commitFanSpeed={sendFans}
          rpmChanged={setglobalRPM}
          maxRPM={maxRPM}
        />
        <div className="h-10"></div>
        <FanController
          fanName="Fan 1"
          fanRPM={fan1RPM}
          rpmChanged={setfan1RPM}
          commitFanSpeed={sendFans}
          enabled={!globalControl}
          maxRPM={maxRPM}
        />
        <FanController
          fanName="Fan 2"
          fanRPM={fan2RPM}
          rpmChanged={setfan2RPM}
          enabled={!globalControl}
          commitFanSpeed={sendFans}
          maxRPM={maxRPM}
        />
        <FanController
          fanName="Fan 3"
          fanRPM={fan3RPM}
          rpmChanged={setfan3RPM}
          enabled={!globalControl}
          commitFanSpeed={sendFans}
          maxRPM={maxRPM}
        />
        <FanController
          fanName="Fan 4"
          fanRPM={fan4RPM}
          rpmChanged={setfan4RPM}
          enabled={!globalControl}
          commitFanSpeed={sendFans}
          maxRPM={maxRPM}
        />
      </div>
    </div>
  );
};

export default Fans;
