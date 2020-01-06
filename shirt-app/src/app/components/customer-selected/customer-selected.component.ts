import { Component, OnInit } from '@angular/core';
import {Customer} from '../../classes/customer';
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

  constructor(private store: Store<{ customers: Customer[] }>) {

    this.store.select<any>('customers').subscribe(state => {
      // console.log(state);
      // this.selected$ = state;
      for (var s of state) {
        if(s.selected == true){
          this.selected$ = s;
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
  }


}
