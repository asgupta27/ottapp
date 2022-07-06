import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, switchMap } from 'rxjs';
import { ShowDetailService } from 'src/app/services/show-detail.service';
import * as TVShowsAction from '../actions/tvshow.action';



@Injectable()
export class TVShowEffects {

  constructor(private actions$: Actions, private showDetailService: ShowDetailService) {debugger}

  addTvShow$ = createEffect(()=> this.actions$.pipe(
     ofType(TVShowsAction.addTVShow),
     map(action => action.payload),
     switchMap(tvshow => this.showDetailService.addTVShow(tvshow).pipe(
      map(res => TVShowsAction.addTVShowOnSuccess({payload: res}))
     ))
  ));

  getTVShowList$ = createEffect(()=> this.actions$.pipe(
    ofType(TVShowsAction.getTVShowList),
    switchMap(()=> this.showDetailService.getTvShowsList().pipe(
      map(data => TVShowsAction.getTVShowListSuccess({payload: data}))
    ))
  ));

  // searchTvShow$ = createEffect(() => this.actions$.pipe(
  //  ofType(TVShowsAction.searchTVShow),
  //  map(action => action.payload),
  // ));

}
