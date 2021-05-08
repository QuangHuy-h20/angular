import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  listPhim = [
    {
      id: '1',
      name: 'Lalaland 1',
      price: '200000',
      detail: 'detail 1',
      imgUrl: '/src/assets/images/',
    },
    {
      id: '2',
      name: 'Lalaland 2',
      price: '200000',
      detail: 'detail 2',
      imgUrl: '',
    },
    {
      id: '3',
      name: 'Lalaland 3',
      price: '200000',
      detail: 'detail 3',
      imgUrl: '',
    },
    {
      id: '4',
      name: 'Lalaland 4',
      price: '200000',
      detail: 'detail 4',
      imgUrl: '',
    },
  ];
  
  constructor() {}

  count(){
    let a = 1;
    return a++;
  }
}
