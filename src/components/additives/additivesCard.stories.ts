import type {Meta, StoryObj} from '@storybook/react'
import AdditivesCard from './additivesCard'
import Source from './source';


const meta = {
    title: 'AdditivesCard',
    component: AdditivesCard,
    parameters: {
        layout: 'centerd',
    },
    tags: ['outodocs'],
    argTypes: {

    }
} satisfies Meta<typeof AdditivesCard>

export default meta;
type Story = StoryObj<typeof meta>

export const HalalCard: Story = {
    args: {
        code: 100,
        enumber: "E100",
        name: "Curcumin",
        isHalal: true,
        source: "plant",
        danger: 1
    }
}

export const HaramCard: Story = {
    args: {
        code: 102,
        enumber: "E102",
        name: "Tartrazine",
        isHalal: false,
        source: "chemistry",
        danger: 2
    }
}

export const MushboohCard: Story = {
    args: {
        code: 101,
        enumber: "E101",
        name: "Riboflavin",
        isHalal: null,
        source: "pg",
        danger: 2
    }
}