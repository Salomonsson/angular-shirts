import { Component, OnInit } from '@angular/core';

import {select, Store} from '@ngrx/store'; 
import {Customer} from '../../classes/customer'; 
// import {Customer} from './../../models/customer'; 
import {Observable} from 'rxjs'; 
import {CustomerAdd} from '../../store/customer/customer.actions';
import { FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})

export class CustomerAddComponent implements OnInit {

  customers: Observable<Customer[]>; 
  data: Observable<Customer[]>;
  checkoutForm;

  constructor(private store: Store<{ customers: Customer[] }>, private formBuilder: FormBuilder) { 
    this.customers = store.pipe(select('customers'));

    this.checkoutForm = this.formBuilder.group({
      name: '',
      gender: ''
    });

  } 

  activateBox(){
    console.log('test');
  }

  ngOnInit() {
  }

  onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);
    const customer = new Customer(); 
    customer.name = customerData.name; 
    customer.gender = customerData.gender;
    this.store.dispatch(new CustomerAdd(customer)); 
    this.checkoutForm.reset();
  }

}
