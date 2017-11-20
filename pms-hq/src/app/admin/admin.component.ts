import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.styl']
})
export class AdminComponent {
  title = 'app';
  isOpened: boolean

  toggleNav(arg: boolean): void {
    this.isOpened = arg
  }
  onNavClose() {
    this.isOpened = false
  }
  
}
