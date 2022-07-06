import { NumberInput } from '@angular/cdk/coercion';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TVShowsState } from '../state/reducers/tvshow.reducer';
import * as TvStateSelector from '../state/selector/tvshow.selector'
import * as TvShowActions from '../state/actions/tvshow.action'
import { Observable } from 'rxjs/internal/Observable';
import { TVShow } from '../models/tvshow';

@Component({
  selector: 'app-tvshow-detail',
  templateUrl: './tvshow-detail.component.html',
  styleUrls: ['./tvshow-detail.component.scss']
})
export class TvshowDetailComponent implements OnInit {

  tvshowId: number = 0;
  tvshow$: Observable<TVShow> | undefined;

  constructor(private route: ActivatedRoute,private store: Store<TVShowsState>) { 
    this.tvshow$ = store.select(TvStateSelector.getTVShowDetail);
  }

  ngOnInit(): void {
    //Get id of tvshow
    this.route.queryParams.subscribe(param => {
      debugger
      this.tvshowId = param['id'];
      this.getTvShowDetail();
    });
  }

  /**
   * Get detail of tv show
   */
  getTvShowDetail(){
    this.store.dispatch(TvShowActions.getTVShow({id: this.tvshowId}));
  }

}
