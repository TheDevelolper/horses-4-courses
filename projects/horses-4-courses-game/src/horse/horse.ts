import { Component, effect, input, OnInit, signal } from '@angular/core';


@Component({
  selector: 'h4c-horse',
  imports: [],
  templateUrl: './horse.html',
  styleUrl: './horse.css',
})
export class Horse {

  public variant = input(1);
  public running = input(false);
  public style = signal({});

  private interval: null | number = null;

  constructor() {

    effect(() => {

      if (this.running()) {
        this.startRunning();
      } else {
        this.stopRunning();
      }

    });

  }

  public startRunning() {
   const movementAmount = 500;
    this.interval = setInterval(() => {
      let xPos = Math.floor(Math.random() * movementAmount) - movementAmount/2;

      this.style.set({
        'margin-left': `${xPos}px`,
      })
    },1000);
  }

  public stopRunning() {
    this.style.set({});
    if(this.interval !== null) {
      clearInterval(this.interval);
    }
  }
}
