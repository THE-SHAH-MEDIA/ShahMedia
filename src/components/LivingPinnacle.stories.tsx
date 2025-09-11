/* eslint-disable storybook/no-renderer-packages */
import type { Meta, StoryObj } from '@storybook/react';
import LivingPinnacle from './LivingPinnacle';

const meta: Meta<typeof LivingPinnacle> = {
  title: 'Components/LivingPinnacle',
  component: LivingPinnacle,
};

export default meta;

type Story = StoryObj<typeof LivingPinnacle>;

export const Default: Story = {};