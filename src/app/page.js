import Nav from "@/components/nav";
import Image from "next/image";
import fan from "@/images/fan.png";
import FanController from "@/components/fanControl";
import { Slider } from "@/components/shadcn/slider";
import { Switch } from "@/components/shadcn/switch";
import { Label } from "@/components/shadcn/label";
import Fans from "@/components/Fans";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col dark">
      <Nav />
      <div className="h-full w-full grow">
        <div className="font-bold uppercase tracking-widest">
          <Fans />
        </div>
      </div>
    </main>
  );
}
