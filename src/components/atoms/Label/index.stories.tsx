import {Meta, StoryObj} from '@storybook/react';
import {Label} from '.';

const meta: Meta<typeof Label> = {
    title: 'Atoms/Label',
    component: Label,
};

export default meta;
type Story = StoryObj<typeof Label>;
export const Default: Story = {
    args: {
        text: '블로그 제목',
    },
};
