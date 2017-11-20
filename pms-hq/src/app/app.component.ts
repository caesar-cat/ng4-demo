import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppService } from './app.service'
import { Router, NavigationStart } from '@angular/router'
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit {
  title = 'app';
  isOpened: boolean
  constructor(private appService: AppService, private router: Router) {}
  ngOnInit() {
    this.appService.getEnvOption()
    this.router.events.subscribe(event => {
      if(event instanceof NavigationStart) {
        
      }
    })
  }

  toggleNav(arg: boolean): void {
    this.isOpened = arg
  }
  onNavClose() {
    this.isOpened = false
  }
}
