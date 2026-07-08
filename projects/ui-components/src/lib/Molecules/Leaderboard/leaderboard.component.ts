import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RaceStore } from '../../Organisms/Race/race.store';

@Component({
  selector: 'ui-leaderboard',
  imports: [],
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeaderboardComponent {
  public raceStore = inject(RaceStore);
}
