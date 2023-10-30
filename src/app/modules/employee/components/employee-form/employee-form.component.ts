import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit{

  @Input() isEdit:boolean = false
  @Input() employee!:Employee

  employeeForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.employeeForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      country: ['', Validators.required],
      salary: ['', Validators.required],
    });

  }

  ngOnInit(): void {
    const { id, ...employeeWithoutId } = this.employee;
    this.employeeForm.setValue(employeeWithoutId);
  }


}
