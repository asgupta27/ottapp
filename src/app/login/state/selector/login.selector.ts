import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromLogin from '../reducers/login.reducer';

export const getLoginState = createFeatureSelector<fromLogin.LoginState>('login');


export const getUserDetail = createSelector(
    getLoginState,
    (state: fromLogin.LoginState) => state.userdetail
)
    
export const isSuccess = createSelector(
    getLoginState,
    (state: fromLogin.LoginState) => state.isSuccess
)

export const getLoginMessage = createSelector(
    getLoginState,
    (state: fromLogin.LoginState) => state.message
)