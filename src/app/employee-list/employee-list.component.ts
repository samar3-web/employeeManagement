import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  public employee?: Employee[];
  constructor(private employeeService: EmployeeService,
    private router: Router){}
    ngOnInit(): void {
    this.getEmployees();

  }
  public getEmployees(): void {
    this.employeeService.getEmployees().subscribe(data =>{
      this.employee = data;
    });
  
  
  }
updateEmployeeRecord(id? : number){
  console.log("id = ", id);
  this.employeeService.getId(id);
  this.router.navigate(['update-employee/:id']);
}

deleteEmployeeRecord(id? : number){
  this.employeeService.deleteEmployee(id).subscribe();
  this.router.navigate(['employees']);
  window.location.reload();
}

}

