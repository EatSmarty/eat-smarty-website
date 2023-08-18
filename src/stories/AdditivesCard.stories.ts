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
  args: {
    backgroundColor: '#DCFCE7',
  }
};

export const HaramCard: Story = {
  args: {
    backgroundColor: '#FEE2E2'
  }
};

export const MushboohCard: Story = {
  args: {
    backgroundColor: '#FFEDD5'
  }
};