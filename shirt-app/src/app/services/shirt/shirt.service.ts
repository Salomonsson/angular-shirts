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

  public shirtUrl = 'http://www.salomonsson.it/SALOCONSULTING/API/f-e/mock-shirts.php';  // URL to web api
  arr: string[] = [];

  constructor(public http: HttpClient,
              private messageService: MessageService,
              private cartService: CartService) { }


  /**
   * Must have an asynchronous signature of some kind, an Observable because it will eventually use the Angular HttpClient.get method to fetch.
   * Observable is one of the key classes in the RxJS library.
   */
  getShirts(): Observable<Shirt[]> {

    // return this.http.get(`https://api.github.com/search/users?q=saloconsulting`)
    // .map(response => response.json().items) // <------
    // .subscribe(
    //   data => data,
    //   error => console.log(error)
    // );

    // console.log(this.http.get<Shirt[]>(this.shirtUrl).pipe(map(data => {})));
    // return this.http.get<Shirt[]>(this.shirtUrl);

    //return this.http.get(this.shirtsUrl).pipe(map((response: any) => response.json()));

    // console.log(this.http.get<Shirt[]>(this.shirtsUrl));
    return this.http.get<Shirt[]>('http://www.salomonsson.it/SALOCONSULTING/API/f-e/mock-shirts.php');
    //return this.http.get<Shirt[]>('http://www.salomonsson.it/SALOCONSULTING/API/f-e/mock-shirts.php').subscribe(data => this.arr = data.json());

    // this.http.get<Shirt>(this.shirtsUrl).subscribe(data => {
    //   console.log(data);
    // });

    // return this.http.get<Shirt[]>(this.shirtsUrl)
    // .pipe(tap(_ => this.log('fetched shirts')),
    //   catchError(this.handleError<Shirt[]>('getShirts', []))
    // );

    // //return this.http.get(`http://www.salomonsson.it/SALOCONSULTING/API/AF/IT.php`);

    //Make note every time shirt is fetched
    this.messageService.add('ShirtService: fetched Shirts');
    //Only if cart has been emptied 
    if(this.cartService.hasCartRefreshed){
      this.BasketRefreshed();
      // return of(SHIRTS);
    }else{
      // return of(SHIRTS);
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
