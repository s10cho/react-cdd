import { Meta, StoryObj } from '@storybook/react';
import { ButtonV2 } from '.';

const meta: Meta<typeof ButtonV2> = {
    title: 'Atoms/ButtonV2',
    component: ButtonV2,
};

export default meta;
type Story = StoryObj<typeof ButtonV2>;
export const RedButton: Story = {
    args: {
        label: '등록',
    },
};
export const BlueButton: Story = {
    args: {
        label: '닫기',
        color: '#304FFE',
    },
};
