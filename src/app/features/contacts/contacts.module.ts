import { NgModule } from '@angular/core';
import { ContactsComponent } from './contacts.component';
import { ContactsRoutingModule } from './contacts-routing.module';

@NgModule({
  declarations: [
    ContactsComponent,
  ],
  imports: [
    ContactsRoutingModule
  ]
})
export class ContactsModule { }
