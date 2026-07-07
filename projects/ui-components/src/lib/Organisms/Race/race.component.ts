import { CommonModule } from '@angular/common';
import { Component, inject, input, OnInit } from '@angular/core';

import { RacecourseComponent } from '../../Molecules/Racecourse/racecourse.component';
import { HorseComponent } from "../../Molecules/Horse/horse.component";
import { RaceStore } from "./race.state"
import { patchState } from '@ngrx/signals';

@Component({
  selector: 'ui-race',
  standalone: true,
  imports: [CommonModule, RacecourseComponent, HorseComponent],
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.css'],
})
export class RaceComponent implements OnInit {
  public raceStore = inject(RaceStore)
  public HorseComponent = HorseComponent

  ngOnInit(): void {
    setTimeout(()=>{
      this.raceStore.startRace();
    }, 3000)
  }
}
