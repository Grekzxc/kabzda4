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
    </>
}
export const ResetRffectExample = () => {
    console.log('SetTimeoutExample');

    const [count, setCount] = useState(1)

    useEffect(() => {
        console.log('Effect occurred : ' + count);

        return () => {
            console.log('RESET EFFEKT');

        }
    }, [count])
    return <>
        <button onClick={() => setCount(count + 1)}>x</button>
        {count}
    </>
}
export const KeysTrackerExample = () => {
    console.log('SetTimeoutExample');

    const [text, setText] = useState('')

    useEffect(() => {

        const handler = (e: KeyboardEvent) => {
            console.log(e.key);
            setText(state => state + e.key)
        }

        window.addEventListener('keypress', handler)
        // зачистка подписки addEventListener
        return () => {
            window.removeEventListener('keypress', handler)
        }
    }, [])

    return <>

        typed text: {text}
    </>
}
export const CleanupExample = () => {
    const [text, setText] = useState('')
    console.log('Component rendered');


    useEffect(() => {
        const intervalId = setTimeout(() => {
            console.log('TIMEOUT EXPIRED');
            setText('3 seconds passed')
        }, 3000)
        return () => {
            clearTimeout(intervalId)
        }
    }, [text])

    return <>
        Typed text: {text}
    </>
}



//api.getUsers().then('')
//setInterval
//indexedDB
//document.getElementId
//document.title = 'User'