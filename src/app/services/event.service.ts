import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../constants/constant';
import { BehaviorSubject } from 'rxjs';
import { Event } from '../components/event/event.component';
import { ResponseMessage } from '../models/response-message/response-message';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  eventCreationResponse = -1;
  eventResponseMessage: BehaviorSubject<number>;

  constructor(private httpCLient: HttpClient) {
    this.eventResponseMessage = new BehaviorSubject(this.eventCreationResponse)
  }

  setEventCreationResponse(messageCode) {
    this.eventResponseMessage.next(messageCode)
  }

  createEvent(event) {
    return this.httpCLient.post<any>(`${API_URL}/create-event`, event)
  }

  getActiveEvents() {
    return this.httpCLient.get<Event[]>(`${API_URL}/active-event-list`)
  }

  joinEvent(event) {
    return this.httpCLient.post<ResponseMessage>(`${API_URL}/event/join-event`, event)
  }

  getMyEventList() {
    return this.httpCLient.get<Event[]>(`${API_URL}/event/my-events`)
  }

  getEventListByUsername(username) {
    return this.httpCLient.get<Event[]>(`${API_URL}/event-list/users/` + username)
  }

  handleAddressChange($event) {
    console.log($event)
  }

  getEvent(id) {
    return this.httpCLient.get<Event>(`${API_URL}/event/get-event/${id}`)
  }

  getMyJoinedEvents() {
    return this.httpCLient.get<Event[]>(`${API_URL}/event/get-my-joined-events`)
  }

}
