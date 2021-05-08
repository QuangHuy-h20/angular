import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

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

  constructor() {}

  ngOnInit(): void {}

  like(): void{
    this.countLike();
    // this.eventOutput.emit(this.film);
  }

  countLike(): void{
    this.listLike.forEach(ele =>{
      if(ele.id === this.film.id){
        ele.totalLike++;
        this.likeInListLike = ele.totalLike;
      }
    })
  }
}
