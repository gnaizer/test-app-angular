import { HeaderComponent } from './components/header/header.component';
import { ItemsService } from './../core/services/items.service';
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
  },
  {
    path: 'view/:id',
    loadChildren: './pages/view-product/view-product.module#ViewProductModule',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    AngularMaterialModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ProductsComponent,
    HeaderComponent
  ],
  exports: [
    ProductsComponent
  ]
})
export class ProductsModule { }
