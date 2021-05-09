import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { from } from 'rxjs';
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

  constructor(private httpClient: HttpClient) {}

  getListMovie(): Observable<any> {
    const api =
      'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01';
    return this.httpClient.get(api).pipe(tap((val) => console.log(val)));
  }
}
