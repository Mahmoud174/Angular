import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'

@Injectable
({

  providedIn: 'root'
  
})
export class MoviesService {

  users:object[]=
  [
    {name:"nadia",age:25,salary:3738,dateOfBirth:'8/3/1993',gender:'female'},
    {name:"karim",age:43,salary:0,dateOfBirth:'4/3/1993',gender:'male'},
    {name:"mansour",age:27,salary:78383,dateOfBirth:'2/5/1993',gender:'male'},
    {name:"mai",age:38,salary:8888,dateOfBirth:'2/3/1994',gender:'female'},
  ]

  constructor(public _HttpClient:HttpClient) { }

  getMovies():Observable<any>
  {
    return   this._HttpClient.get("https://api.themoviedb.org/3/movie/popular?api_key=c636ed7787cc302d96bf88ccf334e0d8&language=en-US&page=1")
  }

  getMovieDetails(id):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=c636ed7787cc302d96bf88ccf334e0d8&language=en-US`)
  }
  getMoviesPage(page):Observable<any>
  {
    return   this._HttpClient.get("https://api.themoviedb.org/3/movie/popular?api_key=c636ed7787cc302d96bf88ccf334e0d8&language=en-US&page="+page)
  }
}
