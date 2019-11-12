import { AngularMaterialModule } from './../../../core/modules/angular-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewProductComponent } from './view-product.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ViewProductComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ViewProductComponent]
})
export class ViewProductModule { }
