import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterService } from 'src/app/services/register.service';
import { LoginAuthenticationService } from 'src/app/services/login-authentication.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private user = new User('', '')

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getMyPersonalCard().subscribe()
  }

  isRegisterCompleted() {
    return sessionStorage.getItem("firstLogin")
  }

}
