import { Component, OnInit, Input } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';
import { Todo } from '../todo/todo.component';
import { TodoService } from 'src/app/services/todo.service';
import { EventService } from 'src/app/services/event.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Event } from '../event/event.component';

@Component({
  selector: 'app-profile-board',
  templateUrl: './profile-board.component.html',
  styleUrls: ['./profile-board.component.css']
})
export class ProfileBoardComponent implements OnInit {

  activatedBoard: number = 0
  todoList: Todo[]
  eventList: Event[]
  @Input() username: string
  currentTodo: Todo

  isMapOpen = false
  placeId: string

  constructor(private todoService: TodoService, private eventService: EventService, private sanitizer: DomSanitizer) { }

  ngOnInit(){
    this.showTodoBoard()
  }

  showTodoBoard(){
    this.activatedBoard = 0
    this.eventList = null
    this.todoService.getProfileTodoList(this.username).subscribe(
      response => {
        console.log(response)
        this.todoList = response
      },
      error => {
        console.log(error)
      }
    )



  }
  

  showEventBoard(){
    this.activatedBoard = 2
    this.todoList = null
    this.eventService.getEventListByUsername(this.username).subscribe(
      response => {
        this.eventList = response
      },
      error => {

      }
    )
   }

   openMap($event){
    this.placeId = $event
    this.isMapOpen = true
  }

  closeMap(){
    this.isMapOpen = false
    this.placeId = null
  }

  sanitizeUrl(){
    return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.google.com/maps/embed/v1/place?key=AIzaSyB1A4WVaFhrtCkvVdpx_cobXShk_RGtW-8&q=place_id:" + this.placeId)
  }

  openModal($event) {
    if ($event) {
      this.currentTodo = $event
    } else {
      this.showTodoBoard()
    }
  }

  closeModal() {
    this.currentTodo = null;
  }
}
