import type {Meta, StoryObj} from '@storybook/react'
import NavigationButtons from './navigationbuttons'

const meta = {
    title: 'Navigationbuttons',
    component: NavigationButtons,
    parameters: {
        layout: 'centerd',
    },
    tags: ['outodocs'],
    argTypes: {

    }
} satisfies Meta<typeof NavigationButtons>;

export default meta;
type Story = StoryObj<typeof meta>

export const NavigationHome: Story = {
    args: {
        icon: 'home'
    }
}

export const NavigationList: Story = {
    args: {
        icon: 'list'
    }
}

export const NavigationScan: Story = {
    args: {
        icon: 'scan'
    }
}

export const NavigationSetting: Story = {
    args: {
        icon: 'setting'
    }
}