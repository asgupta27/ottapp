import { createAction, props } from "@ngrx/store";
import { TVShow } from '../../models/tvshow'

export const ADD_TV_SHOW = 'Add TvShow';
export const ADD_TV_SHOW_ON_SUCCESS = 'Add TvShow On Success'
export const ADD_TV_SHOW_ON_FAILURE = 'Add TvShow On Fialure'
export const GET_TV_SHOW_LIST = 'Get TvShow List';
export const GET_TV_SHOW_LIST_SUCCESS = 'Get TvShow List Success';
export const GET_TV_SHOW_By_ID = 'Get TvShow By Id';
export const SEARCH_TV_SHOW = 'Search TV Show';



export const addTVShow = createAction(ADD_TV_SHOW, props<{payload: TVShow}>());
export const addTVShowOnSuccess = createAction(ADD_TV_SHOW_ON_SUCCESS, props<{payload: TVShow}>());
export const addTVShowOnFailure = createAction(ADD_TV_SHOW_ON_FAILURE, props<{payload: any}>());
export const getTVShowList = createAction(GET_TV_SHOW_LIST);
export const getTVShowListSuccess = createAction(GET_TV_SHOW_LIST_SUCCESS, props<{payload: any}>());
export const getTVShow = createAction(GET_TV_SHOW_By_ID, props<{id: number}>());
export const searchTVShow = createAction(SEARCH_TV_SHOW, props<{searchText: string}>());
