import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: 'div',
  exportAs: 'ngDiv'
})
export class DivDirective {
  @HostBinding('style.border') border = '3px solid black'
  @HostBinding('style.padding') padding = '20px';
  @HostBinding('style.margin') margin = '10px';

}
