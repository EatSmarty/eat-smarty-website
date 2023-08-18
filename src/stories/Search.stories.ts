import type { Meta, StoryObj } from '@storybook/react';
import {Search} from './Search'

const meta = {
  title: 'Example/Search',
  component: Search,
  parameters: {

    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
  },
} satisfies Meta<typeof Search>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Primary: Story = {

  };