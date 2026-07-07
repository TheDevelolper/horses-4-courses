import { CommonModule } from '@angular/common';
import { AfterContentInit, Component, ElementRef, input, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'ui-racecourse',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './racecourse.component.html',
  styleUrls: ['./racecourse.component.css'],
})
export class RacecourseComponent implements AfterContentInit {
  @ViewChild('content', { static: true })
  content!: ElementRef<HTMLDivElement>;

  ngAfterContentInit(): void {
    this.placeParticipants()
  }

  private placeParticipants() {

    const children = this.content.nativeElement.children as HTMLCollectionOf<HTMLElement>;

    for(let idx = 0; idx < children.length; idx++) {
      const element = children[idx] as HTMLElement;
      const verticalOffsetPx = 30;
      console.log(element)
      element.style.position = 'absolute';
      element.style.top = `${((idx) * verticalOffsetPx)}px`;
      element.style.left = '0';
    }


  }
}
