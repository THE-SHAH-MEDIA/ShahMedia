/* eslint-disable storybook/no-renderer-packages */
import type { Meta, StoryObj } from '@storybook/react';
import Pricing from './Pricing';

const meta: Meta<typeof Pricing> = {
  title: 'Components/Pricing',
  component: Pricing,
};

export default meta;

type Story = StoryObj<typeof Pricing>;

export const Default: Story = {};