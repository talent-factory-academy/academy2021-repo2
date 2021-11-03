import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ac-row',
  template: `
    <div class="row">
      <ng-content></ng-content>
    </div>
  `,
  styles: [
  ]
})
export class RowComponent implements OnInit {
  @Input() mq: string = 'xl';

  constructor() { }

  ngOnInit(): void {
  }

}
