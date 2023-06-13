"use client";
import { useState } from "react";
import FanController from "./fanControl";
import { Label } from "./shadcn/label";
import { Slider } from "./shadcn/slider";
import { Switch } from "./shadcn/switch";

const Fans = () => {
  const [globalControl, setglobalControl] = useState(true);

  return (
    <div className="border-4 rounded-md border-slate-950 p-4 w-max m-4">
      <p className="text-xl">fans</p>
      <Label htmlFor="globalFans">Global control</Label>
      <Switch
        id="globalFans"
        checked={globalControl}
        onCheckedChange={(checked) => {
          setglobalControl(checked);
        }}
      />
      <div>
        <FanController fanName="Global" fanRPM={3000} enabled={globalControl} />
        <Slider
          defaultValue={[33]}
          step={1}
          max={100}
          disabled={!globalControl}
        />
        <div className="h-10"></div>
        <FanController
          fanName="Fan 1"
          fanRPM={globalControl.toString()}
          enabled={!globalControl}
        />
        <FanController fanName="Fan 2" fanRPM={4000} enabled={!globalControl} />
        <FanController fanName="Fan 3" fanRPM={5000} enabled={!globalControl} />
        <FanController fanName="Fan 4" fanRPM={6000} enabled={!globalControl} />
      </div>
    </div>
  );
};

export default Fans;
