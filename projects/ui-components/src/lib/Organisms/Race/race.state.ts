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

const participants = [1, 2, 3, 4, 5, 6, 7].map<RaceParticipant>((x) => ({
  id: x,
  number: x,
  xpos: 0,
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

export const RaceStore = signalStore(
  { providedIn: 'root', protectedState: false },
  withState(initialState),
  withMethods((store) => ({
    startRace() {
      console.log("Race Started!")
      patchState(store, {
        started: true
      });

      setInterval(()=>{
        patchState(store, {
          participants: store.participants().map((p) => ({
                ...p,
                xpos: Math.random() * 50,
              }))
            });
          }, 2000);

    },
  })));

