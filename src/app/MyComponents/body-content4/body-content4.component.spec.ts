import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyContent4Component } from './body-content4.component';

describe('BodyContent4Component', () => {
  let component: BodyContent4Component;
  let fixture: ComponentFixture<BodyContent4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyContent4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyContent4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
