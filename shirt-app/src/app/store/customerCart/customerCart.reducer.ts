import {ActionEx, CustomerCartActionTypes} from './customerCart.actions';

export const initialStateCart = [];

export function CustomerCartReducer(state = initialStateCart, action: ActionEx) {
  switch (action.type) {
    
    case CustomerCartActionTypes.Add:
      return [...state, action.payload];

    case CustomerCartActionTypes.Remove:
      return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1)
      ];
    
      default:
      return state;
  }
}