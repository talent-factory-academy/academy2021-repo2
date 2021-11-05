import { NgModule } from '@angular/core';
import { NavbarComponent } from './components/navbar.component';
import { ThemeToolbarComponent } from './components/theme-toolbar.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    NavbarComponent,
    ThemeToolbarComponent,
  ],
  imports: [
    FormsModule,
    RouterModule,
    SharedModule,
    CommonModule
  ],
  exports: [
    NavbarComponent,
  ]
})
export class CoreModule { }
