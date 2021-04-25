import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent implements OnInit {


  studentList = [
    {name: 'Nguyen', age: 20},
    {name: 'An', age: 21},
    {name: 'Bac', age: 21},
    {name: 'Van', age: 20},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
