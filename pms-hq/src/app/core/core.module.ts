import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { StoreModule } from '@ngrx/store'
import { ShareModule } from '../share/share.module'
import { cardsReducer } from '../reducers/cards.reducer'

@NgModule({
  imports: [
    BrowserAnimationsModule,
    // StoreModule.forRoot({
    //   cards: cardsReducer
    // }),
    ShareModule,
  ],
  exports: [
    ShareModule,
  ]
})
export class CoreModule { 
  constructor(@Optional()  @SkipSelf() parentModule: CoreModule) {
    if(parentModule) {
      throw new Error(
        'coreModule is already loaded. Import it in the AppModule only'
      )
    }
  }
 }
