import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.styl']
})
export class HeaderComponent implements OnInit {
  @Output() openNav = new EventEmitter<boolean>()
  constructor() { }

  ngOnInit() {
  }

  openSidebar() {
    this.openNav.emit(true)
  }

}
