import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AdminRoutingModule } from './admin-routing.module';
import { CreateTvShowComponent } from './createtvshow/createtvshow.component';
import { ShowListComponent } from './show-list/show-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { tvShowReducer } from './state/reducers/tvshow.reducer';
//import { TVShowEffects } from './state/effects/tvshow.effects';
import { TVShowEffects } from './state/effects/tvshow.effects';
import { TvshowDetailComponent } from './tvshow-detail/tvshow-detail.component';
import { AdminComponent } from './admin/admin.component';
//import { AdminComponent } from './admin/admin.component';



@NgModule({
  declarations: [
   CreateTvShowComponent,
    ShowListComponent,
    TvshowDetailComponent,
    AdminComponent
    //AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule,
    StoreModule.forFeature("tvshow", tvShowReducer),
    EffectsModule.forFeature([TVShowEffects])
  ]
})
export class AdminModule { }
