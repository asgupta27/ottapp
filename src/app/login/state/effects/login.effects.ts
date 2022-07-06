import { Injectable } from '@angular/core';
import { act, Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, switchMap } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';
import { ShowDetailService } from 'src/app/services/show-detail.service';
import * as LoginAction from '../actions/login.action';



@Injectable()
export class LoginEffects {

  constructor(private actions$: Actions, private loginService: LoginService) {debugger}

  /**
   * Validate User Login
   */
  loginuser$ = createEffect(()=> this.actions$.pipe(
    ofType(LoginAction.loginUser),
    map(action => action.payload),
    switchMap(loginDetail => this.loginService.validateUserLogin(loginDetail).pipe(
      map(res => LoginAction.loginUserSuccess({payload: res})),
      catchError((e)=> { 
       return of(LoginAction.loginUserFailure({payload: e}))
      })
    ))
  )); 

}
