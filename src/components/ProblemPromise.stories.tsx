/* eslint-disable storybook/no-renderer-packages */
import type { Meta, StoryObj } from '@storybook/react';
import ProblemPromise from './ProblemPromise';

const meta: Meta<typeof ProblemPromise> = {
  title: 'Components/ProblemPromise',
  component: ProblemPromise,
};

export default meta;

type Story = StoryObj<typeof ProblemPromise>;

export const Default: Story = {};