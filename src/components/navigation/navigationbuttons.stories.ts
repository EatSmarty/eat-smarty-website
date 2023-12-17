import type { Meta, StoryObj } from '@storybook/react';
import NavigationButtons from './navigation';

const meta = {
  title: 'Navigationbuttons',
  component: NavigationButtons,
  parameters: {
    layout: 'centerd',
  },
  tags: ['outodocs'],
  argTypes: {

  },
} satisfies Meta<typeof NavigationButtons>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NavigationPrimary: Story = {
  args: {

  },
};
