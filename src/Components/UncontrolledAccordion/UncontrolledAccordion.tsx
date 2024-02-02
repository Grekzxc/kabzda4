import { useReducer, useState } from "react"
import { TOGGLE_CONSTANT, reducer } from "./reducer"


type AccordionPropsType = {
    titleValue: string
    // collapsed: boolean

}



export function UncontrolledAccordion(props: AccordionPropsType) {
    // const [collapsed, setCollapsed] = useState(false)
    const [state, dispatch] = useReducer(reducer, { collapsed: false })


    return (
        <div>
            {/* <AccordionTitle title={props.titleValue} onClick={() => { setCollapsed(!collapsed) }} /> */}
            <AccordionTitle title={props.titleValue} onClick={() => {
                dispatch({ type: TOGGLE_CONSTANT })
            }} />
            {!state.collapsed && <AccordionBody />}
        </div>
    )
}

type AccordionTitleType = {
    title: string
    onClick: () => void
}

export const AccordionTitle = (props: AccordionTitleType) => {

    return (
        <h3 onClick={() => { props.onClick() }}>-- {props.title} --</h3>
    )
}

export const AccordionBody = () => {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}
