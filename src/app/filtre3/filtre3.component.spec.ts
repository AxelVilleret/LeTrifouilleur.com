import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Filtre3Component } from './filtre3.component';

describe('Filtre3Component', () => {
  let component: Filtre3Component;
  let fixture: ComponentFixture<Filtre3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Filtre3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Filtre3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
