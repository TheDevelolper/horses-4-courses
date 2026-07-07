import type { Meta, StoryObj } from '@storybook/angular';
import { RaceComponent } from './race.component';

const meta: Meta<RaceComponent> = {
	title: 'Organisms/Race',
	component: RaceComponent,
	parameters: {
	},
	tags: ['autodocs'],
} satisfies Meta<RaceComponent>;

export default meta;
type Story = StoryObj<RaceComponent>;


export const Default: Story = {
    args: {

    }

};

