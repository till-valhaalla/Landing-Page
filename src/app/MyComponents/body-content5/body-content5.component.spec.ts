import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyContent5Component } from './body-content5.component';

describe('BodyContent5Component', () => {
  let component: BodyContent5Component;
  let fixture: ComponentFixture<BodyContent5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyContent5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyContent5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
