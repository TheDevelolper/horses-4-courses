import type { Meta, StoryObj } from '@storybook/angular';
import { Component, effect, inject, input } from '@angular/core';
import { moduleMetadata } from '@storybook/angular';

import { RaceComponent } from './race.component';
import { RaceStore } from './race.store';

@Component({
  selector: 'storybook-race-host',
  standalone: true,
  imports: [RaceComponent],
  template: `<ui-race />`,
})
class StoryHostComponent {
  racing = input(false);

  private readonly store = inject(RaceStore);

  constructor() {
    effect(() => {
      if (this.racing()) {
        this.store.startRace();
      } else {
        this.store.stopRace();
      }
    });
  }
}

const meta: Meta = {
  title: 'Organisms/Race',

  decorators: [
    moduleMetadata({
      imports: [StoryHostComponent],
    }),
  ],

  render: (args) => ({
    props: args,
    template: `
      <storybook-race-host
        [racing]="racing">
      </storybook-race-host>
    `,
  }),

  argTypes: {
    racing: {
      control: 'boolean',
    },
  },

  args: {
    racing: false,
  },

  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
