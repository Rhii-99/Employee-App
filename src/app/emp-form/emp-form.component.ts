import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-emp-form',
  templateUrl: './emp-form.component.html',
  styleUrls: ['./emp-form.component.css']
})
export class EmpFormComponent implements OnInit {

  fname = '';
  lname = '';
  contact: number;
  salary: number;
  roleType = '';

  constructor() { }

  @Output()onSubmitted = new EventEmitter<{fname: string, lname: string, contact: number, salary: number,roleType: string}>();

  ngOnInit(): void {
  }

  onSubmitForm() {
    this.onSubmitted.emit({ fname: this.fname, lname: this.lname, contact: this.contact, salary: this.salary, roleType: this.roleType });
    this.fname = '';
    this.lname = '';
    this.contact = null;
    this.salary = null;
    this.roleType = '';
  }
}
