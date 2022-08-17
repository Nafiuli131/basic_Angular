import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParetRouteClassComponent } from './paret-route-class.component';

describe('ParetRouteClassComponent', () => {
  let component: ParetRouteClassComponent;
  let fixture: ComponentFixture<ParetRouteClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParetRouteClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParetRouteClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
