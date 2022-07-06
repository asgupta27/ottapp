import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../shared/material.module';
import { LoginRoutingModule } from './login-routing.module';
import { loginReducer } from './state/reducers/login.reducer';
import { LoginEffects } from './state/effects/login.effects';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    LoginRoutingModule,
    CommonModule,
    MaterialModule,
    FormsModule,
    StoreModule.forFeature("login", loginReducer),
    EffectsModule.forFeature([LoginEffects])
  ]
})
export class LoginModule { }
