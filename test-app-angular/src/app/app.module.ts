import { ConfirmModalModule } from './core/components/confirm-modal/confirm-modal.module';
import { ModalComponent } from './products/components/modal/modal.component';
import { ModalModule } from './products/components/modal/modal.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularMaterialModule } from './core/modules/angular-material.module';
import { ConfirmModalComponent } from './core/components/confirm-modal/confirm-modal.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularMaterialModule,
    ModalModule,
    ConfirmModalModule
  ],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [
    ModalComponent,
    ConfirmModalComponent
  ]
})
export class AppModule { }
