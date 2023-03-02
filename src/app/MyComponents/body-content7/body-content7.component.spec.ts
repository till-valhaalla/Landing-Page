import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyContent7Component } from './body-content7.component';

describe('BodyContent7Component', () => {
  let component: BodyContent7Component;
  let fixture: ComponentFixture<BodyContent7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyContent7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyContent7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
