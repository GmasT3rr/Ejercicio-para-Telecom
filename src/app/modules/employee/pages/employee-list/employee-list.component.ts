import { Component } from '@angular/core';
import { Employee } from '../../../../models/employee.model';
import { EmployeeService } from '../../../../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  employeeArray: Employee[]

  constructor(private _employeeService: EmployeeService){
    this.employeeArray = this._employeeService.employeeArray
  }
}
