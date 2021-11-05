import { Directive, ElementRef, OnDestroy, Renderer2 } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[acIfLogged]'
})
export class IfLoggedDirective implements OnDestroy {
  sub?: Subscription;

  constructor(
    public authService: AuthService,
    private el: ElementRef,
    renderer: Renderer2
  ) {
    this.sub = authService.status$
      .subscribe(status => {
        /*renderer.setStyle(
          this.el.nativeElement,
          'display',
          status ? null : 'none'
        )*/

        if (status) {
          renderer.removeAttribute(this.el.nativeElement, 'hidden')
        } else {
          renderer.setAttribute(
            this.el.nativeElement,
            'hidden',
            'true'
          )

        }
      })
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}
