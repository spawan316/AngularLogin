import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user: firebase.User;
  constructor(
    private service: LoginService
  ) { }

  ngOnInit() {
    this.service.getLoggedInUser()
      .subscribe(user => {
        console.log(user);
        this.user = user;
      });
  }
  public LoginGoogle() {
    console.log('loging...');
    this.service.login();
  }
  Logout() {
    this.service.Logout();
  }

}
