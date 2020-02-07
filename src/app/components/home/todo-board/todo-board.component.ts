import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../todo/todo.component';
import { TodoService } from 'src/app/services/todo.service';
import { RefreshService } from 'src/app/services/refresh.service';

@Component({
  selector: 'app-todo-board',
  templateUrl: './todo-board.component.html',
  styleUrls: ['./todo-board.component.css']
})
export class TodoBoardComponent implements OnInit {

  @Input() personal
  todoList: Todo[]
  currentTodo: Todo

  constructor(private todoService: TodoService, private refreshService: RefreshService) { }

  ngOnInit() {
    this.showAllTodo()
    this.refreshService.todoRefreshMessage.subscribe(m => {
      this.showAllTodo()
    })

  }

  showAllTodo() {
    this.todoService.getAllTodo().subscribe(
      response => {
        this.todoList = response;
        console.log(response)
      },
      error => {
        console.log(error)
      }
    )
  }

  openModal($event) {
    if ($event) {
      this.currentTodo = $event
    } else {
      this.showAllTodo()
    }
  }

  closeModal() {
    this.currentTodo = null;
  }


}
