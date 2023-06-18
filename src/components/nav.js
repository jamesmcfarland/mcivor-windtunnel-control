"use client";

import Image from "next/image";
import CurrentTime from "./time";
import fan from "@/images/fan.png";
import { Label } from "./shadcn/label";
import { Input } from "./shadcn/input";
import { Button } from "./shadcn/button";
import { useState } from "react";
import { useToast } from "./shadcn/use-toast";
const Nav = ({ ip, setIP }) => {
  const [localIP, setlocalIP] = useState(ip);
  const { toast } = useToast();

  return (
    <div className="border-b-2 border-slate-900 w-full py-3 px-4">
      <div className="text-xl grid grid-cols-3 align-center align-middle w-full justify-around">
        <div className="flex text-start items-center">
          <span className="font-bold tracking-widest justify-center">
            MCIVOR DYNAMICS
          </span>{" "}
          <span className="px-4 m-0 text-sm">x</span>
          <span className="font-mono">jamesmcfarland</span>
        </div>
        <div className="text-3xl font-bold justify-center items-center flex text-center">
          <Image
            src={fan}
            alt="fan icon"
            width={50}
            className="fan-animation"
          ></Image>
          <span className="px-4">WINDCTRL</span>
          <Image
            src={fan}
            alt="fan icon"
            width={50}
            className="fan-animation"
          ></Image>
        </div>
        <div className="text-sm font-bold justify-between items-center  text-end flex align-middle">
          <div className="flex justify-around items-center">
            <Label htmlFor="ip" className="pr-2">
              Controller IP
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
            >
              Update
            </Button>
          </div>
          <CurrentTime ip={ip} />
        </div>
      </div>
    </div>
  );
};

export default Nav;
