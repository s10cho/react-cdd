import {Meta, StoryObj} from '@storybook/react';
import {ButtonV1} from '.';

const meta: Meta<typeof ButtonV1> = {
    title: 'Atoms/ButtonV1',
    component: ButtonV1,
};

export default meta;
type Story = StoryObj<typeof ButtonV1>;
export const Default: Story = {};
