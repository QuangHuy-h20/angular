import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsComponent } from './about-us/about-us.component';
import { ClientComponent } from './client.component';
import { RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { CardMovieComponent } from './card-movie/card-movie.component';

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
    ],
  },
];

@NgModule({
  declarations: [ClientComponent, AboutUsComponent, MoviesComponent, CardMovieComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ClientModule {}
