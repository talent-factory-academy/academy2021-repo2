import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'ac-navbar',
  template: `
    <ng-template #errorTpl>
      non ci sono i dati
    </ng-template>
    
    <button [routerLink]="'login'">login</button>
    
    <button routerLink="contacts" *acIfSignin>contacts</button>
    
    <button routerLink="catalog" acIfLogged>catalog</button>
    <button routerLink="directives-demo">directive</button>
    <button (click)="authService.logout()">Logout</button>
    <ac-theme-toolbar></ac-theme-toolbar>
    <hr>
  `,
})
export class NavbarComponent  {
  @ViewChild('errorTpl') errorTpl!: TemplateRef<any>;

  constructor(
    public authService: AuthService,
  ) {

  }


}
