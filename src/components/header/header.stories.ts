import type {Meta, StoryObj} from '@storybook/react'
import Header from './header'

const meta = {
    title: 'Header',
    component: Header,
    parameters: {
        layout: 'centerd',
    },
    tags: ['outodocs'],
    argTypes: {

    }
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>

export const HeaderHome: Story = {
    args: {
        title: 'Home'
    }
}

export const HeaderAdditives: Story = {
    args: {
        title: 'Additives'
    }
}

export const HeaderScan: Story = {
    args: {
        title: 'Scan'
    }
}

export const HeaderSetting: Story = {
    args: {
        title: 'Setting'
    }
}