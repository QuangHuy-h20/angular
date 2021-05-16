import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  declarations: [LoginComponent, SignUpComponent],
  imports: [MaterialModule, FormsModule, BrowserModule, ReactiveFormsModule],
})
export class ProviderModule { }
