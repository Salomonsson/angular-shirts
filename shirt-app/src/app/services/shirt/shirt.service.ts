import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule }    from '@angular/common/http';
//import { map, filter, switchMap } from 'rxjs/operators';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';

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

  private readonly apiBaseUrl = 'http://www.salomonsson.it/SALOCONSULTING/API/f-e/mock-shirts.php';  // URL to web api

  constructor(public http: HttpClient,
              private messageService: MessageService,
              private cartService: CartService) { }

    public arr:any[] = new Array();   


    fetchAll() {
      this.arr.push(this.http.get<any>(this.apiBaseUrl));
      console.log(this.arr);
      return this.http.get<any>(this.apiBaseUrl);
    }
  /**
   * Must have an asynchronous signature of some kind, an Observable because it will eventually use the Angular HttpClient.get method to fetch.
   * Observable is one of the key classes in the RxJS library.
   */
  getShirts(): Observable<Shirt[]> {
    this.messageService.add('ShirtService: fetched Shirts');
    this.fetchAll();

    //Only if cart has been emptied 
    if(this.cartService.hasCartRefreshed){
      this.BasketRefreshed();
      //return this.http.get<Shirt[]>(this.apiBaseUrl);
      return this.http.get<any>(this.apiBaseUrl);
    }else{
      return this.http.get<any>(this.apiBaseUrl);
      //return this.http.get<Shirt[]>(this.apiBaseUrl);
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

    /** Log a HeroService message with the MessageService */
    private log(message: string) {
      this.messageService.add(`HeroService: ${message}`);
    }

}
