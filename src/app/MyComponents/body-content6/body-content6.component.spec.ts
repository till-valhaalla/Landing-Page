import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyContent6Component } from './body-content6.component';

describe('BodyContent6Component', () => {
  let component: BodyContent6Component;
  let fixture: ComponentFixture<BodyContent6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyContent6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyContent6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
