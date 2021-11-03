import {
  AfterContentInit,
  AfterViewInit, ChangeDetectorRef,
  Component,
  ContentChildren, Input,
  OnInit,
  QueryList,
  ViewChildren
} from '@angular/core';
import { CardComponent } from './card.component';
import { AccordionGroupComponent } from './accordion-group.component';
import { group } from '@angular/animations';

@Component({
  selector: 'ac-accordion',
  template: `
    <div class="accordion">
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    .accordion {
      border: 1px dashed blue;
      padding: 10px;
    }
  `]
})
export class AccordionComponent implements AfterContentInit {
  @ContentChildren(AccordionGroupComponent) groups!: QueryList<AccordionGroupComponent>
  @Input() multiple = false;

  ngAfterContentInit(): void {
      const groups = this.groups.toArray();

      console.log(groups)
      setTimeout(() => {
        if(groups.length) {
          // open first child
          groups[0].opened = true;
        } else {
          throw new Error('ehi! un accordion non puo\' non avere figli')
        }

        if (this.multiple) {
          groups.forEach(g => {
            g.toggle.subscribe(() => g.opened = !g.opened)
          })
        } else {
          groups.forEach(g => {
            g.toggle.subscribe(() => this.openPanel(g))
          })
        }

      }, 0)
  }

  private openPanel(groupToOpen: AccordionGroupComponent) {
    this.groups.toArray().forEach(g => {
      g.opened = false;
    })
    groupToOpen.opened = true;
  }
}
