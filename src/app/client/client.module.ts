import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsComponent } from './about-us/about-us.component';
import { ClientComponent } from './client.component';
import { RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { CardMovieComponent } from './card-movie/card-movie.component';
import { DetailMovieComponent } from './detail-movie/detail-movie.component';

const routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      {
        path: 'about-us',
        component: AboutUsComponent,
      },
      {
        path: 'movies',
        component: MoviesComponent,
      },
      {
        path: 'detail-movie',
        component: DetailMovieComponent,
      },
      {
        path: 'detail-movie/:idMovie',
        component: DetailMovieComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [ClientComponent, AboutUsComponent, MoviesComponent, CardMovieComponent, DetailMovieComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ClientModule { }
