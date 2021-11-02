import { Component } from '@angular/core';

@Component({
  selector: 'ac-root',
  template: `
   
    <ac-navbar></ac-navbar>
    
    <router-outlet></router-outlet>
    
  `,
  styles: []
})
export class AppComponent {
}
