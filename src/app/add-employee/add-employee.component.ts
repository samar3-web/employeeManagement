import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
 
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
  }

  saveEmployee():void{
    const data = {
      name: this.employee.name,
      email: this.employee.email,
      jobTitle: this.employee.jobTitle,
      phone: this.employee.phone,
      imageUrl: this.employee.imageUrl
    };
    this.employeeService.addEmployee(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
        this.router.navigate(['/employees'])

      },
      error: (e) => console.error(e)
    });
  }
  newEmployee():void{
    this.submitted = false;
    this.employee = {
      name: '',
      email:'',
      jobTitle:'',
      phone:'',
      imageUrl:''

    };
  }
}
