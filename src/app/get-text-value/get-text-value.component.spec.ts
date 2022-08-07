import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTextValueComponent } from './get-text-value.component';

describe('GetTextValueComponent', () => {
  let component: GetTextValueComponent;
  let fixture: ComponentFixture<GetTextValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetTextValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetTextValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
