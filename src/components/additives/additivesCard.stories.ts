import type { Meta, StoryObj } from '@storybook/react';
import AdditivesCard from './additivesCard';

const meta = {
  title: 'AdditivesCard',
  component: AdditivesCard,
  parameters: {
    layout: 'centerd',
  },
  tags: ['outodocs'],
  argTypes: {

  },
} satisfies Meta<typeof AdditivesCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const halalCard: Story = {
  args: {
    code: 100,
    enumber: 'E100',
    name: 'Curcumin',
    isHalal: true,
    source: 'plant',
    danger: 1,
  },
};

export const haramCard: Story = {
  args: {
    code: 102,
    enumber: 'E102',
    name: 'Tartrazine',
    isHalal: false,
    source: 'chemistry',
    danger: 2,
  },
};

export const mushboohCard: Story = {
  args: {
    code: 101,
    enumber: 'E101',
    name: 'Riboflavin',
    isHalal: null,
    source: 'pig',
    danger: 2,
  },
};
