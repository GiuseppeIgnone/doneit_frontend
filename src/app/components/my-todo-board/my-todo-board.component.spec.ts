import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTodoBoardComponent } from './my-todo-board.component';

describe('MyTodoBoardComponent', () => {
  let component: MyTodoBoardComponent;
  let fixture: ComponentFixture<MyTodoBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTodoBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTodoBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
