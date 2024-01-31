import { useState } from "react"
import { OnOff } from "./OnOff";
import { action } from '@storybook/addon-actions'


export default {
    component: OnOff,
};

export const OnOffDemo = () => <OnOff on={true} setOn={action('clicked')} />
export const OnOffDemo2 = () => <OnOff on={false} setOn={action('clicked')} />


export const ModeChanging = () => {
    const [onOff, setOnOff] = useState<boolean>(true)
    return (
        <OnOff on={onOff} setOn={() => setOnOff(!onOff)} />
    )
}


