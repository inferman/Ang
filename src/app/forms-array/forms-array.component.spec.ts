import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsArrayComponent } from './forms-array.component';

describe('FormsArrayComponent', () => {
  let component: FormsArrayComponent;
  let fixture: ComponentFixture<FormsArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
