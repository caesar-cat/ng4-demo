import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { fadeInAnimation, bounceInUpAnimation } from '../../animation'
import { childPanelComponent } from '../card/chilld-panel.component'
import { ITEM } from '../card.model'
import { CardsService } from './cards.component.service'
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/startWith'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-main-cards',
  templateUrl: './cards.component.html',
  animations: [fadeInAnimation, bounceInUpAnimation],
  styleUrls: ['./cards.component.styl'],
  providers: [CardsService]
})
export class CardsComponent implements OnInit {
  queryData: any = {};
  loading: boolean = true;
  list: ITEM[]
  constructor( 
    private store$: Store<ITEM[]>,
    private http: HttpClient, 
    private route: ActivatedRoute,
    private cardService: CardsService,
    private router: Router) {
      this.store$.select<ITEM[]>('cards').subscribe(data =>{this.list = data})
    }

  ngOnInit() {
    this.route.data.mergeMap((data: {cards:ITEM[]}) => {
      this.store$.dispatch({ type: 'FETCH_CARDS', payload:data.cards });
      return this.cardService.getQueryData()
    })
    .subscribe(data => {
      this.queryData = data
      this.loading = false
    })
  } 
}
