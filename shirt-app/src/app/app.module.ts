import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { ShirtsComponent } from './components/shirts/shirts.component';
import { ShirtDetailComponent } from './components/shirt-detail/shirt-detail.component';
import { MessagesComponent } from './components/messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { CartComponent } from './components/cart/cart.component';
import { CartBasketComponent } from './components/cart-basket/cart-basket.component';


@NgModule({
  declarations: [
    AppComponent,
    ShirtsComponent,
    ShirtDetailComponent,
    MessagesComponent,
    CartComponent,
    CartBasketComponent
  ],
  // @NgModule metadata's imports array, which contains a list of external modules that the app needs.
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
