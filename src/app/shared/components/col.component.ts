import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { RowComponent } from './row.component';

@Component({
  selector: 'ac-col',
  template: `
    <ng-content></ng-content>
  `,
})
export class ColComponent {
  @HostBinding() get class() {
    return 'col-' + this.row.mq + '-' + this.value
  }
  @Input() value: number = 12;

  constructor(public row: RowComponent) { }
}
