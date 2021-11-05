import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'ac-signin',
  template: `
    
    <input type="text">
    <input type="text">
    <button (click)="authService.login('a', 'b')">submit</button>
  `,
  styles: [
  ]
})
export class SigninComponent implements OnInit {

  constructor(public authService: AuthService) {

  }

  ngOnInit(): void {
  }

}
