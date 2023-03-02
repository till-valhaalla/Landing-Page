import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyContent2Component } from './body-content2.component';

describe('BodyContent2Component', () => {
  let component: BodyContent2Component;
  let fixture: ComponentFixture<BodyContent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyContent2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyContent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
