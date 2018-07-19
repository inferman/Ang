import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsArrComponent } from './forms-arr.component';

describe('FormsArrComponent', () => {
  let component: FormsArrComponent;
  let fixture: ComponentFixture<FormsArrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsArrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsArrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
