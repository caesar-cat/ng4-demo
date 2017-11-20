import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../share/share.module'
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import  { LoginService } from './login.service'
@NgModule({
  imports: [
    ShareModule,
    LoginRoutingModule
  ],
  declarations: [
    LoginComponent, 
  ],
  providers: [LoginService]
})
export class LoginModule { }
