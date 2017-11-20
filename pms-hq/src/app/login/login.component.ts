import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router'
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';
import { fadeInAnimation } from '../admin/animation'
import { MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs'
import { LoginService } from './login.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl'],
  animations: [ fadeInAnimation ]
})

export class LoginComponent {
  @HostBinding('@fadeInAnimation') fadeInAnimation = true
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';
  username: string
  password: string
  formOptions: FormGroup
  constructor(
    public loginService: LoginService, 
    private router: Router, 
    private fb: FormBuilder, 
    private snackBar: MatSnackBar
  ) { 
    this.formOptions = fb.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required],
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000
    });
  }

  login() :void {
    if(!this.username || !this.password) return
    if(this.username === 'admin' && this.password === 'admin') {
      this.loginService.login(true)
      this.openSnackBar('登录成功！', '确定')
      let redirect = this.loginService.redirectUrl? this.loginService.redirectUrl: '/admin'
      this.router.navigate([redirect])
    }else{
      this.loginService.login(false)
      this.openSnackBar('账号或密码错误', '取消')
    }
  }

}

