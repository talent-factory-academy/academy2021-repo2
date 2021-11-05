import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

export const routes = [
  { path: 'login', loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule) },
  { path: 'contacts', loadChildren: () => import('./features/contacts/contacts.module').then(m => m.ContactsModule) },
  { path: 'catalog', loadChildren: () => import('./features/catalog/catalog.module').then(m => m.CatalogModule) },
  { path: 'directives-demo', loadChildren: () => import('./features/directives-demo/directives-demo.module').then(m => m.DirectivesDemoModule) },
  { path: '', redirectTo: 'directives-demo', pathMatch: 'full'},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
