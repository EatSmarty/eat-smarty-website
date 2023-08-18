import type { Meta, StoryObj } from '@storybook/react';
import {AdditivesCard} from './AdditivesCard'

const meta = {
  title: 'Example/AdditivesCard',
  component: AdditivesCard,
  parameters: {

    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
  },
} satisfies Meta<typeof AdditivesCard>;

export default meta;
type Story = StoryObj<typeof meta>;
// type Story = StoryObj<typeof meta/>

export const HalalCard: Story = {

};

export const HaramCard: Story = {

};

export const MushboohCard: Story = {

};