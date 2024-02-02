import React from "react"
import { useState } from "react"



export default {
    title: 'React.memo demo'
}

const Counter = (props: { count: number }) => {
    return <div>{props.count}</div>
}

const UsersStay = (props: { users: Array<string> }) => {
    console.log('USER');

    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersStay)

export const Example1 = () => {
    const [count, setCount] = useState(0)
    const [users, setUsers] = useState(['Alex', 'Grek', 'Malush'])

    const addUser = () => {
        const newUsers = [...users, 'Sveta' + new Date().getTime()]
        setUsers(newUsers)
    }

    return <>
        <button onClick={() => { setCount(count + 1) }}>+</button>
        <button onClick={addUser}>add user</button>

        <Counter count={count} />
        <Users users={users} />
    </>
}