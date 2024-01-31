import { ChangeEvent, useRef, useState } from "react";
import { UInput } from "./UncontrolledInput";
import { action } from '@storybook/addon-actions'

export default {
    component: UInput,
};

export const UncontrolledInput = () => <UInput />
export const TrackValueOfUncontrolledInput = () => {
    let [value, setValue] = useState('')
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const actualValue = e.currentTarget.value
        setValue(actualValue)
    }
    return <>
        <input onChange={onChange} /> -- {value}
    </>
}
export const GetValueOfUncontrolledInputByButtonPress = () => {
    let [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const onClick = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }
    return <>
        <input ref={inputRef} /> <button onClick={onClick}>save</button> actualValue: {value}</>
}
export const ControlledInputWithFixedValue = () => <input value={'it-kamasutra'} />




export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')
    const onChange = (e: ChangeEvent<HTMLInputElement>) => { setParentValue(e.currentTarget.value) }
    return <input value={parentValue} onChange={onChange} />
}

export const ControlledCheckBox = () => {
    const [parentValue, setParentValue] = useState(true)
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }
    return <input onChange={onChange} checked={parentValue} type="checkbox" />
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined)
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <select value={parentValue} onChange={onChange}>
        <option value="">none</option>
        <option value="1">Minsk</option>
        <option value="2">Moskow</option>
        <option value="3">Kiev</option>
    </select>
}