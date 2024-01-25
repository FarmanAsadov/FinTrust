import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public ab:boolean = false;
  private _isLoggedIn$ = new BehaviorSubject<boolean>(this.ab);
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  constructor() { }
}
