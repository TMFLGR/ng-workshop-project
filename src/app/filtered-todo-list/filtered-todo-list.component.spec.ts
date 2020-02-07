import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredTodoListComponent } from './filtered-todo-list.component';

describe('FilteredTodoListComponent', () => {
  let component: FilteredTodoListComponent;
  let fixture: ComponentFixture<FilteredTodoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilteredTodoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilteredTodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
