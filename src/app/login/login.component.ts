import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;

  password: string;
  constructor(private router: Router, private appService: AppService) { }

  ngOnInit() {
  }

  login() {
    this.appService.password = this.password;
    this.appService.username = this.username;
    this.router.navigate(['']);
  }

}
