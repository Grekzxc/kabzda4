import { UncontrolledOnOff } from "./UncontrolledOnOff";
import { action } from '@storybook/addon-actions'

export default {
    component: UncontrolledOnOff,
};

const callback = action('zxc')


export const UncontrolledOnOffDemo = () => <UncontrolledOnOff onChange={callback} />


