import { state } from '@angular/animations';
import { Action, createReducer, on } from '@ngrx/store';
import { TVShow } from '../../admin/models/tvshow';
import *  as TVShowsAction from '../actions/app.action';



// export interface TVShowsState{
//    tvshows: TVShow[];
//    message : string;
// }

// export const initialState : TVShowsState =
// {
//    tvshows : [],
//    message : ''
// }

// export const tvShowReducer = createReducer(
//     initialState,
//     on(TVShowsAction.addTVShowOnSuccess,
//     (state: TVShowsState, {payload})=> ({...state, tvshows: [...state.tvshows, payload], message: 'Show Detail added Successfully!'})),
//     on(TVShowsAction.getTVShowListSuccess, (state: TVShowsState, {payload})=> ({tvshows: payload, message: 'Tv List Successfully Get'}))  
//   );

//   export function reducer(state: TVShowsState | undefined, action: Action): any {
//     return tvShowReducer(state, action);
//  }

// export const appReducer = createReducer(
//     );