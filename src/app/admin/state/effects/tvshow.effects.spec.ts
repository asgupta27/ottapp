import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { TVShowEffects } from './app.effects';

describe('AppEffects', () => {
  let actions$: Observable<any>;
  let effects: TVShowEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TVShowEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(TVShowEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
