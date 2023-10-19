
type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
}

export function Accordion(props: AccordionPropsType) {
    if (props.collapsed === true) {
        return (
            <div>
                <AccordionTitle title={props.titleValue} />
            </div>
        )
    } else {
        return (
            <div>
                <AccordionTitle title={props.titleValue} />
                <AccordionBody />
            </div>
        )
    }
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
