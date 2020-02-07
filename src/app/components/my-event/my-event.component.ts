import { Component, OnInit, Sanitizer } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { Event } from '../event/event.component';
import { DomSanitizer } from '@angular/platform-browser';
import { EventPartecipation } from 'src/app/models/eventPartecipations';

@Component({
  selector: 'app-my-event',
  templateUrl: './my-event.component.html',
  styleUrls: ['./my-event.component.css']
})
export class MyEventComponent implements OnInit {

  activatedBoard = 'active'
  username = ''

  private myEventsList: Event[]
  private myJoinedEventList: Event[]

  isMapOpen = false
  placeId: string
  isPartecipantsModalOpen = false
  partecipants: EventPartecipation[] = []


  constructor(private eventService: EventService,
    private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.username = sessionStorage.getItem("username")
    this.eventService.getMyEventList().subscribe(
      result => {
        this.myEventsList = result
      },
      error => { }
    )
  }

  getJoinedEvents() {
    this.activatedBoard = 'joined'
    this.eventService.getMyJoinedEvents().subscribe(
      result => {
        this.myJoinedEventList = result;
        console.log(this.myJoinedEventList)
      }
    )
  }

  openMap($event) {
    this.placeId = $event
    this.isMapOpen = true
  }

  closeMap() {
    this.isMapOpen = false
    this.placeId = null
  }

  sanitizeUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.google.com/maps/embed/v1/place?key=AIzaSyB1A4WVaFhrtCkvVdpx_cobXShk_RGtW-8&q=place_id:" + this.placeId)
  }

  getMyEventList(status) {
    this.activatedBoard = status
    this.eventService.getMyEventList()
  }

  openPartecipantModal(event) {
    this.isPartecipantsModalOpen = true
    this.partecipants = event
  }

  closePartecipantsModal() {
    this.isPartecipantsModalOpen = false;
    this.partecipants = []
  }


}
