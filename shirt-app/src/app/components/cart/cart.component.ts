import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message/message.service';
import { CartService } from '../../services/cart/cart.service';
import { ShirtService } from '../../services/shirt/shirt.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public messageService: MessageService,
              public cartService: CartService,
              public shirtService: ShirtService) {}

  ngOnInit() {
  }

}
