import {Action} from '@ngrx/store';

export enum CustomerActionTypes {
  Add     = '[Customer Component] Add',
  Remove  = '[Customer Component] Remove',
  Select  = '[Customer Component] Select',
  AddCart  = '[Customer Component] AddCart',
  RemoveCart  = '[Customer Component] RemoveCart'
}

export class ActionEx implements Action {
  readonly type;
  payload: any;
}

export class CustomerAdd implements ActionEx {
  readonly type = CustomerActionTypes.Add;
  constructor(public payload: any) {
  }
}

export class CustomerRemove implements ActionEx {
  readonly type = CustomerActionTypes.Remove;
  constructor(public payload: any) {
  }
}

export class CustomerSelect implements ActionEx {
  readonly type = CustomerActionTypes.Select;
  constructor(public payload: any) {
  }
}


export class CustomerAddCart implements ActionEx {
  readonly type = CustomerActionTypes.AddCart;
  constructor(public payload: any) {
  }
}


export class CustomerRemoveCart implements ActionEx {
  readonly type = CustomerActionTypes.RemoveCart;
  constructor(public payload: any) {
  }
}