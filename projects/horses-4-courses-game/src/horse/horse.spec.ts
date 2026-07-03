import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Horse } from './horse';

describe('Horse', () => {
  let component: Horse;
  let fixture: ComponentFixture<Horse>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Horse]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Horse);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
