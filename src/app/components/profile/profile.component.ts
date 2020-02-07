import { Component, OnInit } from '@angular/core';
import { PersonalCard } from 'src/app/models/personal-card/personal-card';
import { UserService } from 'src/app/services/user.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Followers } from 'src/app/models/followers';
import { User } from 'src/app/models/user/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  private personalCard = new PersonalCard()
  private followers: User[]
  private following: User[]
  private showCorrectPanel = 0;


  constructor(private userService: UserService,
    private _sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.userService.getMyPersonalCard().subscribe(
      result => {
        this.personalCard = result;
      }
    )
    this.userService.getUserFollowers(sessionStorage.getItem("username")).subscribe(
      result => {

      }
    )

    this.userService.getUserFollowers(sessionStorage.getItem("username")).subscribe(
      result => {

        this.followers = result;
      }
    )
    this.userService.getUserFollowing(sessionStorage.getItem("username")).subscribe(
      result => {

        this.following = result;
      },
      error => {

      }
    )
  }


}
