import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user/user.model';
import { RegisterService } from 'src/app/services/register.service';
import { Router } from '@angular/router';
import { LoginAuthenticationService } from 'src/app/services/login-authentication.service';
import { ResponseMessage } from 'src/app/models/response-message/response-message';
import { MessageCode } from 'src/app/models/response-message/message-code';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = new User('', '')
  confirmPassword = ''
  responseMessage: ResponseMessage
  messageCode: number
  errorRegister = ''

  constructor(private loginAuth: LoginAuthenticationService, private registerService: RegisterService, private router: Router) { }

  ngOnInit() {
    if (this.loginAuth.isUserLoggedIn()) {
      this.router.navigate(['home']);
    }
  }

  handleRegister() {
    if (this.errorRegister != '') {
      this.errorRegister = '';
    }
    if (this.validate()) {
      this.registerService.executeUserRegistration(this.user).subscribe(
        data => {
          this.handleResponse(data)
        },
        error => {
          this.responseMessage = error.error;
          console.log(this.responseMessage)
          this.errorRegister = this.responseMessage.message;
        }
      )
    }
    else {

    }

  }

  handleResponse(data) {
    this.responseMessage = data;
    this.messageCode = this.responseMessage.messageCode;
    switch (this.messageCode) {
      case MessageCode.SUCCESSFUL_REGISTER:
        this.clear()
        break
    }
  }

  validate() {
    if (this.messageCode === MessageCode.SUCCESSFUL_REGISTER) {
      this.messageCode = 0
    }
    return this.validateField(this.user.getName(), "Nome non valido", /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g)
      && this.validateField(this.user.getSurname(), "Cognome non valido", /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g)
      && this.validateField(this.user.getUsername(), "Username non valido", /^[a-z0-9_-]{3,}$/igm)
      && this.validateField(this.user.getEmail(), "Email non valida", /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
      && this.validateField(this.user.getPassword(), "Password non valida", /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/g)
      && this.arePasswordsMatching()
  }


  validateField(field, message, regex) {

    if (!(field.match(regex))) {
      this.errorRegister += message + "<br>"
      return false;
    }
    return true;
  }

  arePasswordsMatching() {
    if (!(this.user.getPassword() === this.confirmPassword)) {
      console.log(this.user.getPassword());
      console.log(this.confirmPassword)
      this.errorRegister += "Le password non corrispondono" + "<br>"
      return false
    }
    return true
  }

  clear() {
    this.user = new User("", "")
    this.confirmPassword = ""
  }

}
