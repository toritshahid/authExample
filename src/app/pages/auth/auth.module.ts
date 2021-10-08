import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { HomeComponent } from './home/home.component';
import { NbLayoutModule } from '@nebular/theme';


@NgModule({
  declarations: [
    AuthComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    NbLayoutModule,
  ],
  exports: [
    HomeComponent
  ]
})
export class AuthModule { }
