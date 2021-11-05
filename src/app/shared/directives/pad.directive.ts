import { Directive, EventEmitter, HostBinding, Input, Output } from '@angular/core';

@Directive({
  selector: '[acPad]',
})
export class PadDirective {
  @Input() acPad?: 0 | 1 | 2 | 3 | 4 | 5;
  @Input() margin?: 0 | 1 | 2 | 3 | 4 | 5;
  @Input() theme?: 'danger' | 'success' | null = null;
  @Output() success = new EventEmitter()

  @HostBinding('style.border') b = '1px dashed blue'

  @HostBinding('style.padding') get p() {
    if (typeof this.acPad === 'number') {
      return `${10 * (this.acPad || 0)}px`
    }
    return 0;
  }

  @HostBinding('style.margin') get m() {
    return `${10 * (this.margin || 0)}px`
  }


  @HostBinding() get class() {
    return `alert-${this.theme}`
  }

}
