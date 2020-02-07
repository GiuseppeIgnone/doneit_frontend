import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user/user.model';
import { MessageCode } from '../models/response-message/message-code';
import { ResponseMessage } from '../models/response-message/response-message';
import { API_URL } from '../constants/constant';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient: HttpClient) { }


  executeUserRegistration(user: User) {
    return this.httpClient.post<ResponseMessage>(`${API_URL}/register-user`, user);
  }

  completeUserRegister(personalCard) {
    return this.httpClient.post<ResponseMessage>(`${API_URL}/complete-register`, personalCard);
  }

}
