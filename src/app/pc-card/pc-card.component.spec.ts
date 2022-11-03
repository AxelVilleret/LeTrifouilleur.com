import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcCardComponent } from './pc-card.component';

describe('PcCardComponent', () => {
  let component: PcCardComponent;
  let fixture: ComponentFixture<PcCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PcCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
