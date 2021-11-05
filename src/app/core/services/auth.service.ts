import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  status$ = new BehaviorSubject<boolean>(false);
  // o----o---o---->

  login(user: string, pass: string) {
    // http...
    this.status$.next(true);
  }


  logout() {
    this.status$.next(false);
  }
}
