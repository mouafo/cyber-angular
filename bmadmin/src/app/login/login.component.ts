import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  protected login:string;
  protected pwd:string;

  constructor(){
    this.login = "";
    this.pwd = "";
  }

  authenticate(){

  }
}
