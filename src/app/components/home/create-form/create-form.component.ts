import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})

export class CreateFormComponent implements OnInit {

  private showCorrectForm
  private activatedForm: string = "todo"
  private todoResponseMessage: number
  private eventResponseMessage: number

  constructor(private todoService: TodoService, private eventService: EventService) { }

  ngOnInit() {
    this.todoService.todoResponseMessage.subscribe(m =>{
      this.todoResponseMessage = m
    })

    this.eventService.eventResponseMessage.subscribe(e =>{
      this.eventResponseMessage = e
    })
  }

  selectForm(formNumber){
    this.showCorrectForm = formNumber;
  }

  showForm(form: string){
    this.activatedForm = form
    console.log(form)
  }

}
