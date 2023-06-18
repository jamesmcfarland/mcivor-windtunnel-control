"use client";
import Nav from "@/components/nav";
import Fans from "@/components/Fans";
import LineGraph from "@/components/LineGraph";
import { useState } from "react";
import Graphs from "@/components/Graphs";
import { ToastProvider } from "@/components/shadcn/toast";
import { Toaster } from "@/components/shadcn/toaster";

export default function Home() {
  const [controllerIP, setcontrollerIP] = useState("127.0.0.1:5000");
  const [maxRPM, setmaxRPM] = useState(1800);

  return (
    <main className="min-h-screen flex flex-col dark">
      <Nav ip={controllerIP} setIP={setcontrollerIP} />
      <div className="h-full w-full grow grid font-bold uppercase tracking-widest grid-cols-2">
        <Fans ip={controllerIP} maxRPM={maxRPM} setmaxRPM={setmaxRPM} />
        <Graphs ip={controllerIP} maxRPM={maxRPM} />
      </div>
      <Toaster />
    </main>
  );
}
