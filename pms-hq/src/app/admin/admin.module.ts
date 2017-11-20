import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../share/share.module'
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { CardComponent } from './home_page/card/card.component';
import { FooterComponent } from './layout/footer/footer.component'
import { HeaderComponent } from './layout/header/header.component'
import { SlidenavComponent } from './layout/slidenav/slidenav.component'
import { CardsComponent } from './home_page/card_list/cards.component'
import { LoadingComponent } from '../component/loading/loading.component'
import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { NoopInterceptor } from '../interceptor'
import { childPanelComponent } from './home_page/card/chilld-panel.component'
@NgModule({
  imports: [
    ShareModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent, 
    CardComponent, 
    CardsComponent, 
    HeaderComponent, 
    FooterComponent, 
    SlidenavComponent, 
    LoadingComponent,
    childPanelComponent
  ],
  providers: [{ 
    provide: HTTP_INTERCEPTORS,
    useClass: NoopInterceptor,
    multi: true }]
})
export class AdminModule { }
