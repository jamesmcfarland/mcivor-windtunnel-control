import Nav from "@/components/nav";
import Image from "next/image";
import fan from "@/images/fan.png";
import FanController from "@/components/fanControl";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col dark">
      <Nav />
      <div className="h-full w-full grow">
        <div className="font-bold uppercase tracking-widest">
          <div className="border-4 rounded-md border-slate-950 p-4 w-max m-4">
            <p className="text-xl">fans</p>
            <p className="text-xl">fans</p>
            <div>
              <FanController fanName="Global" fanRPM={3000} />
              <FanController fanName="Fan 1" fanRPM={3000} />
              <FanController fanName="Fan 2" fanRPM={4000} />
              <FanController fanName="Fan 3" fanRPM={5000} />
              <FanController fanName="Fan 4" fanRPM={6000} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
