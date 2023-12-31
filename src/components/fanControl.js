"use client";
import Image from "next/image";
import fan from "@/images/fan.png";
import { Slider } from "./shadcn/slider";
import { useState } from "react";

const mapPercentsToRPM = (percent, maxRPM) => {
  return Math.round((percent / 100) * maxRPM);
};

const FanController = ({
  fanName,
  fanRPM,
  enabled,
  rpmChanged,
  maxRPM,
  commitFanSpeed,
}) => {
  const [tempState, settempState] = useState(0);
  return (
    <div
      className={`grid w-full grid-cols-2 my-2 items-center ${
        enabled ? "opacity-100" : "opacity-50"
      }`}
    >
      <div className="flex justify-between">
        <div className="flex">
          <p>{fanName}</p>
          <Image
            src={fan}
            alt="fan icon"
            width={25}
            className="fan-animation mx-2"
            style={{
              animation: `fan ${1 - fanRPM / 100 + 0.25}s infinite linear`,
            }}
          ></Image>
        </div>
      </div>
      <p className="text-end text-sm opacity-70 ">
        {mapPercentsToRPM(fanRPM, maxRPM)} rpm
      </p>
      <Slider
        defaultValue={[fanRPM]}
        value={[fanRPM]}
        step={1}
        max={100}
        disabled={!enabled}
        className="w-full my-2 col-span-2 "
        onValueChange={(value) => rpmChanged(value[0])}
        onValueCommit={(value) => commitFanSpeed()}
      />
    </div>
  );
};

export default FanController;
