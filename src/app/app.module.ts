import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { HttpClientModule } from '@angular/common/http';
import { NbPasswordAuthStrategy, NbAuthModule, NbAuthJWTToken } from "@nebular/auth";
import { AuthModule } from './pages/auth/auth.module';
import { AuthGuard } from "./_auth/auth.guard";
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';
import { IndexpageComponent } from './indexpage/indexpage.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbLayoutModule,
    HttpClientModule,
    AuthModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    NbAuthModule.forRoot({
      strategies:[
        NbPasswordAuthStrategy.setup({
          name: 'email',
          token:{
            class: NbAuthJWTToken,
            key: 'token'
          },
          baseEndpoint: 'http://localhost:4000',
          login: {
            endpoint: '/users/authenticate',
          }
        })
      ],
      forms: {},
    })
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
