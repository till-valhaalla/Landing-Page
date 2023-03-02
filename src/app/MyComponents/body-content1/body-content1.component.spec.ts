import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyContent1Component } from './body-content1.component';

describe('BodyContent1Component', () => {
  let component: BodyContent1Component;
  let fixture: ComponentFixture<BodyContent1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyContent1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyContent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
