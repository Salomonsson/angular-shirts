import {Component} from '@angular/core';
import {Customer} from '../../classes/customer';
import {CustomerRemove} from '../../store/customer/customer.actions';
import {CustomerSelect} from '../../store/customer/customer.actions';


import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';


@Component({
  selector: 'app-customers-view',
  templateUrl: './customers-view.component.html',
  styleUrls: ['./customers-view.component.css']
})


export class CustomersViewComponent {

  customers: Observable<Customer[]>;
  
  constructor(private store: Store<{ customers: Customer[] }>) {

    this.customers = store.pipe(select('customers'));
  }

  removeCustomer(customerIndex) {
    console.log('removeCustomer');
    console.log(customerIndex);
    this.store.dispatch(new CustomerRemove(customerIndex));
  }

  selectCustomer(customerIndex){
    console.log('customerIndex - select function');
    console.log(customerIndex);
    this.store.dispatch(new CustomerSelect(customerIndex));
  }

}