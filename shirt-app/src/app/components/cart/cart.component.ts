import { Component, OnInit } from '@angular/core';
// import { MessageService } from '../../services/message/message.service';
// import { CartService } from '../../services/cart/cart.service';
// import { ShirtService } from '../../services/shirt/shirt.service';


import {Customer} from '../../classes/customer';
import {Shirt} from '../../classes/shirt';
import {Observable} from 'rxjs';
import {select, Store, State} from '@ngrx/store';
import {CustomerRemoveCart} from '../../store/customer/customer.actions';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  selected$: Observable<Customer>;
  cart$: Observable<Shirt>;
  cartLength: number = 0;
  total: number = 0;

  constructor(private store: Store<{ customers: Customer[] }>) {

    this.store.select<any>('customers').subscribe(state => {
      // console.log(state);
      // this.selected$ = state;
      this.total = 0;
      for (var s of state) {
        if(s.selected == true){
          this.selected$ = s;
          this.cartLength = s.Shirts.length;
          //Collect the total price of the current state object
          for (var shirtItem of s.Shirts) {
            this.total += shirtItem.price;
          }
        }
      }
    });

  }


  ngOnInit() {
    // console.log('beteende:  ngOnInit');
    // this.store.select(state => console.log(state.customers));
  }

  countSum(){
    this.store.select<any>('customers').subscribe(state => {
      this.total = 0;
      for (var s of state) {
        if(s.selected == true){
          for (var shirtItem of s.Shirts) {
            //Collect the total price of the current state object
            this.total += shirtItem.price;
          }
        }
      }
    });
  }

  /**
   * Remove item from cart based on the event emitter from child component.
   * @param $event - object
   */
  removeCartObject($event) {
    console.log('remo object from child to parent');
    this.store.dispatch(new CustomerRemoveCart($event));
    this.countSum();
  }


}
