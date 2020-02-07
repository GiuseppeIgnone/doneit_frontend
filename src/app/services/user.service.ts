import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../constants/constant';
import { PersonalCard } from '../models/personal-card/personal-card';
import { BehaviorSubject } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { map } from 'rxjs/operators';
import { Followers } from '../models/followers';
import { User } from '../models/user/user.model';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  personalCard = new PersonalCard()
  personalCardSubject: BehaviorSubject<PersonalCard>

  constructor(private httpClient: HttpClient, private _sanitizer: DomSanitizer) {
    this.personalCardSubject = new BehaviorSubject(this.personalCard)

  }

  getMyPersonalCard() {
    return this.httpClient.get<PersonalCard>(`${API_URL}/my-personal-card`).pipe(
      map(
        data => {
          data.imageUrl = this._sanitizer.bypassSecurityTrustResourceUrl(data.base64StringImage);
          this.updatePersonalCard(data)
          return data;
        }
      )
    )
  }

  updatePersonalCard(result: PersonalCard) {
    this.personalCardSubject.next(result)
  }

  getPersonalCard(){
    return this.personalCardSubject.getValue()
  }

  getUserPersonalCard(username) {
    return this.httpClient.get<PersonalCard>(`${API_URL}/user-personal-card/${username}`).pipe(
      map(
        data => {
          data.imageUrl = this._sanitizer.bypassSecurityTrustResourceUrl(data.base64StringImage);
          return data;
        }
      )
    );
  }

  followUser(username) {
    return this.httpClient.post<any>(`${API_URL}/user/follow-user`, username);
  }

  getUserFollowers(username) {
    return this.httpClient.get<User[]>(`${API_URL}/user/${username}/get-followers`);
  }

  getUserFollowing(username) {
    return this.httpClient.get<User[]>(`${API_URL}/user/${username}/get-following`);
  }

  getUserProfileImage(username) {
    return this.httpClient.get(`${API_URL}/user/${username}/get-image-profile`, { responseType: 'text' });

  }

  getUsernameStartedWithString(partialUsername) {
    return this.httpClient.get<string[]>(`${API_URL}/user/get-user-started-with/${partialUsername}`);

  }

  getAllUsers(){
    return this.httpClient.get<PersonalCard[]>(`${API_URL}/user/get-all-users`);
  }

  getUsersImages(users){
    return this.httpClient.post<string[]>(`${API_URL}/user/get-users-images`, users);
  }
}
