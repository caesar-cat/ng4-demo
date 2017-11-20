import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router'
import { LoginService } from '../../../login/login.service'
@Component({
  selector: 'app-slidenav',
  templateUrl: './slidenav.component.html',
  styleUrls: ['./slidenav.component.styl']
})
export class SlidenavComponent implements OnInit {
  @Output() closeNav = new EventEmitter<boolean>()
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  logout(): void{
    this.loginService.logout()
    this.closeNav.emit(false)
    this.router.navigate(['/login'])
  }
}
