import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule }    from '@angular/common/http';
//import { map, filter, switchMap } from 'rxjs/operators';
//import { map } from 'rxjs/operators';
//import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import { catchError, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { Shirt } from '../../classes/shirt';
import { SHIRTS } from '../../mock-shirts';
// import { MessageService } from '../message/message.service';
import { CartService } from '../cart/cart.service';
import {shareReplay} from 'rxjs/operators';
import {ShirtView} from '../../interfaces/iShirtView'



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
  p: ShirtView[] = [];
  //p: ShirtView[];
  header: string;
  
  constructor(public http: HttpClient,
              private cartService: CartService) { 
                this.index();
              }



  index(){
    this.http.get<ShirtView>(this.apiBaseUrl).subscribe(
      //response => this.header = response[0].shirtInfo,
      //response => this.p.push(response.Shirts)
      response => this.p.push(response),
      response => this.header = response.shirtInfo
    );
  }

  /**
   * Must have an asynchronous signature of some kind, an Observable because it will eventually use the Angular HttpClient.get method to fetch.
   * Observable is one of the key classes in the RxJS library.
   */
  //getShirts(): Observable<any> {
  getShirts(): Observable<ShirtView> {
  //getShirts(){
    //this.index();
    //console.log(this.p);
    return this.http.get<ShirtView>(this.apiBaseUrl);
    //return this.header;
    //

    // if(this.cartService.hasCartRefreshed){
    //   this.BasketRefreshed();
    //   return this.http.get<any>(this.apiBaseUrl);
    //   //return this.http.get(this.apiBaseUrl).toPromise().then(response => response as any[]).catch();
    // }else{
    //   return this.http.get<any>(this.apiBaseUrl);
    //   //return this.http.get<Shirt[]>(this.apiBaseUrl);
    //}
  }

  /**
   * Get the specific shirt based on id
   */
  getShirt(id: number): Observable<Shirt> {
    // TODO: send the message _after_ fetching the hero
    // this.messageService.add(`ShirtService: fetched shirt id=${id}`);
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
      // this.messageService.add(`HeroService: ${message}`);
    }



    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {

        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead

        // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);

        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }

}
