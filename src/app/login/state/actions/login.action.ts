import { createAction, props } from "@ngrx/store";
import { User } from "../../model/user";


export const LOGIN_USER = 'Login User';
export const LOGIN_USER_SUCCESS = 'Login User Success';
export const LOGIN_USER_FAILURE = 'Login User Failure'

export const loginUser = createAction(LOGIN_USER, props<{payload: User}>());
export const loginUserSuccess = createAction(LOGIN_USER_SUCCESS, props<{payload: User}>());
export const loginUserFailure = createAction(LOGIN_USER_FAILURE, props<{payload: string}>());
