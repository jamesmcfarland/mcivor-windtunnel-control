import Nav from "@/components/nav";
import Fans from "@/components/Fans";
import LineGraph from "@/components/LineGraph";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col dark">
      <Nav />
      <div className="h-full w-full grow grid font-bold uppercase tracking-widest grid-cols-2">
        <Fans />
        <div className="grid grid-cols-2">
          <LineGraph fanName="Global Fans" isGlobal={true} />
          <LineGraph fanName="Fan 1" />
          <LineGraph fanName="Fan 2" />
          <LineGraph fanName="Fan 3" />
          <LineGraph fanName="Fan 4" />
        </div>
      </div>
    </main>
  );
}
