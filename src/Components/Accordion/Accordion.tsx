
type ItemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    titleValue: string
    value: boolean
    onClick: () => void
    items: ItemType[]
    onClickItem: (value: any) => void

}

export function Accordion(props: AccordionPropsType) {

    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={props.onClick} />
            {!props.value && <AccordionBody items={props.items} onClickItem={props.onClickItem} />}
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

type AccordionBodyType = {
    items: ItemType[]
    onClickItem: (value: any) => void
}

export const AccordionBody = (props: AccordionBodyType) => {
    return (
        <ul>
            {props.items.map((i, index) => <li onClick={() => { props.onClickItem(i.value) }} key={index}>{i.title}</li>)}
        </ul>
    )
}
