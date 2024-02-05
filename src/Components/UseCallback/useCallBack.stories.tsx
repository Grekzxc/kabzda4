import React, { useCallback } from "react"
import { useMemo, useState } from "react"

export default {
    title: 'useCallBack'
}

export const DifficultCouting = () => {
    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 10000000)
                fake++
            const fakeValue = Math.random()
            tempA = tempA * i
        }
        return tempA
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))} />
        <input value={a} onChange={(e) => setB(+(e.currentTarget.value))} />
        <hr />
        <div>Result for a: {resultA}</div>
        <div>Result for b: {resultB}</div>
    </>
}

export const HelpToCallBack = () => {
    console.log('HelpToCallBack');
    const [count, setCount] = useState(0)
    const [books, setBooks] = useState(['React', 'JS', 'HTML', 'CSS'])

    //useMemo ----> разница с useCallBack 
    const memoizedAddBook = useMemo(() => {
        return () => {
            const newBooks = [...books, 'Andular' + new Date().getTime()]
            setBooks(newBooks)
        }
    }, [books])

    //useCallBack
    const memoizedAddBook2 = useCallback(() => {
        setBooks([...books, 'Andular' + new Date().getTime()])
    }, [books])



    return <>
        <button onClick={() => { setCount(count + 1) }}>+</button>
        {count}
        <CoolBook addBooks={memoizedAddBook2} />
    </>
}

type BooksType = {
    addBooks: () => void
}

const Books = (props: BooksType) => {
    console.log('Books');
    return <div>
        <button onClick={() => props.addBooks()}>addBooks</button>
    </div>
}
const CoolBook = React.memo(Books)
