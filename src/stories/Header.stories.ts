import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

const meta = {
  title: 'Example/Header',
  component: Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Home: Story = {
  args: {
    page: {
      title: 'Home',
    },
  },
};

export const Additives: Story = {
  args: {
    page: {
      title: 'Additives'
    }
  }
};

export const Scan: Story = {
  args: {
    page: {
      title: 'Scan'
    }
  }
};

export const Setting: Story = {
  args: {
    page: {
      title: 'Setting'
    }
  }
};