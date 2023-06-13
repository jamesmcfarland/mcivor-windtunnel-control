"use client"

import { useEffect, useState } from "react";

const CurrentTime = () => {
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return ( <h1>TIME: {currentTime}</h1> );
}
 
export default CurrentTime;