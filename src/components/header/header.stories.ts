import type { Meta, StoryObj } from '@storybook/react';
import Header from './header';

const meta = {
  title: 'Header',
  component: Header,
  parameters: {
    layout: 'centerd',
  },
  tags: ['outodocs'],
  argTypes: {

  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const headerHome: Story = {
  args: {
    title: 'Home',
  },
};

export const headerAdditives: Story = {
  args: {
    title: 'Additives',
  },
};

export const headerScan: Story = {
  args: {
    title: 'Scan',
  },
};

export const headerSetting: Story = {
  args: {
    title: 'Setting',
  },
};
