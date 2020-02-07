import { Component, OnInit, Input } from '@angular/core';
import { User } from '../models/user/user.model';
import { UserService } from '../services/user.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-list-item-user',
  templateUrl: './list-item-user.component.html',
  styleUrls: ['./list-item-user.component.css']
})
export class ListItemUserComponent implements OnInit {

  @Input() user: User
  private imagePath: string


  constructor(private userService: UserService) {

  }

  ngOnInit() {
    this.userService.getUserProfileImage(this.user.username).subscribe(
      result => {
        this.imagePath = result
      }
    )
  }

}
