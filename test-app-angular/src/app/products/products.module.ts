import { AngularMaterialModule } from './../core/modules/angular-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
      path: '',
      component: ProductsComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    AngularMaterialModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ProductsComponent
  ],
  exports: [
    ProductsComponent
  ]
})
export class ProductsModule { }
