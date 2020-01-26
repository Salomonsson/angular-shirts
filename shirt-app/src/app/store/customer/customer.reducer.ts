import {ActionEx, CustomerActionTypes} from './customer.actions';
import { createSelector, createFeatureSelector, State } from '@ngrx/store';
import { Customer } from 'src/app/classes/customer';
import { Shirt } from 'src/app/classes/shirt';


export const initialState   = [];
export const selectedState  = [];

export function CustomerReducer(state = initialState, action: ActionEx) {

  switch (action.type) {
      //Add customer
      case CustomerActionTypes.Add:
        return [...state, action.payload];

      //Remove customer
      case CustomerActionTypes.Remove:
        return [
          ...state.slice(0, action.payload),
          ...state.slice(action.payload + 1)
        ];

      //Change object property boolean to true
      case CustomerActionTypes.Select:{
        for (var s of state) {
          s.selected = false;
          if(s.name == action.payload.name){
            s.selected = true;
          }
        }
        
        return [
          ...state
        ];
      }

      //Add shirt items to cart array of object
      case CustomerActionTypes.AddCart:{
        for (var s of state) {
          if(s.selected == true){
            s.Shirts.push(action.payload);
          }
        }
        return [
          ...state
        ];
      }

      //remove object in shirts array of customer
      case CustomerActionTypes.RemoveCart:{
        for (var customer of state) {
          if(customer.selected){
            for (var i = 0; i < customer.Shirts.length; i++) {
              if(customer.Shirts[i].id == action.payload.id){
                customer.Shirts.splice(i, 1);
              }
            }
            break;
          }
        }
        return [
          ...state
        ];
      }

      default:
      return state;

  }

}
