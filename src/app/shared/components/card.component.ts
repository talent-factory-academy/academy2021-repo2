import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ac-card',
  template: `
    <p [ngClass]="{}">
      card works!
    </p>
  `,
  styles: [
  ]
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
