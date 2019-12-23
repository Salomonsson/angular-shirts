import { Component, OnInit } from '@angular/core';
import { Shirt } from '../../classes/shirt';
import { ShirtService } from '../../services/shirt/shirt.service';
import { MessageService } from '../../services/message/message.service';
import { CartService } from '../../services/cart/cart.service';

import {ShirtView} from '../../interfaces/iShirtView'


@Component({
  selector: 'app-shirts',
  templateUrl: './shirts.component.html',
  styleUrls: ['./shirts.component.css']
})
export class ShirtsComponent implements OnInit {
  //import the array of fake shirts
  selectedShirt: Shirt;
  //shirts: Shirt[];
  shirts: Shirt[];
  

  //Inject the ShirtService
  constructor(private shirtService: ShirtService, 
              private messageService: MessageService,
              private cartService: CartService) { }

  ngOnInit() {
    this.getShirts();
  }


  /**
   * Add item to cart service
   * @param shirt 
   */
  addToCart(shirt: Shirt): void {
    shirt.inCart =  true;
    this.cartService.AddItemCart(shirt);
    this.cartService.CurrentPrice();
  }


  /**
   * Remove item from cart
   * @param shirt object
   */
  RemoveFromCart(shirt: Shirt): void {
    shirt.inCart =  false;
    this.cartService.RemoveItemCart(shirt);
    this.cartService.CurrentPrice();
  }


  /**
   * Select current item for detailed view
   * @param shirt object
   */
  onSelect(shirt: Shirt): void {
    this.messageService.add('shirts.component: Shirt detailed:' + shirt.id + " ("  + shirt.name + ")");
    this.selectedShirt = shirt;
    //console.log(this.selectedShirt);
  }

  /**
   * trackBy function which will return an unique identifier for each item.
   * @param index 
   * @param item 
   */
  trackByFn(index, item) {    
    return item.id; // unique id corresponding to the item
  }


  /**
   * The assignment occurs synchronously, as if the server could return heroes instantly or the browser could freeze the 
   * UI while it waited for the server's response.
   */
  getShirts(): void {
    //this.shirts = this.shirtService.getShirts()['value'];
    //this.shirtService.getShirts().subscribe(shirts => this.shirts = shirts);
    //this.shirts = this.shirtService.getShirts()['value'];
    console.log('hejsan från komponenten. ');
    //this.shirtService.index();
    //this.shirts = this.shirtService.p;
    //console.log(this.shirtService.getShirts());
    //this.shirts = this.shirtService.getShirts();

  //   //this.shirts = this.shirtService.getShirts();
    this.shirtService.getShirts().subscribe(data => {
      //console.log(data.Shirts);
      this.shirts = data.Shirts;
      //this.shirts = data;
  });
  }

  
}
