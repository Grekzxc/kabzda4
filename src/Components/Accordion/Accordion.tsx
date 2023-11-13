
type AccordionPropsType = {
    titleValue: string
    value: boolean
    onClick: () => void
}

export function Accordion(props: AccordionPropsType) {

    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={props.onClick} />
            {!props.value && <AccordionBody />}
        </div>
    )
}

type AccordionTitleType = {
    onClick: () => void
    title: string
}

export const AccordionTitle = (props: AccordionTitleType) => {
    return (
        <h3 onClick={props.onClick}>-- {props.title} --</h3>
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
