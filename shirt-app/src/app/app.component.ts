import { Component } from '@angular/core';
import {Observable} from 'rxjs';

import { FormBuilder } from '@angular/forms';


/**
 * import {Component, OnInit} from '@angular/core';
import {Customer} from '../../classes/customer';
import {CustomerRemove} from '../../store/customer/customer.actions';
import {CustomerAdd} from '../../store/customer/customer.actions';
import {CustomerSelect} from '../../store/customer/customer.actions';
import {Observable} from 'rxjs';
import {select, Store, State} from '@ngrx/store';
 */

//state
import {Customer} from './classes/customer';
import {CustomerSelect} from './store/customer/customer.actions';
import {select, Store, State} from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Angular: 8 - State management';
  customers: Observable<Customer[]>;
  selected$: Observable<Customer>;
  

  selectedObj: any;

  constructor(private store: Store<{ customers: Customer[]}>, public fb: FormBuilder) {
    
    this.customers  = store.pipe(select('customers'));
    this.store.select<any>('customers').subscribe(state => {
      // console.log(state);
      // this.selected$ = state;
      for (var s of state) {
        if(s.selected == true){
          // this.selected$ = s;
          this.selectedObj = s.name;
        }
      }
    });

  }
  
  onChangeObj(newSelected) {
    // console.log(newSelected);
    // console.log('customerIndex - select function');
    this.store.dispatch(new CustomerSelect(newSelected));
  }



}
