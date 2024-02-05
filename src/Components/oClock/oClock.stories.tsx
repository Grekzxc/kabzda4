import React, { useEffect } from "react"
import { useState } from "react"



export default {
    title: 'O`clock demo'
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


export const Clock2 = () => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    const goodAllTime = (value: number) => {
        return value < 10 ? '0' + value : value
    }

    return <div>
        <span>{goodAllTime(date.getHours())}</span>
        :
        <span>{goodAllTime(date.getMinutes())}</span>
        :
        <span>{goodAllTime(date.getSeconds())}</span>
    </div>
}