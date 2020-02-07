import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  private iconNumber = -1;
  

  constructor() { }

  ngOnInit() {
  }




  selectActive(number) {
    this.iconNumber = number
  }

  getMyProfileLink(){
    return "/show-profile/" + sessionStorage.getItem("username")
  }

}
