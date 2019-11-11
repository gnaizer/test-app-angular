import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'products', loadChildren: './products/products.module#ProductsModule'},
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  { path: '**', redirectTo: '/products' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
