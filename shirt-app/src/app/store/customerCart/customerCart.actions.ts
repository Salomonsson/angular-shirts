import {Action} from '@ngrx/store';

export enum CustomerCartActionTypes {
  Add = '[CustomerCart Component] Add',
  Remove = '[CustomerCart Component] Remove'
}
export class ActionEx implements Action {
  readonly type;
  payload: any;
}
export class CustomerCartAdd implements ActionEx {
  readonly type = CustomerCartActionTypes.Add;
  constructor(public payload: any) {
  }
}
export class CustomerCartRemove implements ActionEx {
  readonly type = CustomerCartActionTypes.Remove;
  constructor(public payload: any) {
  }
}