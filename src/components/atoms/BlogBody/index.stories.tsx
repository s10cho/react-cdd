import { Meta, StoryObj } from '@storybook/react';
import { BlogBody } from '.';

const meta: Meta<typeof BlogBody> = {
    title: 'Atoms/BlogBody',
    component: BlogBody,
};

export default meta;
type Story = StoryObj<typeof BlogBody>;
export const Default: Story = {
    args: {
        body: '블로그 글',
    },
};
