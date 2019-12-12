import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-cart-basket',
  templateUrl: './cart-basket.component.html',
  styleUrls: ['./cart-basket.component.css']
})
export class CartBasketComponent implements OnInit {

  constructor(public cartService: CartService) { }

  ngOnInit() {
  }

}
