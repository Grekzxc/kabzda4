import React, { useEffect } from "react"
import { useState } from "react"



export default {
    title: 'useEffect demo'
}

export const Example1 = () => {
    console.log('Example1');

    const [fake, setFake] = useState(1)
    const [count, setCount] = useState(1)

    useEffect(() => {
        document.title = count.toString()
    }) // срабатыает всегда 
    useEffect(() => {
        document.title = count.toString()
    }, []) // срабатывает только первый раз, когда компонента вмантирована
    useEffect(() => {
        document.title = count.toString()
    }, [count])  // срабатывает первый рендер и когда зависимость изменилась

    return <>
        oppa: {count}
        <div>
            oppa: {fake}
        </div>
        <button onClick={() => { setCount(count + 1) }}>+</button>
        <button onClick={() => { setFake(fake + 1) }}>+</button>
    </>
}

export const SetTimeoutExample = () => {
    console.log('SetTimeoutExample');

    const [fake, setFake] = useState(1)
    const [count, setCount] = useState(1)

    useEffect(() => {
        setInterval(() => {
            setCount(state => state + 1)
        }, 1000);
    }, [])

    return <>
        {count} :: {fake}
        {/* <button onClick={() => { setCount(count + 1) }}>Count</button>
        <button onClick={() => { setFake(fake + 1) }}>Fake</button> */}
    </>
}



//api.getUsers().then('')
//setInterval
//indexedDB
//document.getElementId
//document.title = 'User'