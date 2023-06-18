"use client";
import Nav from "@/components/nav";
import Fans from "@/components/Fans";
import LineGraph from "@/components/LineGraph";
import { useState } from "react";
import Graphs from "@/components/Graphs";
import { ToastProvider } from "@/components/shadcn/toast";
import { Toaster } from "@/components/shadcn/toaster";
import { Separator } from "@/components/shadcn/separator";
import Settings from "@/components/Settings";

export default function Home() {
  const [controllerIP, setcontrollerIP] = useState("127.0.0.1:5000");
  const [maxRPM, setmaxRPM] = useState(1800);

  return (
    <main className="min-h-screen flex flex-col dark">
      <Nav ip={controllerIP} setIP={setcontrollerIP} />
      <div className="h-full w-full grow flex flex-row font-bold uppercase tracking-widest">
        <div>
          <Fans ip={controllerIP} maxRPM={maxRPM} setmaxRPM={setmaxRPM} />
          <Settings
            ip={controllerIP}
            setIP={setcontrollerIP}
            maxRPM={maxRPM}
            setmaxRPM={setmaxRPM}
          />
        </div>
        <Graphs ip={controllerIP} maxRPM={maxRPM} />
      </div>
      <Toaster />
    </main>
  );
}
