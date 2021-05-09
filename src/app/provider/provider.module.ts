import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [MaterialModule],
})
export class ProviderModule {}
