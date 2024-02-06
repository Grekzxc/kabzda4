import { ClockViewPropsType } from "./Clock"

export const goodAllTime = (value: number) => {
    return value < 10 ? '0' + value : value
}


export const DigitalClockView: React.FC<ClockViewPropsType> = ({ date }) => {
    return <>
        <span>{goodAllTime(date.getHours())}</span>
        :
        <span>{goodAllTime(date.getMinutes())}</span>
        :
        <span>{goodAllTime(date.getSeconds())}</span>
    </>
}