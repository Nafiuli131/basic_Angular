import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Parentclassroute3Component } from './parentclassroute3.component';

describe('Parentclassroute3Component', () => {
  let component: Parentclassroute3Component;
  let fixture: ComponentFixture<Parentclassroute3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Parentclassroute3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Parentclassroute3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
