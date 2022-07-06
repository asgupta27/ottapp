import { state } from '@angular/animations';
import { Action, createReducer, on } from '@ngrx/store';
import { User } from '../../model/user';
import *  as LoginAction from '../actions/login.action';

export interface LoginState{
   userdetail: User;
   message : string;
   isSuccess: boolean
}

export const initialState : LoginState =
{
   message : '',
   userdetail: {} as User,
   isSuccess : false
}

export const loginReducer = createReducer(
    initialState,
    on(LoginAction.loginUserSuccess,
    (state: LoginState, {payload})=> ({userdetail:payload, message:  Object.keys(payload).length > 0 ? 'Login Success': 'Username Password does not match', isSuccess: Object.keys(payload).length > 0 ?true: false})),
    on(LoginAction.loginUserFailure,
      (state: LoginState, {payload})=> ({...state, userdetail: {} as User, message: payload, isSuccess: false}))
  );

  export function reducer(state: LoginState | undefined, action: Action): any {
    return loginReducer(state, action);
 }