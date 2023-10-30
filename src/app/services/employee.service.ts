import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employeeArray: Employee[] = [
    {
    firstName:'Lucas',
    lastName:'Ramallo',
    country:'Argentina',
    salary:2500,
    id:1
  },
    {
    firstName:'Ezequiel',
    lastName:'Escobar',
    country:'Argentina',
    salary:1500,
    id:2
  },
]

  createEmployee(newEmployee:Employee){
     newEmployee.id = this.employeeArray.length +1
     this.employeeArray.push({...newEmployee})
  }

  updateEmployee(updatedEmployee: Employee) {
    const index = this.employeeArray.findIndex((employee: Employee) => employee.id === updatedEmployee.id);

    if (index !== -1) {
      this.employeeArray[index] = { ...updatedEmployee };
    }
  }


  getEmployees() {
    return this.employeeArray;
  }

  getEmployeeById(id:number) {
    return this.employeeArray.find((employee:Employee) => employee.id == id);
  }
}
