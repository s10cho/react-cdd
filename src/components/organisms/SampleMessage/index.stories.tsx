import { Meta, StoryObj } from '@storybook/react';
import { SampleComponent } from '.';

const meta: Meta<typeof SampleComponent> = {
    title: 'Organisms/SampleComponent',
    component: SampleComponent,
};

export default meta;
type Story = StoryObj<typeof SampleComponent>;
export const Default: Story = {
    args: {
        title: '블로그 글 제목',
        body: '블로그 글 본문',
    },
};
