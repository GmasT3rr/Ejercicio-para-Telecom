import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateEmployeeComponent } from './pages/create-employee/create-employee.component';
import { EmployeeListComponent } from './pages/employee-list/employee-list.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { EditEmployeeComponent } from './pages/edit-employee/edit-employee.component';


@NgModule({
  declarations: [
    EmployeeComponent,
    CreateEmployeeComponent,
    EmployeeListComponent,
    EmployeeFormComponent,
    EditEmployeeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  exports:[
    EmployeeComponent,
    CreateEmployeeComponent,
    EmployeeListComponent
  ]
})
export class EmployeeModule { }
