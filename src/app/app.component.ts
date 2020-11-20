import { Component } from '@angular/core';
import { EmpDetail } from './shared/emp-detail.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'empApp';

  manager: EmpDetail[] = [];
  developer: EmpDetail[] = [];
  designer: EmpDetail[] = [];

  onFormSubmit(empData: {fname: string, lname: string, contact: number, salary: number,roleType: string}){
console.log(empData);
    if (empData.roleType === 'Manager') {

      this.manager.push ({
        fname: empData.fname,
        lname: empData.lname,
        contact: empData.contact,
        salary: empData.salary,
        roleType: empData.roleType
      });
      console.log(this.manager);
    }
    else if (empData.roleType === 'Developer') {
      this.developer.push ({
        fname: empData.fname,
        lname: empData.lname,
        contact: empData.contact,
        salary: empData.salary,
        roleType: empData.roleType,
      });
      console.log(this.developer);
    }
    else {
      this.designer.push ({
        fname: empData.fname,
        lname: empData.lname,
        contact: empData.contact,
        salary: empData.salary,
        roleType: empData.roleType,
      });
      console.log(this.designer);
    }
  }
}
