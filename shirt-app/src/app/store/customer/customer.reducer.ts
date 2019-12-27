import {ActionEx, CustomerActionTypes} from './customer.actions';

export const initialState   = [];
export const selectedState  = [];

export function CustomerReducer(state = initialState, action: ActionEx) {

  switch (action.type) {

      case CustomerActionTypes.Add:
        return [...state, action.payload];

      case CustomerActionTypes.Remove:
        return [
          ...state.slice(0, action.payload),
          ...state.slice(action.payload + 1)
        ];

      case CustomerActionTypes.Select:{
        for (var s of state) {
          s.selected = false;
        }
        state[action.payload].selected = true;
        return [
          ...state,
          // ...selected, action.payload
        ];
        //return [...state];
      }

      default:
      return state;

  }

}