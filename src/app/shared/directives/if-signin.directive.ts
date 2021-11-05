import { Directive, ElementRef, Input, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../core/services/auth.service';

@Directive({
  selector: '[acIfSignin]'
})
export class IfSigninDirective {
  sub?: Subscription;

  constructor(
    public authService: AuthService,
    private el: ElementRef,
    renderer: Renderer2,
    template: TemplateRef<any>,
    view: ViewContainerRef
  ) {
    this.sub = authService.status$
      .subscribe(status => {
        if (status) {
          view.createEmbeddedView(template)
        } else {
          view.clear()
        }
      })
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }

}
