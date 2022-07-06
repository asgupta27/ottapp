import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ShowDetailService } from 'src/app/services/show-detail.service';
import { TVShow } from '../models/tvshow';
import { Store } from '@ngrx/store';
import * as TvShowActions from '../state/actions/tvshow.action'
import { TVShowsState } from '../state/reducers/tvshow.reducer';


@Component({
  selector: 'app-show-detail',
  templateUrl: './createtvshow.component.html',
  styleUrls: ['./createtvshow.component.scss']
})
export class CreateTvShowComponent implements OnInit {

   showDetailForm = new FormGroup ({
   name : new FormControl(null, Validators.required),
   title : new FormControl(null, Validators.required),
   description : new FormControl(null, Validators.required),
   imdbrating : new FormControl(null, Validators.required),
   language : new FormControl(null, Validators.required),
   genere : new FormControl(null, Validators.required),
   //imageUrl : new FormControl(null, Validators.required)
});

  languageList: string[] = ['English', 'Hindi'];
  genereList: string[] = ['Action', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Romance', 'Thriller'];

  constructor(private store: Store<TVShowsState>) { }

  ngOnInit(): void {
  }

  onSubmit(data: any){
    this.addShow(data);
    this.showDetailForm.reset();
  }

  addShow(tvshow: TVShow){
		this.store.dispatch(TvShowActions.addTVShow({payload: tvshow}));
	}

}
