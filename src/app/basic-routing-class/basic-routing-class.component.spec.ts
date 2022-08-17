import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicRoutingClassComponent } from './basic-routing-class.component';

describe('BasicRoutingClassComponent', () => {
  let component: BasicRoutingClassComponent;
  let fixture: ComponentFixture<BasicRoutingClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicRoutingClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicRoutingClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
