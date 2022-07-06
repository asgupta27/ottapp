import { state } from '@angular/animations';
import { Action, createReducer, on } from '@ngrx/store';
import { TVShow } from '../../models/tvshow';
import *  as TVShowsAction from '../actions/tvshow.action';

export interface TVShowsState{
   tvshows: TVShow[];
   message : string;
   tvshow : TVShow
}

export const initialState : TVShowsState =
{
   tvshows : [],
   message : '',
   tvshow: {} as TVShow
}

export const tvShowReducer = createReducer(
    initialState,
    on(TVShowsAction.addTVShowOnSuccess,
    (state: TVShowsState, {payload})=> ({...state, tvshows: [...state.tvshows, payload], message: 'Show Detail added Successfully!'})),
    on(TVShowsAction.getTVShowListSuccess, (state: TVShowsState, {payload})=> ({tvshows: payload, message: 'Tv List Successfully Get', tvshow:{} as TVShow })), 
    on(TVShowsAction.getTVShow,(state: TVShowsState, {id})=> ({...state, tvshows: state.tvshows,  message: 'Get Detail Successfully', tvshow: state.tvshows.filter(show => show.id == id)[0]})),
    on(TVShowsAction.searchTVShow,(state: TVShowsState, {searchText}) => ({...state, tvshows: state.tvshows.filter(show => show.name?.toLowerCase().includes(searchText) || show.title?.toLowerCase().includes(searchText) ||show.description?.toLowerCase().includes(searchText) || show.genere?.toLowerCase().includes(searchText)  )}))
   //  on(TVShowsAction.searchTVShow,(state: TVShowsState, {searchText}) => {
   //    console.log('success reducer', searchText);
   //    debugger
   // return{
   //   tvshow: {} as TVShow,
   //   message : 'Filtered',
   //   tvshows: state.tvshows.filter(show => show.name?.includes(searchText) || show.title?.includes(searchText) ||show.description?.includes(searchText) || show.genere?.includes(searchText)),
   // }
   // })
  );

  export function reducer(state: TVShowsState | undefined, action: Action): any {
    return tvShowReducer(state, action);
 }