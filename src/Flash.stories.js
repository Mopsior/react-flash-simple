import React from 'react'
import Flash from './Flash'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'Flash',
    component: Flash,
    argTypes: {
        theme: {
            options: ['dark', 'light'],
            control: { type: 'select' }
        }
    }
}

const Template = args => <Flash {...args}/>

export const FlashMessage = Template.bind({})
FlashMessage.args = {
    title: 'Test',
    label: 'Example label',
    color: 'blue',
    theme: 'dark'
}