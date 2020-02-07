import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from '../todo/todo.component';
import { TodoService } from 'src/app/services/todo.service';
import { ɵAnimationGroupPlayer } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.css']
})
export class TodoCardComponent implements OnInit {

  @Input() todo: Todo
  private showCorrectBody = 1
  alreadyProposed: boolean
  proponentsNumber: number
  @Output() messageEvent = new EventEmitter<Todo>()

  constructor(private todoService: TodoService, private router: Router) {
  }

  ngOnInit() {
    this.alreadyProposed = this.checkAlreadyProposed()
    this.proponentsNumber = this.getProponentsNumber()
  }


  handleTodoProposal() {
    this.todoService.sendProposal(this.todo).subscribe(
      response => {
        this.refreshTodo()
      },
      error => {
      }
    )
  }

  changeBody(numBody) {
    this.showCorrectBody = numBody
  }

  checkAlreadyProposed() {
    if (this.todo.proposals.length != 0) {
      for (let proposal of this.todo.proposals) {
        if (proposal.user.username == sessionStorage.getItem("username")) {
          return true;
        }
      }
      return false;
    } else {
      return false;
    }
  }

  getProponentsNumber() {
    return this.todo.proposals.length
  }

  refreshTodo(){
    this.alreadyProposed = true
    this.todoService.getGenericTodo(this.todo.id).subscribe(
      response => {
        this.todo = response
        this.proponentsNumber = this.getProponentsNumber()
      }
    )
  }

  isMyTodo(){
    if(sessionStorage.getItem("username") == this.todo.user.username){
      return true;
    }
    return false;
  }


  sendMessage(){
    this.messageEvent.emit(this.todo);
  }
}
