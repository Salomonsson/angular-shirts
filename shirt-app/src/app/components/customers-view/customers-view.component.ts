import {Component} from '@angular/core';
import {Customer} from '../../classes/customer';
// import {Customer} from './../../models/customer'; 
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
}