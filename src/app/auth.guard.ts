import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AppService } from './app.service';
// import { map, catchError, delay } from 'rxjs/operators';

// import { AuthService } from '../services';

/**
 * Services - AuthGuard
 *
 * Route guard for authentication
 */
@Injectable()
export class AuthGuard implements CanActivate {

  isAuth = false;

  constructor(
    private router: Router,
    private appService: AppService
    // private authService: AuthService
  ) { }

  /**
   * Determines if user is authenticated or not
   */
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    this.isAuth = this.appService.username === 'admin' && this.appService.password === 'admin';
    if (this.isAuth) {
      // this.router.navigate(['alpha']);
      return of(true);
    } else {
      this.router.navigate(['login']);
      return of(false);
    }
  }
}
