import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { HorseComponent } from '../../Molecules/Horse/horse.component';
import { RacecourseComponent } from '../../Molecules/Racecourse/racecourse.component';
import { RaceStore } from './race.store';

@Component({
  selector: 'ui-race',
  standalone: true,
  imports: [CommonModule, RacecourseComponent, HorseComponent],
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.css'],
})
export class RaceComponent {
  public raceStore = inject(RaceStore);
  public HorseParticipant = HorseComponent;
}
