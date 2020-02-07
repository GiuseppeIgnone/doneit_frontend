import { Component, OnInit, Renderer2 } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { EventService } from 'src/app/services/event.service';
import { MessageCode } from 'src/app/models/response-message/message-code';
import { RefreshService } from 'src/app/services/refresh.service';

@Component({
  selector: 'app-generic-board',
  templateUrl: './generic-board.component.html',
  styleUrls: ['./generic-board.component.css']
})
export class GenericBoardComponent implements OnInit {

  activatedBoard: number = 0
  todoResponseMessage: number
  eventResponseMessage: number
  constructor(private todoService: TodoService, 
    private eventService: EventService,
    private refreshService: RefreshService) { 
   
  }

  ngOnInit() {
    this.todoService.todoResponseMessage.subscribe(m => {
      this.todoResponseMessage = m
      if(m == MessageCode.TODO_CREATED){
        this.showBoard(0)
        this.refreshService.refreshTodoBoard()
      }
    })

    this.eventService.eventResponseMessage.subscribe(m =>{
      this.eventResponseMessage = m
      if(m == MessageCode.EVENT_CREATED){
        this.showBoard(1)
        this.refreshService.refreshEventBoard()
      }
    })
    
  }

  showBoard(board){
    this.activatedBoard = board
  }


  closeModal(){
    this.todoService.setTodoCreationResponse(-1)
    this.eventService.setEventCreationResponse(-1)
  }


}
