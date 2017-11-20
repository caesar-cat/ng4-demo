import { Routes, RouterModule, NavigationStart } from '@angular/router';
import { NgModule } from '@angular/core';
import { CardsComponent } from './home_page/card_list/cards.component'
import { AdminComponent } from './admin.component'
import { AuthLogin } from '../auth-login.service'
import { CardListResolver } from './home_page/card_list/cards.resolver.service'
const routes: Routes = [
    { path: '', 
      component: AdminComponent, 
      canActivate: [AuthLogin],
      children: [
        {
            path: '',
            canActivateChild: [AuthLogin],
            children: [
                {
                    path: '',
                    component: CardsComponent,
                    resolve:{
                        cards: CardListResolver
                    }
                }
            ]
        }
      ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [
        CardListResolver
    ]
})
export class AdminRoutingModule {}
