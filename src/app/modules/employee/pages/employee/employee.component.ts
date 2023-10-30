import { Component } from '@angular/core';
import { Employee } from '../../../../models/employee.model';
import { EmployeeService } from '../../../../services/employee.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  employee?: Employee

  constructor(private _employeeService: EmployeeService, private activatedRoute:ActivatedRoute){
    this.activatedRoute.params.subscribe((param:any)=>{
      this.employee = this._employeeService.getEmployeeById(param.id)
    })

  }

}
