import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AuthService } from './service/auth.service';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AbsComponent } from './abs/abs.component';
import { AuthGuard } from './service/AuthGuard';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, SignupComponent, SigninComponent, AbsComponent],
  bootstrap:    [ AppComponent ],
  providers: [AuthService, AuthGuard]
})
export class AppModule { }
