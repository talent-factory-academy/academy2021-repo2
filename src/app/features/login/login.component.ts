import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ac-login',
  template: `
   
    <div [ngClass]="{}"></div>
    <ac-card></ac-card>
    <ac-signin></ac-signin>
    <ac-registration></ac-registration>
    <ac-lostpass></ac-lostpass>
  `,
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
