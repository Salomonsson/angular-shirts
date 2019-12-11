import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Shirt } from '../../classes/shirt';
import { SHIRTS } from '../../mock-shirts';



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

  //shirts: Shirt[];
  constructor() { }


  /**
   * Must have an asynchronous signature of some kind, an Observable because it will eventually use the Angular HttpClient.get method to fetch.
   * Observable is one of the key classes in the RxJS library.
   */
  getShirts(): Observable<Shirt[]> {
    return of(SHIRTS);
  }

  /**
   * 
   * getHeroes(): void {
        this.heroes = this.heroService.getHeroes();
      }
   */

}
