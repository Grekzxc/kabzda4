import { useState } from "react"

type AccordionPropsType = {
    titleValue: string
    // collapsed: boolean

}

export function UncontrolledAccordion(props: AccordionPropsType) {
    const [collapsed, setCollapsed] = useState(false)


    return (
        <div>
            <AccordionTitle title={props.titleValue} />
            <button onClick={() => { setCollapsed(!collapsed) }}>toggle</button>
            {collapsed && <AccordionBody />}
        </div>
    )
}

type AccordionTitleType = {
    title: string
}

export const AccordionTitle = (props: AccordionTitleType) => {

    return (
        <h3>-- {props.title} --</h3>
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
