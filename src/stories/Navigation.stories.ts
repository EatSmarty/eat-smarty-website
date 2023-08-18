import type {Meta, StoryObj} from '@storybook/react'

import Navigation from './Navigation'

const meta: Meta<typeof Navigation> = {
    component: Navigation,
    title: "Example/Navigation",
    tags: ['autodocs'],
    argTypes: {
        color: {
            control: {type: 'radio'},
            options: ['#0069FE', 'tomato', 'orange']
        }
    },
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {

}

export const Blue: Story = {
    args: {
        color: '#0069FE'
    }
}

export const Red: Story = {
    args: {
        color: 'tomato'
    }
}