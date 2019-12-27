import { Component, OnInit } from '@angular/core';
import {Customer} from '../../classes/customer';
import {Observable} from 'rxjs';
import {select, Store, State} from '@ngrx/store';

@Component({
  selector: 'app-customer-selected',
  templateUrl: './customer-selected.component.html',
  styleUrls: ['./customer-selected.component.css']
})


export class CustomerSelectedComponent implements OnInit {

  selectedCustomer: Observable<Customer[]>;
  customers: Observable<Customer[]>;

  constructor(private store: Store<{ customers: Customer[] }>) {
    // let propertyValue = State.getValue().path.to.state.property;
    // this.customers = this.store.source['value'];
    // console.log(this.customers); // => { key: "123" }


    // console.log(this.store.value);
    // console.log('beteende:  constructor');
    //this.customers = store.pipe(select('customers'));  
    //console.log(store.pipe(select('customers')));

    // for (var s of this.customers) {

    // }
    
  }



  ngOnInit() {
    // console.log('beteende:  ngOnInit');
    // this.store.select(state => console.log(state.customers));
  }

}
