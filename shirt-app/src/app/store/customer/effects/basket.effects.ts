import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

// import * as CustomerActionTypes from '../customer.actions'
import {ActionEx, CustomerActionTypes} from '../customer.actions';

//toast
import { ToastrService } from 'ngx-toastr';


@Injectable()
export class BasketEffects {
  constructor(
    private http: HttpClient, 
    private action$: Actions,
    private toastr: ToastrService
  ) {}

  
  //New customer has been added
  NewCustomerEffect$ = createEffect(() => 
    this.action$.pipe(
      ofType(CustomerActionTypes.Add),
      tap((x) => console.log(x))
    ),
    { dispatch: false }
  );

  //Customer has been removed
  RemovedCustomerEffect$ = createEffect(() => 
    this.action$.pipe(
      ofType(CustomerActionTypes.Remove),
      tap(() => 
        this.toastr.info('Customer has been removed from state!', 'Customer removal!',{
            timeOut: 900,
            positionClass: 'toast-top-center',
          }
        )
      )
    ),
    { dispatch: false }
  );

  //Customer has been removed
  selectedCustomerEffect$ = createEffect(() => 
    this.action$.pipe(
      ofType(CustomerActionTypes.Select),
      tap((x) => 
        this.toastr.success('Customer has been selected.', 'Customer Selected!',{
            timeOut: 900,
            positionClass: 'toast-top-center',
          }
        )
      )
    ),
    { dispatch: false }
  );
}