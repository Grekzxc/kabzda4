import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';
import { useState } from 'react';
import { action } from '@storybook/addon-actions'

export default {
    component: Accordion,
};


const onChangeCallBack = action('onClick')

export const CollapsedAccordion = () => {
    return (
        <Accordion
            value={true}
            onClick={onChangeCallBack}
            titleValue='Collapsed Accordion' />
    )
}

export const OpenAccordion = () => {
    const [coll, setColl] = useState(false)
    return (
        <Accordion value={coll} onClick={() => { setColl(!coll) }} titleValue='Opened Accordion' />
    )
}