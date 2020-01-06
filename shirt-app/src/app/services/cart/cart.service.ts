import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Shirt } from '../../classes/shirt';
import { MessageService } from '../message/message.service';

import {Store} from '@ngrx/store';
import {Customer} from '../../classes/customer';
import {CustomerAddCart} from '../../store/customer/customer.actions';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  sum = 0;
  cartItems: object[] = [];
  hasCartRefreshed: boolean = false;
  
  customers: Observable<Customer[]>;
  selected$: Observable<Customer>;

  constructor(private messageService: MessageService, private store: Store<{ customers: Customer[] }>) {}


  /**
   * Add shirt to the cart array of items
   * @param shirt object
   */
  AddItemCart(shirt: Shirt) {
    console.log('add shirt item!!');
    this.store.select<any>('customers').subscribe(state => {
      for (var s of state) {
        if(s.selected == true){
          this.selected$ = s;
        }
      }
    });

    if(!this.selected$){
      alert('Please select customer');
    }else{
      // this.store.dispatch(new CustomerAddCart(this.selected$));
      this.store.dispatch(new CustomerAddCart(shirt));
      this.cartItems.push(shirt);
    }

  }

  
  /**
   * Remove shirt from the cart array
   * @param shirt 
   */
  RemoveItemCart(shirt: Shirt) {
    this.cartItems.forEach((element, index, array) => {
      if(element['id'] == shirt.id){
        this.cartItems.splice(index, 1);
      }
    });
  }


  /**
  * Current price of the cart
  */
  CurrentPrice() {
    this.sum = 0;
    this.cartItems.forEach((element, index, array) => {
      this.sum += element['price'];
    });
  }


  /**
   * Empty the basket
   */
  clear() {
    this.sum = 0;
    this.cartItems = [];
    this.hasCartRefreshed = true;
  }

  /**
   * Must have an asynchronous signature of some kind, an Observable because it will eventually use the Angular HttpClient.get method to fetch.
   * Observable is one of the key classes in the RxJS library.
   */
  // AddItemCart(id: number): Observable<Shirt> {
  //   // TODO: send the message _after_ fetching the hero
  //   this.messageService.add(`ShirtService: fetched shirt id=${id}`);
  //   //return of(SHIRTS.find(shirt => shirt.id === id));
  // }


}
