import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { SigninComponent } from './components/signin.component';
import { LostpassComponent } from './components/lostpass.component';
import { RegistrationComponent } from './components/registration.component';
import { RouterModule } from '@angular/router';
import { CardComponent } from '../../shared/components/card.component';
import { SharedModule } from '../../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    LoginComponent,
    SigninComponent,
    LostpassComponent,
    RegistrationComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: LoginComponent }
    ])
  ]
})
export class LoginModule { }
