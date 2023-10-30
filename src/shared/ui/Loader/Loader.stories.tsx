import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Loader } from './Loader';

const meta = {
  title: 'shared/Loader',
  component: Loader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: { },
  args: {
    to: '/',
  },
} as Meta<typeof Loader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
};

export const Dark: Story = {
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
