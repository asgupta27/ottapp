import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { Store } from '@ngrx/store';
import * as LoginAction from '../state/actions/login.action'
import { LoginState } from '../state/reducers/login.reducer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userModel : User = { username :'', password :'', IsAdmin : false};

  constructor(private store: Store<LoginState>) { }

  ngOnInit(): void {
    this.store.subscribe(state => {
      this.loginUser(state);
    });
  }

  loginUser(data: any){
   if(data.login.isSuccess){
      localStorage.setItem('isUserLoggedIn', data.login.isSuccess ? "true" : "false");
      localStorage.setItem('isAdmin', data.login.userdetail[0].isadmin == 1 ? "true" : "false");  
      window.location.href='http://localhost:4200/dashboard'
   }
   else{
    this.userModel = {username: '', password: '', IsAdmin: false};
   }
  }

  onSubmit(){
    this.store.dispatch(LoginAction.loginUser({payload: this.userModel}));
  }

}
