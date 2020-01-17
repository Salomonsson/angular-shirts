import { Component, OnInit } from '@angular/core';
import {Customer} from '../../classes/customer';
import {Shirt} from '../../classes/shirt';
import {Observable} from 'rxjs';
import {select, Store, State} from '@ngrx/store';
import {CustomerRemoveCart} from '../../store/customer/customer.actions';

@Component({
  selector: 'app-customer-selected',
  templateUrl: './customer-selected.component.html',
  styleUrls: ['./customer-selected.component.css']
})


export class CustomerSelectedComponent implements OnInit {

  selected$: Observable<Customer>;
  cart$: Observable<Shirt>;
  total: number = 0;

  constructor(private store: Store<{ customers: Customer[] }>) {

    this.store.select<any>('customers').subscribe(state => {
      // console.log(state);
      // this.selected$ = state;
      this.total = 0;
      for (var s of state) {
        if(s.selected == true){
          this.selected$ = s;
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

  removeCartObject(shirt){
    this.store.dispatch(new CustomerRemoveCart(shirt));
    this.countSum();
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

}
