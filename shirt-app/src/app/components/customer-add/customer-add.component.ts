import { Component, OnInit } from '@angular/core';

import {select, Store} from '@ngrx/store'; 
//import {Customer} from '../../classes/customer'; 
import {Customer} from './../../models/customer'; 
import {Observable} from 'rxjs'; 
import {CustomerAdd} from '../../store/customer/customer.actions';


@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {


  customers: Observable<Customer[]>; 
  constructor(private store: Store<{ customers: Customer[] }>) { 
    this.customers = store.pipe(select('customers')); 
  } 
  AddCustomer(customerName: string) { 
    const customer = new Customer(); 
    customer.name = customerName; 
    this.store.dispatch(new CustomerAdd(customer)); 
  } 

  ngOnInit() {
  }

}
