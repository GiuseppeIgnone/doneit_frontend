import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo/todo.component';
import {NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/models/user/user.model';
import { TodoService } from 'src/app/services/todo.service';





@Component({
  selector: 'app-my-todo-card',
  templateUrl: './my-todo-card.component.html',
  styleUrls: ['./my-todo-card.component.css']
})
export class MyTodoCardComponent implements OnInit {

  @Input() todo: Todo
  showCorrectBody = 1
  @Output() messageEvent = new EventEmitter<Todo>()

  acceptedUser: User
  
  constructor(private todoService: TodoService
  ) {     console.log(this.todo);
  }

  ngOnInit() {
    this.getAcceptedUser()
  }


  changeBody(numBody) {
    this.showCorrectBody = numBody
  }

  getProponentsNumber(){
    return this.todo.proposals.length
  }

  sendMessage(){
    this.messageEvent.emit(this.todo);
  }

  getAcceptedUser(){
    for(let proposal of this.todo.proposals){
      console.log(proposal)
      if(proposal.state == "accepted"){
        this.acceptedUser = proposal.user
      }
    }
  }

  undoAcceptProposal(todo){
    this.todoService.undoAcceptProposal(todo.id).subscribe(
      response =>{
        console.log(response)
        this.messageEvent.emit(null);
      },
      error => {
        console.log(error)
      }
    )
  }

}
