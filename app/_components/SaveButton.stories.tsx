import type { Meta, StoryObj } from '@storybook/react';

import SaveButton from './SaveButton';

const meta: Meta<typeof SaveButton> = {
  component: SaveButton,
};

export default meta;
type Story = StoryObj<typeof SaveButton>;

export const Primary: Story = {
  args: {},
};


export const S: Story = {
  args: {},
};
