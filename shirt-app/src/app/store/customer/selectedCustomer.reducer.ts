import {Customer} from '../../classes/customer';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';


export function SelectedCustomerReducer() {



    var counter = Math.floor((Math.random() * 100) + 1);
    const customer = new Customer(); 
    customer.name = "Fromclass TEST: " + counter; 
    return customer;
    //return [customer];
}