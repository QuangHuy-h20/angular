import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MovieService } from 'src/app/client/services/movie.service';

@Component({
  selector: 'app-item-movie',
  templateUrl: './item-movie.component.html',
  styleUrls: ['./item-movie.component.scss'],
})
export class ItemMovieComponent implements OnInit {
  @Input() film: any;
  @Input() listLike!: any[];

  @Output() eventOutput = new EventEmitter();

  likeInListLike = 0;

  constructor(private movieSer: MovieService) {}

  ngOnInit(): void {}

  like(): void {
    this.countLike();
    let likeNum = this.movieSer.count();
    console.log(likeNum);
    // this.eventOutput.emit(this.film);
  }

  countLike(): void {
    this.listLike.forEach((ele) => {
      if (ele.id === this.film.id) {
        ele.totalLike++;
        this.likeInListLike = ele.totalLike;
      }
    });
  }
}
