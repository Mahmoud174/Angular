import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{MoviedetailsComponent} from './moviedetails/moviedetails.component';
import {MoviesComponent} from './movies/movies.component';
import {CrudComponent} from './crud/crud.component';

const routes: Routes = [
{path:'',redirectTo:"movie",pathMatch:'full'},
{path:'movie',component:MoviesComponent},
{path:'moviedetails/:id',component:MoviedetailsComponent}, 
{path:'crud',component:CrudComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
