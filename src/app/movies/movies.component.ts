import { Component, OnInit } from '@angular/core';
import {MoviesService } from '../movies.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
    
    createMode=true;
    editMode=false;
   
    movies:any[];
    
    userCont:object[]=[];
   users:object[];
   stars:any[]=[];
   searchText:any;
  
  editedUser:object;
  
  items = [];
  pageOfItems: Array<any>;

  /* paginate */ 
  pageNumbers: number[] = [];
  currentPage = 1;
  select: number = 0;
  start: number = 1;
  end: number = 10;
  currentPagin: number = 11;


  constructor( public _MoviesService:MoviesService) { 
    if(localStorage.getItem('userData'))
    {
      this.userCont=JSON.parse(localStorage.getItem('userData'))
    }
    
    this.users=_MoviesService.users;
    
    _MoviesService.getMoviesPage(this.currentPage).subscribe(data => {
      this.pageOfItems = data.results;
    })
    for (let i = this.start; i <= this.end; i++) {
      this.pageNumbers.push(i);
    }
    
           
  }
  changePage(pageNumber) {
    if (pageNumber > 0) {
      this.currentPage = pageNumber;
      this._MoviesService.getMoviesPage(this.currentPage).subscribe(data => {
        this.pageOfItems = data.results;
      });
    }
  }
  next() {
    this.changePage(this.currentPage + 1);
    this.isSelected(this.currentPage - 1);
    if (this.currentPage == this.currentPagin) {
      this.end = this.end + 10;
      this.start = this.start + 10;
      this.pageNumbers = [];
      for (let i = this.start; i <= this.end; i++) {
        this.pageNumbers.push(i);
        this.currentPagin = this.currentPagin + 1;
      }
    }
  }
  prev() {
    this.changePage(this.currentPage - 1);
    this.isSelected(this.currentPage - 1);
    if (this.currentPage == this.currentPagin - 11 && this.currentPage > 0) {
      this.end = this.end - 10;
      this.start = this.start - 10;
      this.pageNumbers = [];
      for (let i = this.start; i <= this.end; i++) {
        this.pageNumbers.push(i);
        this.currentPagin = this.currentPagin - 1;
      }
    }


  }
  isSelected(pageNumber) {
    this.select = pageNumber;
  }
  ngOnInit() {
  }

}
