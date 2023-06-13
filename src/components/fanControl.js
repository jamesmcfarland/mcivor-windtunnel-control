import Image from "next/image";
import fan from "@/images/fan.png";
const FanController = ({ fanName, fanRPM, enabled }) => {
  return (
    <div
      className={`grid w-full grid-cols-2 my-2 items-center ${
        enabled ? "opacity-100" : "opacity-50"
      }`}
    >
      <div className="flex justify-between">
        <p>{fanName}</p>
        <Image
          src={fan}
          alt="fan icon"
          width={25}
          className="fan-animation mx-2 "
        ></Image>
      </div>
      <p className="text-end text-sm opacity-70 ">{fanRPM} rpm</p>
    </div>
  );
};

export default FanController;
