import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RefreshService {

  todoRefresh: boolean = false
  eventRefresh: boolean = false

  todoRefreshMessage: BehaviorSubject<boolean>
  eventRefreshMessage: BehaviorSubject<boolean>

  constructor() {
    this.todoRefreshMessage = new BehaviorSubject(this.todoRefresh)
    this.eventRefreshMessage = new BehaviorSubject(this.eventRefresh)
   }

   refreshTodoBoard(){
    this.todoRefreshMessage.next(true)
   }

   refreshEventBoard(){
    this.eventRefreshMessage.next(true)
   }
}
