import {Meta, StoryObj} from '@storybook/react';
import {Button} from '.';

const meta: Meta<typeof Button> = {
    title: 'Atoms/Button',
    component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;
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
