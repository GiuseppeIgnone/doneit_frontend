import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Event } from '../components/event/event.component';
import { EventService } from '../services/event.service';
import { User } from '../models/user/user.model';
import { EventPartecipation } from '../models/eventPartecipations';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent implements OnInit {

  @Input() eventPost: Event
  @Input() personal: boolean
  @Output() messageEvent = new EventEmitter<string>()
  @Output() messageEventPartecipant = new EventEmitter<EventPartecipation[]>()
  alreadyPartecipated = false

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.isUserPartecipating()
  }

  joinEvent() {
    this.eventService.joinEvent(this.eventPost).subscribe(
      result => {
        this.eventService.getEvent(this.eventPost.id).subscribe(
          result => {
            this.eventPost = result
            this.isUserPartecipating()
          }
        )
      }
    )
  }



  openMap() {
    this.messageEvent.emit(this.eventPost.placeId)
  }

  isUserPartecipating() {
    if (this.eventPost.eventPartecipations.length) {
      let i = 0;
      while (i < this.eventPost.eventPartecipations.length) {
        if (this.eventPost.eventPartecipations[i].user.username === sessionStorage.getItem('username')) {
          this.alreadyPartecipated = true
        }
        i++
      }
    }
  }

  isCreatedByUser() {
    return this.eventPost.user.username === sessionStorage.getItem("username")
  }

  openPartecipantsModal() {
    if (this.eventPost.eventPartecipations.length > 0)
      this.messageEventPartecipant.emit(this.eventPost.eventPartecipations)
  }

}
