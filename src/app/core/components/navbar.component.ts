import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ac-navbar',
  template: `

    <button [routerLink]="'login'">login</button>
    <button routerLink="contacts">contacts</button>
    <button routerLink="catalog">catalog</button>
    <ac-theme-toolbar></ac-theme-toolbar>
    <hr>
  `,
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
