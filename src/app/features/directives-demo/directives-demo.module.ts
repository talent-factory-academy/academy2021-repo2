import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivesDemoRoutingModule } from './directives-demo-routing.module';
import { DirectivesDemoComponent } from './directives-demo.component';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DirectivesDemoComponent
  ],
  imports: [
    CommonModule,
    DirectivesDemoRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class DirectivesDemoModule { }
