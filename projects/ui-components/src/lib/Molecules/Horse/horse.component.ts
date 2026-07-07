import { Component, input } from '@angular/core';
import { CommonModule } from "@angular/common";

@Component({
	selector: 'ui-horse',
	templateUrl: './horse.component.html',
	styleUrls: ['./horse.component.css'],
 imports: [CommonModule]
})
export class HorseComponent {
	public number = input(1);
  public running = input(false);

	constructor() { }

	ngOnInit(): void {
	}

}
