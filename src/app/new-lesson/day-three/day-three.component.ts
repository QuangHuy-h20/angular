import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { ListMovieComponent } from './list-movie/list-movie.component';

@Component({
  selector: 'app-day-three',
  templateUrl: './day-three.component.html',
  styleUrls: ['./day-three.component.scss'],
})
export class DayThreeComponent implements OnInit {
  @ViewChild(ListMovieComponent) listMovieTag!: ListMovieComponent;
  constructor() {}

  ngOnInit(): void {}

  addMovie(
    idMovie: string,
    nameMovie: string,
    priceMovie: string,
    imageMovie: string
  ) {
    const objectNewMovie = {
      id: idMovie,
      name: nameMovie,
      detail: 'test new movie detail',
      price: priceMovie,
      imgUrl: imageMovie,
    };
    this.listMovieTag.listMovie.push(objectNewMovie);
  }


}
