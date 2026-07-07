import type { Meta, StoryObj } from '@storybook/angular';
import { HorseComponent } from './horse.component';

const meta: Meta<HorseComponent> = {
	title: 'Molecules/Horse',
	component: HorseComponent,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<HorseComponent>;

export default meta;
type Story = StoryObj<HorseComponent>;

export const Default: Story = {
  argTypes: {
     running: {
      control: {
        type: "boolean"
      }
    },
    number: {
      control: {
        type: 'number', min:1, max:7, step: 1
      } }
  },
	args: {
    number: 1
  },
};

export const Running: Story = {
	args: {
    running: true,
    number: 5
  },
};

