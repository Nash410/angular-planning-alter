import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AuthService } from './service/auth.service';
import { AuthGuard } from './service/auth.guard';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AbsComponent } from './abs/abs.component';
import { SingleAbsComponent } from './abs/single-abs/single-abs.component';
import { FormAbsComponent } from './abs/form-abs/form-abs.component';
import { AlterComponent } from './alter/alter.component';
import { FormAlterComponent } from './alter/form-alter/form-alter.component';
import { SingleAlterComponent } from './alter/single-alter/single-alter.component';
import { AbsService } from './service/abs.service';
import { AlterService } from './service/alter.service';
import { RouterModule, Routes } from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
 import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { WelcomeComponent } from './welcome/welcome.component';


const appRoutes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/signin', component: SigninComponent },
  { path: 'abs', canActivate: [AuthGuard], component: AbsComponent },
  { path: 'abs/new', canActivate: [AuthGuard], component: FormAbsComponent },
  { path: 'abs/view/:id', canActivate: [AuthGuard], component: SingleAbsComponent },
  { path: 'alter', canActivate: [AuthGuard], component: AlterComponent },
  { path: 'alter/new', canActivate: [AuthGuard], component: FormAlterComponent },
  { path: 'alter/view/:id', canActivate: [AuthGuard], component: SingleAlterComponent }, 
  { path: '', redirectTo: 'WelcomeComponent', pathMatch: 'full' },
  { path: '**', redirectTo: 'WelcomeComponent' }
];


@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, SignupComponent, SigninComponent, AbsComponent, SingleAbsComponent, FormAbsComponent, AlterComponent, FormAlterComponent, SingleAlterComponent, HeaderComponent, WelcomeComponent],
  bootstrap:    [ AppComponent ],
  providers: [AuthService, AuthGuard, AbsService, AlterService]
})
export class AppModule { }


