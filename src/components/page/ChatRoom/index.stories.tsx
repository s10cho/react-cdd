import {Meta, StoryObj} from '@storybook/react';
import {ChatRoom} from '.';

const meta: Meta<typeof ChatRoom> = {
    title: 'Page/ChatRoom',
    component: ChatRoom,
};

export default meta;
type Story = StoryObj<typeof ChatRoom>;
export const Default: Story = {};
