import { Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import{MoviesService} from '../movies.service'
@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss']
})
export class MoviedetailsComponent implements OnInit {
  id:any;
  movieDetails:any; 
  production_companies:any;
  imgD = "https://image.tmdb.org/t/p/original/";
  isLoad:boolean = false;
  topTen:any=[];
  constructor(public _ActivatedRoute:ActivatedRoute,public _MoviesService:MoviesService ) 
  {
   _ActivatedRoute.paramMap.subscribe(params=>{
    this.id = params.get('id');
    _MoviesService.getMovieDetails(this.id).subscribe(data => {

      this.movieDetails = data; 
      this.production_companies = data.production_companies; 
      this.isLoad = true;
      })
      
  })
  
  
  _MoviesService.getMovies().subscribe(movies=>
   {
  
    for (let i =0 ; i<6;i++)
    {
      this.topTen.push(movies.results[i]);
    }

   })
  
  }

  ngOnInit() {
    
  }
  
  


}
