import {Meta, StoryObj} from '@storybook/react';
import {DashboardTable} from '.';

const meta: Meta<typeof DashboardTable> = {
    title: 'Page/DashboardTable',
    component: DashboardTable,
};

export default meta;
type Story = StoryObj<typeof DashboardTable>;
export const Default: Story = {};
