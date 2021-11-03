import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ac-catalog',
  template: `

    <pre>Meteo Component</pre>
    <ac-weather [city]="city"></ac-weather>
  
    <hr>
    <pre>Hello Component</pre>
    <h1>{{value }}</h1>
    <ac-hello [(name)]="value" [counter]="count" >
      ....
    </ac-hello>
    <button (click)="count = count + 1">+</button>
    <button (click)="count = count - 1">-</button>
    <button (click)="value = 'Pippo'">Pippo</button>
    <button (click)="value = 'Pluto'">Pluto</button>
    
  `,
})
export class CatalogComponent {
  value = 'Mario';
  count = 0;
  city: string | null = null;

  constructor() {
    setTimeout(() => {
      this.city = 'Palermo'
    }, 2000)
  }
}
