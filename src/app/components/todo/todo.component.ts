import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user/user.model';
import { Category } from 'src/app/models/category/category';
import { CategoryService } from 'src/app/services/category.service';
import { Proposal } from 'src/app/models/proposal/proposal';
import { TodoCardComponent } from '../todo-card/todo-card.component';
import { TodoBoardComponent } from '../home/todo-board/todo-board.component';
import {MessageCode} from 'src/app/models/response-message/message-code'
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { UserService } from 'src/app/services/user.service';
import { PersonalCard } from 'src/app/models/personal-card/personal-card';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  private categories: Category[]
  private todo: Todo = new Todo()
  private todoId: number
  private todoResponseMessage: number

  constructor(private todoService: TodoService, 
    private categoryService: CategoryService,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }


  ngOnInit() {
      this.todoService.todoResponseMessage.subscribe(m => {
      this.todoResponseMessage = m
    });

    this.todoId = this.activatedRoute.snapshot.params['id']
    if (this.todoId) { // se todoId è undefined vuol dire che si vuole creare un TODO
      this.retrieveTodo(this.todoId)
    }
    this.getCategories()
  }


  handleTodoCreation() {
    this.todoService.createTodo(this.todo).subscribe(
      response => {
        console.log(response)
        let ps = this.userService.getPersonalCard()
        
        ps.wallet.cfu = ps.wallet.cfu - this.todo.category.cfuPrice
        
        this.userService.updatePersonalCard(ps)
        this.todoService.setTodoCreationResponse(MessageCode.TODO_CREATED)
        this.cleanFields();
      },
      error => {
        console.log(error)
        if(error.error.messageCode === MessageCode.CFU_INSUFFICIENT){
          this.todoService.setTodoCreationResponse(MessageCode.CFU_INSUFFICIENT)
        }
      }
    )
      
  }

  handleTodoUpdate() {
    this.todoService.updateTodo(this.todo).subscribe(
      response => {
        this.router.navigate(['home'])
      },
      error => {
        console.log(error)
      }
    )
  }

  retrieveTodo(todoId) {
    this.todoService.getTodo(todoId).subscribe(
      response => {
        this.todo = response
      },
      error => {
        console.log(error)
      }
    )
  }

  getCategories() {
    this.categoryService.getAllCategories().subscribe(
      response => {
        this.categories = response
      },
      error => {
        console.log(error)
      }

    )
  }
  
  cleanFields(){
    this.todo.title = ""
    this.todo.description = ""
    this.todo.expirationDate = null
    this.todo.category = null
  }

}


export class Todo {

  id: number
  title: string
  description: string
  publishedDate: Date
  expirationDate: Date
  expired: boolean

  user: User
  category: Category
  proposals: Proposal[]

  constructor() { }

}