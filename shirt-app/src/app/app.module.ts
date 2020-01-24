import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule} from '@angular/forms'; // <-- NgModel lives here
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
//Effects
import { EffectsModule } from '@ngrx/effects';
import { BasketEffects } from './store/customer/effects/basket.effects';
// import { ToDoEffects } from './ToDo/todo.effects';

import { CustomersViewComponent } from './components/customers-view/customers-view.component';
import { CustomerAddComponent } from './components/customer-add/customer-add.component';
import { CustomerSelectedComponent } from './components/customer-selected/customer-selected.component';

//toast
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';//for the toast
import { ToastrModule } from 'ngx-toastr';

/* Angular material */
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ModalCreateCustomerComponent } from './components/modal-create-customer/modal-create-customer.component';


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
    CustomerSelectedComponent,
    ModalCreateCustomerComponent,
  ],
  // @NgModule metadata's imports array, which contains a list of external modules that the app needs.
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ //state management
      customers: CustomerReducer
     }),
     EffectsModule.forRoot([BasketEffects]), //effect of store
     BrowserAnimationsModule, // required animations module //Also required in the material import
     ToastrModule.forRoot(), // ToastrModule added
     AngularMaterialModule, //Angular Material import
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [ModalCreateCustomerComponent]
})
export class AppModule { }
