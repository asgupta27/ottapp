import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TVShowsState } from '../state/reducers/tvshow.reducer';
import * as TvShowActions from '../state/actions/tvshow.action'
import { TVShow } from '../models/tvshow';
import * as TvStateSelector from '../state/selector/tvshow.selector'
import {Router, ActivatedRoute} from '@angular/router'; 


@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.scss']
})
export class ShowListComponent implements OnInit {

  tvshows$: Observable<TVShow[]> | undefined;
	message$: Observable<string> | undefined;
  searchText : string;

  constructor(private route:Router, private store: Store<TVShowsState>) {
    debugger
    this.tvshows$ = store.select(TvStateSelector.getTVShows);
    this.message$ = store.select(TvStateSelector.getMessage);
    this.searchText = '';
   }

  ngOnInit(): void {
    this.loadAllShowsList();
  }

  loadAllShowsList()
  {
    this.store.dispatch(TvShowActions.getTVShowList());
  }

  searchTvShows(){
    debugger
    if(this.searchText.length > 0){
     this.store.dispatch(TvShowActions.searchTVShow({searchText: this.searchText.toLowerCase()}));
    }
    else{
      this.store.dispatch(TvShowActions.getTVShowList());
    }
  }

  getShowDetailById(tvshowId: number){
    this.route.navigate( ['/admin/tvshow'], {queryParams: {id: tvshowId}});
  }
}
