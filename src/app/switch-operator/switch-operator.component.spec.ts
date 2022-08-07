import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchOperatorComponent } from './switch-operator.component';

describe('SwitchOperatorComponent', () => {
  let component: SwitchOperatorComponent;
  let fixture: ComponentFixture<SwitchOperatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchOperatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
