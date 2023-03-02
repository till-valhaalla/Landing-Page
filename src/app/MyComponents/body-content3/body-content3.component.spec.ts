import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyContent3Component } from './body-content3.component';

describe('BodyContent3Component', () => {
  let component: BodyContent3Component;
  let fixture: ComponentFixture<BodyContent3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyContent3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyContent3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
