import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromTVShows from '../reducers/tvshow.reducer';

// export const getTVShowState = createFeatureSelector<fromTVShows.TVShowsState>('tvshow');


// export const getTVShows = createSelector(
//     getTVShowState,
//     (state: fromTVShows.TVShowsState) => state.tvshows
// )
    
// export const getMessage = createSelector(
//     getTVShowState,
//     (state: fromTVShows.TVShowsState) => state.message
// )