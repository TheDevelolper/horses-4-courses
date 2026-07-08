import type { Meta, StoryObj } from '@storybook/angular';
import { LeaderboardComponent } from './leaderboard.component';

const meta: Meta<LeaderboardComponent> = {
  title: 'Molecules/Leaderboard',
  component: LeaderboardComponent,
  parameters: {},
  tags: ['autodocs'],
} satisfies Meta<LeaderboardComponent>;

export default meta;
type Story = StoryObj<LeaderboardComponent>;

export const Default: Story = {};
