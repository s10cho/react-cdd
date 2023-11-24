import {Meta, StoryObj} from '@storybook/react';
import {BlogItem} from '.';

const meta: Meta<typeof BlogItem> = {
    title: 'Organisms/BlogItem',
    component: BlogItem,
};

export default meta;
type Story = StoryObj<typeof BlogItem>;
export const Default: Story = {
    args: {
        title: '블로그 글 제목',
        body: '블로그 글 본문',
    },
};
