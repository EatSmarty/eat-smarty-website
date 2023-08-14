import type {Meta, StoryObj} from '@storybook/react'

import Navigation from './Navigation'

const meta: Meta<typeof Navigation> = {
    component: Navigation,
    title: "Navigation",
    tags: ['autodocs'],
    argTypes: {
        variant: {
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
        variant: '#0069FE'
    }
}

export const Red: Story = {
    args: {
        variant: 'tomato'
    }
}