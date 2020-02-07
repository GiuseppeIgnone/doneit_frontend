import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { PersonalCard } from 'src/app/models/personal-card/personal-card';
import { ActivatedRoute } from '@angular/router';
import { Followers } from 'src/app/models/followers';
import { User } from 'src/app/models/user/user.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  private personalCard = new PersonalCard()
  private username: string
  private show = false
  private followers: User[]
  private following: User[]
  private showCorrectPanel = 0;
  private alreadyFollow: boolean

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscribeRouter()
    this.username = this.route.snapshot.params['username']
    this.getPersonalCard()
    this.getUserFollowers()
    this.getUserFollowing()
  }

  followUser(username) {
    this.userService.followUser(username).subscribe(
      result => {
        this.userService.getUserFollowers(this.username).subscribe(
          result => {
            this.followers = result
            this.checkIfAlreadyFollow(result)
          }
        )
      },
      error => {

      }
    )
  }

  private changePanel(number) {
    this.showCorrectPanel = number;
  }

  private getPersonalCard() {
    this.userService.getUserPersonalCard(this.username).subscribe(
      result => {
        if (result) {
          this.show = true
          this.personalCard = result;
        }
        else {

        }
      },
      error => {
      }
    )
  }

  private getUserFollowers() {
    this.userService.getUserFollowers(this.username).subscribe(
      result => {
        this.followers = result;
        if (this.followers.length) {
          this.checkIfAlreadyFollow(this.followers)
        }
      }
    )
  }

  private getUserFollowing() {
    this.userService.getUserFollowing(this.username).subscribe(
      result => {

        this.following = result;
      },
      error => {

      }
    )
  }

  private subscribeRouter() {
    this.route.params.subscribe(params => {
      this.username = params['username']
      this.alreadyFollow = false
      this.getPersonalCard()
      this.getUserFollowers()
      this.getUserFollowing()

    });
  }

  checkIfAlreadyFollow(followers) {
    let i = 0
    console.log("chiamata")
    while (i < followers.length) {
      if (followers[i].username === sessionStorage.getItem('username')) {
        this.alreadyFollow = true
      }
      i++;
    }
  }


  isMyProfile(){
    return this.username === sessionStorage.getItem("username")
  }
  


}
