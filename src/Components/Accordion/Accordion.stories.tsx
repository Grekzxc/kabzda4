import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';
import { useState } from 'react';
import { action } from '@storybook/addon-actions'

export default {
    component: Accordion,
};


const onChangeCallBack = action('onClick')
const onClickItem = action('some item was clicked')

export const CollapsedAccordion = () => {
    return (
        <Accordion
            value={true}
            onClick={onChangeCallBack}
            titleValue='Collapsed Accordion'
            items={[{ title: 'Alex', value: 1 }, { title: 'Grek', value: 2 }, { title: 'Malush', value: 3 }]}
            onClickItem={onClickItem}
        />
    )
}

export const OpenAccordion = () => {
    const [coll, setColl] = useState(false)
    return (
        <Accordion
            items={[{ title: 'Alex', value: 1 }, { title: 'Grek', value: 2 }, { title: 'Malush', value: 3 }]}
            value={coll} onClick={() => { setColl(!coll) }}
            titleValue='Opened Accordion'
            onClickItem={onClickItem}
        />
    )
}