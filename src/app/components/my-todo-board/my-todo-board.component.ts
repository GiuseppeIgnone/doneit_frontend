import { Component, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../todo/todo.component';
import { TodoService } from 'src/app/services/todo.service';
import { TodoCardComponent } from '../todo-card/todo-card.component';

@Component({
  selector: 'app-my-todo-board',
  templateUrl: './my-todo-board.component.html',
  styleUrls: ['./my-todo-board.component.css']
})
export class MyTodoBoardComponent implements OnInit {

  todoList: Todo[];
  currentTodo: Todo;
  activatedBoard: string
  username: string = ''

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.getMyTodoList('published')
    this.activatedBoard = "published"
    this.username = sessionStorage.getItem("username")
  }

  getMyTodoList(state) {
    this.todoService.getMyTodoList(state).subscribe(
      response => {
        console.log(response);
        this.todoList = response
        this.activatedBoard = state
      },
      error => {
        console.log(error)
      }

    )
  }

  getJoinedTodoList() {
    this.activatedBoard = 'pending'
    this.todoService.getJoinedTodo().subscribe(
      result => {
        this.todoList = result
      },
      error => {

      }
    )
  }

  receiveMessage($event) {
    if ($event) {
      this.currentTodo = $event
    } else {
      this.getMyTodoList('accepted')
    }
  }

  closeModal() {
    this.currentTodo = null;
  }

  acceptProposal(proposal) {
    console.log("proposal id: " + proposal.id)
    this.todoService.acceptProposal(this.currentTodo, proposal.id).subscribe(
      response => {
        console.log(response)
        this.closeModal()
        this.getMyTodoList('accepted')

      },
      error => {
        console.log(error)
      }
    )
  }

  refuseProposal(proposal) {
    console.log("rifiuto la proposta:" + proposal.id)
    this.todoService.refuseProposal(proposal.id).subscribe(
      response => {
        console.log(response)
        this.updateProposal(proposal, "refused")
      },
      error => {
        console.log(error)
      }
    )
  }

  undoRefuse(proposal) {
    this.todoService.undoRefuseProposal(proposal.id).subscribe(
      response => {
        console.log(response)
        this.updateProposal(proposal, "in progress")
      },
      error => {
        console.log(error)
      }
    )
    console.log("annullo la proposta:" + proposal.id)
  }

  updateProposal(proposal, newState) {
    let i = this.currentTodo.proposals.indexOf(proposal);
    this.currentTodo.proposals[i].state = newState
  }

}
