import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  username: string;

  password: string;

  constructor() { }

  public isLoggedIn(): boolean{
    return this.password === 'admin' && this.username === 'admin';
  }
}
