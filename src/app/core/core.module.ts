import { NgModule } from '@angular/core';
import { NavbarComponent } from './components/navbar.component';
import { ThemeToolbarComponent } from './components/theme-toolbar.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavbarComponent,
    ThemeToolbarComponent,
  ],
  imports: [
    FormsModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
  ]
})
export class CoreModule { }
