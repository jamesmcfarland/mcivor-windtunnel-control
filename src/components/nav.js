import Image from "next/image";
import CurrentTime from "./time";
import fan from "@/images/fan.png";
const Nav = () => {
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
        <div className="text-sm font-bold justify-end items-center  text-end flex align-middle">
          <CurrentTime />
        </div>
      </div>
    </div>
  );
};

export default Nav;
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
    <div className="text-sm font-bold justify-end items-center  text-end flex align-middle">
      <CurrentTime />
    </div>
  </div>
</div>;
