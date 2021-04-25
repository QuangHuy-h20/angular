import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.scss']
})
export class NgIfComponent implements OnInit {

  flag = true;
  constructor() { }

  ngOnInit(): void {
  }

  createDiv(): void{
    this.flag = true;
  }
  collapseDiv(): void{
    this.flag = !this.flag;
  }

}
