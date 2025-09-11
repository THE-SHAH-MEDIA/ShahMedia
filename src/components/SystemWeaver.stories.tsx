/* eslint-disable storybook/no-renderer-packages */
import type { Meta, StoryObj } from '@storybook/react';
import SystemWeaver from './SystemWeaver';

const meta: Meta<typeof SystemWeaver> = {
  title: 'Components/SystemWeaver',
  component: SystemWeaver,
};

export default meta;

type Story = StoryObj<typeof SystemWeaver>;

export const Default: Story = {};