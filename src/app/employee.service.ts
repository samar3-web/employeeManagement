import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { environment } from 'src/environments/environment';
@Injectable({providedIn: 'root'})

export class EmployeeService {
  
  private apiServerUrl = environment.apiBaseUrl;
  id? : number;
  constructor(private http: HttpClient){}

  public getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiServerUrl}/employee/all`);
  }

  public addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.apiServerUrl}/employee/add`, employee);
  }

  getId(getId?: number){
    this.id = getId;
  }

  getEmployeeById():Observable<Object>{
    return this.http.get<Object>(`${this.apiServerUrl}/employee/find/${this.id}`);
  }
  public updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.apiServerUrl}/employee/update/${this.id}`, employee);
  }

  public deleteEmployee(id?: number): Observable<Object> {
    return this.http.delete<Object>(`${this.apiServerUrl}/employee/delete/${id}`);
  }
}