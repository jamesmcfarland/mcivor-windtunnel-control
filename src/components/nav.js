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
          <div className="font-bold tracking-widest justify-center">
            MCIVOR DYNAMICS
          </div>{" "}
          <div className="px-4 m-0 text-sm">x</div>
          <div className="font-mono">jamesmcfarland</div>
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
        <div className="text-sm font-bold justify-end items-center  text-end flex align-middle">
          <CurrentTime ip={ip} />
        </div>
      </div>
    </div>
  );
};

export default Nav;
