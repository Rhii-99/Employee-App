import { Component, OnInit,Input } from '@angular/core';
import { EmpDetail } from '../shared/emp-detail.model';

@Component({
  selector: 'app-designer',
  templateUrl: './designer.component.html',
  styleUrls: ['./designer.component.css']
})
export class DesignerComponent implements OnInit {

  @Input()designerDetail: EmpDetail[];

  constructor() { 
    console.log(this.designerDetail);
  }

  ngOnInit(): void {
  }
  getColor(salary: number){
    if ( salary < 50000) {
      return 'black';
    }
    else if ( salary >= 50000 && salary < 100000 ) {
      return 'yellow';
    }
    else if ( salary >= 100000 && salary < 200000 ){
      return 'green';
    }
    else {
      return 'red';
    }
  }
}
