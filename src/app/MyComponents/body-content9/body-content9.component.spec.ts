import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyContent9Component } from './body-content9.component';

describe('BodyContent9Component', () => {
  let component: BodyContent9Component;
  let fixture: ComponentFixture<BodyContent9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyContent9Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyContent9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
