import type { Meta, StoryObj } from '@storybook/angular';
import { RacecourseComponent } from './racecourse.component';

const meta: Meta<RacecourseComponent> = {
  title: 'Molecules/Racecourse',
  component: RacecourseComponent,
  parameters: {},
  tags: ['autodocs'],
} satisfies Meta<RacecourseComponent>;

export default meta;
type Story = StoryObj<RacecourseComponent>;

export const Default: Story = {
  args: {
    moving: false,
  },
};
