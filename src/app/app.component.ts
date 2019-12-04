import { Component } from '@angular/core';
import { AppService } from './app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'login-example';

  constructor(private router: Router, private appService: AppService) {

  }

  getIsLoggedIn() {
    return this.appService.isLoggedIn();
  }

  logout() {
    this.appService.username = '';
    this.router.navigate(['alpha']);
  }
}
