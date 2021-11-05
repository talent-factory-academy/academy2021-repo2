import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[acStopPropagation]'
})
export class StopPropagationDirective {
  @HostListener('click', ['$event'])
  clickMe(event: MouseEvent) {
    event.stopPropagation();
  }
}
