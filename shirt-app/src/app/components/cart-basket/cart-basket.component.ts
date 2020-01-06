import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';
import {Customer} from '../../classes/customer';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-cart-basket',
  templateUrl: './cart-basket.component.html',
  styleUrls: ['./cart-basket.component.css']
})
export class CartBasketComponent implements OnInit {

  selected$: Observable<Customer>;

  // constructor(public cartService: CartService) { }
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
  }

}
