import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyContent10Component } from './body-content10.component';

describe('BodyContent10Component', () => {
  let component: BodyContent10Component;
  let fixture: ComponentFixture<BodyContent10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyContent10Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyContent10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
