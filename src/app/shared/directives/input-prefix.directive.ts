import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[acInputPrefix]'
})
export class InputPrefixDirective {
  @HostListener('input', ['$event'])
  clickMe(event: InputEvent) {
    const target =  event.target as HTMLInputElement;
    target.value = target.value + '...'
    // target.value = eval(target.value)
    // target.style.color = 'red'
  }
}
