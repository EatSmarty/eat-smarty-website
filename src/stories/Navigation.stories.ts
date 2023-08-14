import type {Meta, StoryObj} from '@storybook/react'

import Navigation from './Navigation'

const meta: Meta<typeof Navigation> = {
    component: Navigation,
    title: "Navigation"
}

export default meta

type Story = StoryObj<typeof meta>

export const Base: Story = {
    args: {

    }
}