import { useState } from "react"

type OnOffType = {
    on: boolean
    setOn: (on: boolean) => void
}

export const OnOff = (props: OnOffType) => {
    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: props.on ? 'green' : 'white',
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        padding: '2px',
        backgroundColor: props.on ? 'white' : 'red',
    }
    const indicatorStyle = {
        width: '20px',
        height: '20px',
        borderRadius: '15px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        padding: '2px',
        backgroundColor: props.on ? 'green' : 'red'
    }

    return (
        <div>
            <div style={onStyle} onClick={() => { props.setOn(true) }}>On</div>
            <div style={offStyle} onClick={() => { props.setOn(false) }}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}
