import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guard';

const routes: Routes = [
  { path: 'products', loadChildren: './products/products.module#ProductsModule', canActivate: [AuthGuard]},
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  { path: '**', redirectTo: '/login' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
