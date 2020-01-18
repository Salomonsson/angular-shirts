import { Component } from '@angular/core';
import {Observable} from 'rxjs';


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
  title = 'An App in Angular using Ngrx and effects!';
  customers: Observable<Customer[]>;



  constructor(private store: Store<{ customers: Customer[]}>) {
    
    this.customers  = store.pipe(select('customers'));
  }
}
