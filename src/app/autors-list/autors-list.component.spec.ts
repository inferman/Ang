import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorsListComponent } from './autors-list.component';

describe('AutorsListComponent', () => {
  let component: AutorsListComponent;
  let fixture: ComponentFixture<AutorsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutorsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutorsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
