import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Shirt } from '../../classes/shirt';
import { SHIRTS } from '../../mock-shirts';
import { MessageService } from '../message/message.service';
import { CartService } from '../cart/cart.service';



/**
 * @Injectable() decorator. This marks the class as one that participates in the dependency injection system. 
 * The HeroService class is going to provide an injectable service, and it can also have its own injected dependencies.
 */
@Injectable({
  providedIn: 'root'
})


/**
 * WHY SERVICES?
 * Components shouldn't fetch or save data directly. They should focus on presenting data and delegate data access to a service.
 * Services are a great way to share information among classes that don't know each other. You'll create a MessageService and inject it in two places.
 * 
 */

export class ShirtService {

  constructor(private messageService: MessageService,
              private cartService: CartService) { }


  /**
   * Must have an asynchronous signature of some kind, an Observable because it will eventually use the Angular HttpClient.get method to fetch.
   * Observable is one of the key classes in the RxJS library.
   */
  getShirts(): Observable<Shirt[]> {
    //Make note every time shirt is fetched
    this.messageService.add('ShirtService: fetched Shirts');
    //Only if cart has been emptied 
    if(this.cartService.hasCartRefreshed){
      this.BasketRefreshed();
      return of(SHIRTS);
    }else{
      return of(SHIRTS);
    }
  }


  /**
   * Get the specific shirt based on id
   */
  getShirt(id: number): Observable<Shirt> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`ShirtService: fetched shirt id=${id}`);
    return of(SHIRTS.find(shirt => shirt.id === id));
  }


  /**
   * Refresh Basket - cart has been emptied and all the boolean 'incart' needs to be set false
   */
  BasketRefreshed(): void {
    //set global check/flag ti false
    this.cartService.hasCartRefreshed =  false;
    //set all objects to inCart false
    SHIRTS.forEach((element, index, array) => {
      if(element['inCart']){
        element.inCart = false;
      }
    });
  }


  /**
   * 
   *getHeroes(): void {
        this.heroes = this.heroService.getHeroes();
      }
   */

}
