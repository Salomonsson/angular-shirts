import {Component, OnInit} from '@angular/core';
import {Customer} from '../../classes/customer';
import {CustomerRemove} from '../../store/customer/customer.actions';
import {CustomerSelect} from '../../store/customer/customer.actions';
import {Observable} from 'rxjs';
import {select, Store, State} from '@ngrx/store';
import { getPizzaState, getProductsState } from 'src/app/store/customer/customer.reducer';


@Component({
  selector: 'app-customers-view',
  templateUrl: './customers-view.component.html',
  styleUrls: ['./customers-view.component.css']
})


export class CustomersViewComponent implements OnInit{

  customers: Observable<Customer[]>;
  selected$: Observable<Customer>;
  test$: Observable<Customer>;
  
  constructor(private store: Store<{ customers: Customer[], selectedStoreModule: Customer }>) {
    
    this.customers  = store.pipe(select('customers'));
    this.test$ = this.store.select(getPizzaState);
    console.log(this.test$);
    // this.selected = this.selected.source.source.source['value'].selectedStore;
    // console.log(this.selected.source.source.source['value'].selectedStoreModule);
  }

  ngOnInit(){
    this.store.select<any>('selectedStoreModule').subscribe(state => {
      // console.log(state);
      this.selected$ = state;
    });

  }

  removeCustomer(customerIndex) {
    console.log('removeCustomer');
    this.store.dispatch(new CustomerRemove(customerIndex));
  }

  selectCustomer(customerIndex){
    console.log('customerIndex - select function');
    this.store.dispatch(new CustomerSelect(customerIndex));
  }

}