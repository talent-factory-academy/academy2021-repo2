import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[acUrl]'
})
export class UrlDirective {
  @Input() acUrl: string | null = null;
  @HostBinding('style.cursor') cursor = 'pointer';

  @HostListener('click')
  clickMe() {
    if (this.acUrl) {
      window.open(this.acUrl)
    }
  }

  @HostListener('mouseover')
  mouseOver() {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'red')
  }
  @HostListener('mouseout')
  mouseOut() {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', null)
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }
}


