import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.scss']
})
export class DetailMovieComponent implements OnInit {

  detailMovie: any;
  id!: string;
  constructor(private activateRoute: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.paramMap.get('idMovie') as string;

    if (!this.id) {
      this.getParamsFromUrl();
    }
    this.getDataMovie(this.id);
  }
  getDataMovie(id: string) {
    this.movieService.getDetailMovie(id).subscribe((res) => {
      if (res) {
        this.detailMovie = res;
      }
    });
  }
  getParamsFromUrl() {
    this.activateRoute.queryParams.subscribe((data: any) => {
      this.id = data.maPhim;
    });
  }
}
