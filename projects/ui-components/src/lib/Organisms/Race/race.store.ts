import { computed } from '@angular/core';
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { HorseComponent } from '../../../public-api';

type RaceParticipantType = typeof HorseComponent;
// | typeof RaceDogComponent
// | typeof RaceCarComponent;    <- extensible
// | typeof SpaceShipComponent;

const HORSE_NAMES = [
  'Oats McGee',
  'Horsey McHorseface',
  'Yay or Neigh',
  'Sir Neighs-a-Lot',
  'Hay Guuurl',
];

type RaceParticipant = {
  id: number;
  number: number;
  name: string;
  xpos: number;
  type: RaceParticipantType;
};

const participants = [1, 2, 3, 4, 5].map<RaceParticipant>((x) => ({
  id: x,
  number: x,
  name: HORSE_NAMES[x - 1],
  xpos: 20,
  type: HorseComponent,
}));

export type RaceState = {
  participants: RaceParticipant[];
  started: boolean;
  results: LeaderboardEntry[];
};
const initialState: RaceState = {
  participants,
  started: false,
  results: [],
};

export type LeaderboardEntry = {
  position: number | '-';
  name: string;
  number: number;
};

let participantMovementInterval: any;

export const RaceStore = signalStore(
  { providedIn: 'root', protectedState: false },
  withState(initialState),
  withComputed((store) => ({
    leaderboard: computed(() => {
      const participants = store.participants();
      const started = store.started();
      const results = store.results();

      if (!started) {
        if (results.length) {
          return results;
        }

        return participants
          .slice()
          .sort((a, b) => a.number - b.number)
          .map((p) => ({
            position: '-' as const,
            name: p.name,
            number: p.number,
          }));
      }

      return participants
        .slice()
        .sort((a, b) => b.xpos - a.xpos)
        .map((p, i) => ({
          position: i + 1,
          name: p.name,
          number: p.number,
        }));
    }),
  })),
  withMethods((store) => ({
    startRace() {
      if (store.started()) return;

      console.trace('startRace');

      patchState(store, {
        started: true,
        results: [],
      });

      participantMovementInterval = setInterval(() => {
        patchState(store, {
          participants: store.participants().map((p) => ({
            ...p,
            xpos: Math.random() * 25 + 20,
          })),
        });
      }, 1000);
    },

    stopRace() {
      if (store.started() === false) return;

      console.trace('Race Stopped');

      clearInterval(participantMovementInterval);

      const finalResults = store
        .participants()
        .slice()
        .sort((a, b) => b.xpos - a.xpos)
        .map((p, i) => ({
          position: i + 1,
          name: p.name,
          number: p.number,
        }));

      patchState(store, {
        started: false,
        results: finalResults,
        participants: store.participants().map((p) => ({
          ...p,
          xpos: 0,
        })),
      });
    },
  })),
);
