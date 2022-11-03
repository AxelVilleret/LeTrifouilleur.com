import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Filtres2Component } from './filtres2.component';

describe('Filtres2Component', () => {
  let component: Filtres2Component;
  let fixture: ComponentFixture<Filtres2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Filtres2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Filtres2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
