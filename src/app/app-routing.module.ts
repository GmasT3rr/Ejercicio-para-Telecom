import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './modules/employee/pages/employee-list/employee-list.component';
import { CreateEmployeeComponent } from './modules/employee/pages/create-employee/create-employee.component';
import { EmployeeComponent } from './modules/employee/pages/employee/employee.component';
import { EditEmployeeComponent } from './modules/employee/pages/edit-employee/edit-employee.component';

const routes: Routes = [
  { path: 'empleados', component: EmployeeListComponent },
  { path: 'empleados/crear', component: CreateEmployeeComponent },
  { path: 'empleados/:id', component: EmployeeComponent },
  { path: 'empleados/:id/modificar', component: EditEmployeeComponent },
  { path: "**",  redirectTo: "empleados", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
