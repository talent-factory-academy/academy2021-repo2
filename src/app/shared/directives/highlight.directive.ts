import { Directive, ElementRef, HostBinding, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[acHighlight]'
})
export class HighlightDirective implements OnChanges {
  /*
  @Input() set acHighlight(val: string | undefined | null) {
    this.el.nativeElement.style.backgroundColor = val;
    this.renderer.setStyle(
        this.el.nativeElement,
        'backgroundColor',
        val
      )
  }
  */
  @Input() acHighlight!: string;

  ngOnChanges(changes: SimpleChanges) {
    if (changes.acHighlight) {
      // this.el.nativeElement.style.backgroundColor = this.acHighlight;
      // this.el.nativeElement.style.backgroundColor = changes.acHighlight.currentValue;
      this.renderer.setStyle(
        this.el.nativeElement,
        'backgroundColor',
        this.acHighlight
      )
    }
  }

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}
}
