import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TVShow } from '../admin/models/tvshow';

@Injectable({
  providedIn: 'root'
})
export class ShowDetailService {

  baseURL: string = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  getTvShowsList(): Observable<TVShow[]> {
    console.log('GETSHOW '+this.baseURL + 'movies')
    return this.http.get<TVShow[]>(this.baseURL + 'movies')
  }

  addTVShow(tvshow:TVShow): Observable<any> {
     debugger
    const headers = {'content-type': 'application/json'}  
    const body=JSON.stringify(tvshow);
    console.log(body)
    return this.http.post(this.baseURL + 'movies', body,{'headers':headers})
  }
}
