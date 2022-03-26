import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  employee : Employee = {
    name:'',
    email:'',
    jobTitle:'',
    phone:'',
    imageUrl:''
  };
  submitted = false;   
  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
    this.getEmployeeById(); 
  }

   
  getEmployeeById(){
    this.employeeService.getEmployeeById().subscribe(data => {
      this.employee = data;
    });
  } 
 
  updateEmployee(id?:number){
    
    console.log(this.employee);
    this.employeeService.updateEmployee(this.employee).subscribe();
    this.router.navigate(['/employees']);}
}
