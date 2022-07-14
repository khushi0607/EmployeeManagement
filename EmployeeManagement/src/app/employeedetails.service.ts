import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { Employeedetails } from './employeedetails';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class EmployeedetailsService {

  private baseUrl='http://localhost:8090/api/v1/employee'
  
  
  constructor( private httpClient:HttpClient) { }

//get all employees from database
  getEmployeeList():Observable<Employeedetails[]>{
    return this.httpClient.get<Employeedetails[]>(`${this.baseUrl}`);
  
  }

//add a new employee to database
  createEmployee(employee:Employeedetails):Observable<any>{
    return this.httpClient.post(`${this.baseUrl}`,employee);
  }

//get the data of employee from database using id
  getEmployeById(id:number):Observable<Employeedetails>{
    return this.httpClient.get<Employeedetails>(`${this.baseUrl}/${id}`);
  }

//add the updated data to the database
  updateEmployee(id:number,employee:Employeedetails):Observable<object>{
    return this.httpClient.put(`${this.baseUrl}/${id}`,employee);
  }

  //delete a employee from DB
  deleteEmployee(id:number)
  {
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}
