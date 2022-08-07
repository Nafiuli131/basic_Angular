import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarnaryOperatorComponent } from './tarnary-operator.component';

describe('TarnaryOperatorComponent', () => {
  let component: TarnaryOperatorComponent;
  let fixture: ComponentFixture<TarnaryOperatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarnaryOperatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarnaryOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
