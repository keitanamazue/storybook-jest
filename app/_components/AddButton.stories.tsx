import type { Meta, StoryObj } from '@storybook/react';

import AddButton from './AddButton';

const meta: Meta<typeof AddButton> = {
  component: AddButton,
};

export default meta;
type Story = StoryObj<typeof AddButton>;

export const Primary: Story = {
  name: 'メンバー追加ボタン',
  args: {
    text: "メンバーを追加",
    disabled: true,
    active: true,
  },
};
