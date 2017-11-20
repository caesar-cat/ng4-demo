import { Component, OnInit, Input } from '@angular/core';
import { ITEM } from '../card.model'
import { fadeInAnimation, hoverScaleAnimation } from '../../animation'
@Component({
  selector: 'app-item',
  templateUrl: './card.component.html',
  animations: [hoverScaleAnimation],
  styleUrls: ['./card.component.styl'],
})
export class CardComponent {
  @Input() data: ITEM
  constructor( ) { }

  toggleState() {
    this.data.state = this.data.state === 'active' ? 'inactive' : 'active';
  }
}
