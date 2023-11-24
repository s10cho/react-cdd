import {Meta, StoryObj} from '@storybook/react';
import {Input} from '.';

const meta: Meta<typeof Input> = {
    title: 'Molecules/Input',
    component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;
export const Default: Story = {
    args: {
        label: 'Title',
        value: '블로그 제목',
    },
};
