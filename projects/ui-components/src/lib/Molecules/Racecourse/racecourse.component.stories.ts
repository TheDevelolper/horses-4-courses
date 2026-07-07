import type { Meta, StoryObj } from '@storybook/angular';
import { Horse } from '../Horse/hourse.model';
import { RacecourseComponent } from './racecourse.component';
import { signal } from '@angular/core';


const meta: Meta<RacecourseComponent> = {
	title: 'Molecules/Racecourse',
	component: RacecourseComponent,
	parameters: {
	},
	tags: ['autodocs'],
} satisfies Meta<RacecourseComponent>;

export default meta;
type Story = StoryObj<RacecourseComponent>;

// const horses = Array.from({ length: 7 }, (_, i) => ({
//     number: i + 1,
//     xPosition: Math.random(),
// }));

export const Default: Story = {
    args: {
      // horses,
    }

};

