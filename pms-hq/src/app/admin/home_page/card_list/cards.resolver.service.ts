import 'rxjs/add/operator/map'
import 'rxjs/add/operator/take'
import { HttpClient } from '@angular/common/http';
import { Injectable }             from '@angular/core';
import { Observable }             from 'rxjs/Observable';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';
import { ITEM } from '../card.model'

@Injectable()
export class CardListResolver implements Resolve<ITEM[]> {
    constructor(private router: Router, private http: HttpClient) {}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ITEM[]> {
        return this.http.get('http://localhost:3000/cards/list').take(1).map(data => {
            if(data['list']) {
                return data['list']
            }
        })
    }
}
 