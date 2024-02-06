import React, { useEffect } from "react"
import { useState } from "react"
import { Clock3 } from "./Clock";



export default {
    title: 'O`clock demo',
    component: Clock3
}

export const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {

        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const formatTime = (value: number) => {
        return value < 10 ? `0${value}` : value;
    };

    const hours = formatTime(time.getHours());
    const minutes = formatTime(time.getMinutes());
    const seconds = formatTime(time.getSeconds());

    return (
        <div>
            <h1>Time:</h1>
            <h1>{`${hours}:${minutes}:${seconds}`}</h1>
        </div>
    );
};


export const analogClock = () => {
    return <Clock3 mode="analog" />
}

export const digitalClock = () => {
    return <Clock3 mode="digital" />
}



