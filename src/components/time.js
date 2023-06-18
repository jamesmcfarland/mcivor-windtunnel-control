"use client";

import { useEffect, useState } from "react";

const CurrentTime = ({ ip }) => {
  const [currentTime, setCurrentTime] = useState("00:00:00");
  useEffect(() => {
    setCurrentTime(new Date().toLocaleTimeString());
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>TIME: {currentTime}</h1>
      <h1>CONTROL IP: {ip}</h1>
    </div>
  );
};

export default CurrentTime;
