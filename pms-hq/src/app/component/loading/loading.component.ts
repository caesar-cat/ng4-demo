import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  template: `<div class="load-4">
                <div class="ring-1"></div>
            </div>`,
  styleUrls: ['./loading.component.styl']
})
export class LoadingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
