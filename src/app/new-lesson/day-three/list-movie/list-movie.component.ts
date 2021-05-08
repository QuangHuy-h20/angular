import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ItemMovieComponent } from '../item-movie/item-movie.component';

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.scss'],
})
export class ListMovieComponent implements OnInit {
  @ViewChildren(ItemMovieComponent) itemMovieTagList!: QueryList<ItemMovieComponent>;
  listMovie = [
    {
      id: '1',
      name: 'Lalaland 1',
      price: '200000',
      detail: 'detail 1',
      imgUrl: '/src/assets/images/'
    },
    {
      id: '2',
      name: 'Lalaland 2',
      price: '200000',
      detail: 'detail 2',
      imgUrl: ''
    },
    {
      id: '3',
      name: 'Lalaland 3',
      price: '200000',
      detail: 'detail 3',
      imgUrl: ''
    },
    {
      id: '4',
      name: 'Lalaland 4',
      price: '200000',
      detail: 'detail 4',
      imgUrl: ''
    },
  ];
  listLikeMovie = [
    { id: '1', name: 'Lalaland', totalLike: 0 },
    { id: '2', name: 'Lalaland 2', totalLike: 0 },
    { id: '3', name: 'Lalaland 3', totalLike: 0 },
    { id: '4', name: 'Lalaland 4', totalLike: 0 },
  ];
  constructor() {}

  ngOnInit(): void {}

  invokeActionFromChild(eventValue: any): void {
    this.listLikeMovie.forEach(item =>{
      if(item.id === eventValue.id){
        item.totalLike++;
      }
    })
  }

  demoViewChildren(){
    this.itemMovieTagList.map(item =>{
      item.film.detail = 'view children'
    })
  }
}
