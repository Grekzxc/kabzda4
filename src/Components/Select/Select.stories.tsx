
import { useState } from "react";
import { Select } from "./Select";
// import { action } from '@storybook/addon-actions'


export default {
    component: Select,
};



export const SelectToCute = () => {
    const [value, setValue] = useState(null)

    return (
        <Select
            onChenge={setValue}
            value={value}
            items={[
                { value: '1', title: 'Alex' },
                { value: '2', title: 'Grek' },
                { value: '3', title: 'Malush' }
            ]}
        />
    )
}

export const SelectToTwo = () => {
    const [value, setValue] = useState('2')
    return (
        <Select
            onChenge={setValue}
            value={value}
            items={[
                { value: '1', title: 'Alex' },
                { value: '2', title: 'Grek' },
                { value: '3', title: 'Malush' }
            ]}
        />
    )
}
