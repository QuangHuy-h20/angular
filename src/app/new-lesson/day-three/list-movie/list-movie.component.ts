import { MovieService } from './../../../client/services/movie.service';
import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ItemMovieComponent } from '../item-movie/item-movie.component';

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.scss'],
})
export class ListMovieComponent implements OnInit {
  @ViewChildren(ItemMovieComponent)
  itemMovieTagList!: QueryList<ItemMovieComponent>;
  listLikeMovie = [
    { id: '1', name: 'Lalaland', totalLike: 0 },
    { id: '2', name: 'Lalaland 2', totalLike: 0 },
    { id: '3', name: 'Lalaland 3', totalLike: 0 },
    { id: '4', name: 'Lalaland 4', totalLike: 0 },
  ];
  listMovie: any[] = [];
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.listMovie = this.movieService.listPhim;
  }
  
  invokeActionFromChild(eventValue: any): void {
    this.listLikeMovie.forEach((item) => {
      if (item.id === eventValue.id) {
        item.totalLike++;
      }
    });
  }

  demoViewChildren() {
    this.itemMovieTagList.map((item) => {
      item.film.detail = 'view children';
    });
  }
}
