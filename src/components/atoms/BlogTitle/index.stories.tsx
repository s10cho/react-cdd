import { Meta, StoryObj } from '@storybook/react';
import { BlogTitle } from '.';

const meta: Meta<typeof BlogTitle> = {
    title: 'Atoms/BlogTitle',
    component: BlogTitle,
};

export default meta;
type Story = StoryObj<typeof BlogTitle>;
export const Default: Story = {
    args: {
        title: '블로그 제목',
    },
};
