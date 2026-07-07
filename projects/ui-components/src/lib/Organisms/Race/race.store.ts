import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { HorseComponent } from '../../../public-api';

type RaceParticipantType = typeof HorseComponent;
// | typeof RaceDogComponent
// | typeof RaceCarComponent;    <- extensible
// | typeof SpaceShipComponent;

type RaceParticipant = {
  id: number;
  number: number;
  xpos: number;
  type: RaceParticipantType;
};

const participants = [1, 2, 3, 4, 5].map<RaceParticipant>((x) => ({
  id: x,
  number: x,
  xpos: 20,
  type: HorseComponent,
}));

export type RaceState = {
  participants: RaceParticipant[];
  started: boolean;
};
const initialState: RaceState = {
  participants,
  started: false,
};

let participantMovementInterval: any;

export const RaceStore = signalStore(
  { providedIn: 'root', protectedState: false },
  withState(initialState),
  withMethods((store) => ({
    startRace() {
      if (store.started()) return;

      console.trace('startRace');

      patchState(store, {
        started: true,
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

      patchState(store, {
        started: false,
        participants: store.participants().map((p) => ({
          ...p,
          xpos: 0,
        })),
      });
    },
  })),
);
