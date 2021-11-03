import { Component, Input, EventEmitter, Output, Optional } from '@angular/core';
import { AccordionComponent } from './accordion.component';

@Component({
  selector: 'ac-accordion-group',
  template: `
    <div>
      <div *ngIf="accordion.multiple">ICONA</div>
      <div class="title" (click)="toggle.emit()">{{title}}</div>
      <div class="body" *ngIf="opened">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [`
    .title {
      background-color: #222;
      color: white;
      padding: 10px;
      border-bottom: 1px solid white;
    }
    .body {
      border: 1px solid #222;
      padding: 20px;
    }
  `]
})
export class AccordionGroupComponent  {
  @Input() title!: string;
  @Input() opened = false;
  @Output() toggle = new EventEmitter();

  constructor(@Optional() public accordion: AccordionComponent) {
    if(!accordion) {
      throw new Error('Group must have a Accordion parent')
    }
  }

  ngAfterViewInit() {

    console.log('here', this.accordion)
  }
}
