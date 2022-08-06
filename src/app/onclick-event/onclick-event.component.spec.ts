import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnclickEventComponent } from './onclick-event.component';

describe('OnclickEventComponent', () => {
  let component: OnclickEventComponent;
  let fixture: ComponentFixture<OnclickEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnclickEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnclickEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
