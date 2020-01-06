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

//State management
import { StoreModule } from '@ngrx/store'; 
import { CustomerReducer } from './store/customer/customer.reducer';
import { CustomerCartReducer } from './store/customerCart/customerCart.reducer';
import { SelectedCustomerReducer } from './store/customer/selectedCustomer.reducer';
import { CustomersViewComponent } from './components/customers-view/customers-view.component';
import { CustomerAddComponent } from './components/customer-add/customer-add.component';
import { CustomerSelectedComponent } from './components/customer-selected/customer-selected.component';

@NgModule({
  declarations: [
    AppComponent,
    ShirtsComponent,
    ShirtDetailComponent,
    MessagesComponent,
    CartComponent,
    CartBasketComponent,
    CustomersViewComponent,
    CustomerAddComponent,
    CustomerSelectedComponent
  ],
  // @NgModule metadata's imports array, which contains a list of external modules that the app needs.
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ 
      customers: CustomerReducer, 
      selectedStoreModule: SelectedCustomerReducer,
      customerCart: CustomerCartReducer
     })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
