import { Component, OnInit,Input } from '@angular/core';
import { EmpDetail } from '../shared/emp-detail.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {

  @Input()developerDetail: EmpDetail[];

  constructor() { 
    console.log(this.developerDetail);
  }

  ngOnInit(): void {
  }
  getColor(salary: number){
    if ( salary < 50000) {
      return 'black';
    }
    else if ( salary >= 50000 && salary < 100000 ) {
      return 'blue';
    }
    else if ( salary >= 100000 && salary < 200000 ){
      return 'green';
    }
    else {
      return 'red';
    }
  }
}
