import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParetRouteComponent } from './paret-route.component';

describe('ParetRouteComponent', () => {
  let component: ParetRouteComponent;
  let fixture: ComponentFixture<ParetRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParetRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParetRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
