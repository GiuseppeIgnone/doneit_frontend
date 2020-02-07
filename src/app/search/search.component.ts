import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  myControl = new FormControl();
  options: string[]
  searchString = '';

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  search() {
    if (this.searchString.length > 2) {
      //chiamata al server con i nomi
      this.userService.getUsernameStartedWithString(this.searchString).subscribe(
        result => {
          this.options = result
        },
        error => {

        }
      )
    }
    else {
      this.options = []
    }
  }

  reset() {
    if (this.searchString.length < 3) {
      this.options = []
    }
  }

  confirmSearch(option) {
    console.log(option)
    this.router.navigateByUrl('/show-profile/' + option);
  }


}
