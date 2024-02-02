import React from "react"
import { useMemo, useState } from "react"


export default {
    title: 'useMemo'
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


const UsersStay = (props: { users: Array<string> }) => {
    console.log('UsersStay');

    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersStay)

export const HelpToReactMemo = () => {
    console.log('HelpToReactMemo');

    const [count, setCount] = useState(0)
    const [users, setUsers] = useState(['Alex', 'Grek', 'Malush'])

    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [users])

    const addUser = () => {
        const newUsers = [...users, 'Sveta' + new Date().getTime()]
        setUsers(newUsers)
    }

    return <>
        <button onClick={() => { setCount(count + 1) }}>+</button>
        <button onClick={() => addUser()}>addUser</button>
        {count}
        <Users users={newArray} />
    </>
}