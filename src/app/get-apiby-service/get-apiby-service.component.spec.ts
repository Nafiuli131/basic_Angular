import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAPIbyServiceComponent } from './get-apiby-service.component';

describe('GetAPIbyServiceComponent', () => {
  let component: GetAPIbyServiceComponent;
  let fixture: ComponentFixture<GetAPIbyServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAPIbyServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAPIbyServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
