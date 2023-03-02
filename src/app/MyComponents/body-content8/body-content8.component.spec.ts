import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyContent8Component } from './body-content8.component';

describe('BodyContent8Component', () => {
  let component: BodyContent8Component;
  let fixture: ComponentFixture<BodyContent8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyContent8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyContent8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
