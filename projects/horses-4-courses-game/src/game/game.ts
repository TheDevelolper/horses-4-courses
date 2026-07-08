import { Component, effect, inject, signal } from '@angular/core';
import { RaceComponent, RaceStore } from 'ui-components';

@Component({
  selector: 'h4c-game',
  providers: [RaceStore],
  imports: [RaceComponent],
  templateUrl: './game.html',
  styleUrl: './game.css',
})
export class Game {
  public raceStore = inject(RaceStore);

  private audioTrack = new Audio('wto.mp3');
  private finishing = signal(false);
  private finishingSquenceSeconds = 3;
  private raceDuration = 90;

  constructor() {
    this.audioTrack.preload = 'auto';

    effect(() => {
      if (this.raceStore.started()) {
        this.audioTrack.play().catch((err) => console.error(err));
      }
    });
  }

  private onAudioTimerUpdate = async () => {
    if (this.finishing() || !this.audioTrack.duration) {
      return;
    }

    const shouldFinish =
      this.audioTrack.currentTime + this.finishingSquenceSeconds > this.raceDuration;

    if (shouldFinish) {
      this.finishing.set(true);
      await this.finishSequence();
    }
  };

  public async finishSequence() {
    await this.fadeOutAudio(this.audioTrack, this.finishingSquenceSeconds * 1000);
    this.stopRace();
  }

  public stopRace() {
    this.raceStore.stopRace();
    this.finishing.set(false);
    this.audioTrack.pause();
    this.audioTrack.currentTime = 0;
    this.audioTrack.removeEventListener('timeupdate', this.onAudioTimerUpdate);
  }

  public startRace() {
    this.raceStore.startRace();
    this.audioTrack.volume = 1;
    this.audioTrack.currentTime = 0;
  }

  public fadeOutAudio(audio: HTMLAudioElement, duration: number): Promise<void> {
    return new Promise((resolve) => {
      const startVolume = audio.volume;
      const start = performance.now();

      const step = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);

        audio.volume = startVolume * (1 - progress);

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          audio.volume = 0;

          // Give the browser one more frame before pausing.
          requestAnimationFrame(() => {
            // audio.pause();
            // audio.currentTime = 0;
            // audio.volume = startVolume;
            resolve();
          });
        }
      };

      requestAnimationFrame(step);
    });
  }
}
