import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ac-card',
  template: `
    <h1>
      sono {{title}}!
    </h1>
  `,
  styles: [
  ]
})
export class CardComponent  {
  @Input() title!: string


}
