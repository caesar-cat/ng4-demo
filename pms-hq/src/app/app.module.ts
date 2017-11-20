import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module'
import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { NoopInterceptor } from './interceptor'
import { AppService } from './app.service'
import { AuthLogin } from './auth-login.service'
import { LoginService } from './login/login.service'
import { cardsReducer } from './reducers/cards.reducer'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    StoreModule.provideStore({ 
      cards: cardsReducer
    }),
    AppRoutingModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NoopInterceptor,
      multi: true
    },
    AppService, 
    AuthLogin, 
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
