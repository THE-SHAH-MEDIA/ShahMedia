/* eslint-disable storybook/no-renderer-packages */
import type { Meta, StoryObj } from '@storybook/react';
import AiConcierge from './AiConcierge';

const meta: Meta<typeof AiConcierge> = {
  title: 'Components/AiConcierge',
  component: AiConcierge,
};

export default meta;

type Story = StoryObj<typeof AiConcierge>;

export const Default: Story = {};