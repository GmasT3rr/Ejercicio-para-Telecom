import { Component, ViewChild } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { EmployeeFormComponent } from '../../components/employee-form/employee-form.component';
import { Employee } from 'src/app/models/employee.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent {
  @ViewChild(EmployeeFormComponent) employeeFormComponent!: EmployeeFormComponent;

  employee!:Employee

  constructor(private _employeeService: EmployeeService, private activatedRoute:ActivatedRoute){
    this.activatedRoute.params.subscribe((param:any)=>{
      this.employee = this._employeeService.getEmployeeById(param.id) as Employee
    })


  }
  editEmployee(){
    if(!this.isFormValid) return

    const formValue = this.employeeFormComponent.employeeForm.value
    this.employee.firstName = formValue.firstName
    this.employee.lastName = formValue.lastName
    this.employee.country = formValue.country
    this.employee.salary = formValue.salary
    this._employeeService.updateEmployee(this.employee)

  }
  get isFormValid(): boolean {
    if (this.employeeFormComponent) return this.employeeFormComponent.employeeForm.valid
    else return false
  }
}
