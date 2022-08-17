import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Parentclassroute2Component } from './parentclassroute2.component';

describe('Parentclassroute2Component', () => {
  let component: Parentclassroute2Component;
  let fixture: ComponentFixture<Parentclassroute2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Parentclassroute2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Parentclassroute2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
