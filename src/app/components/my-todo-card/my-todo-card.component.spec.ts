import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTodoCardComponent } from './my-todo-card.component';

describe('MyTodoCardComponent', () => {
  let component: MyTodoCardComponent;
  let fixture: ComponentFixture<MyTodoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTodoCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTodoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
