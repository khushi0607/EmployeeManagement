import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employeedetails } from '../employeedetails';
import { EmployeedetailsService } from '../employeedetails.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employees: Employeedetails[] = [];
  constructor(public employeeService:EmployeedetailsService,
    private router:Router){}
  
  ngOnInit(): void {
    
    this.getEmployees();
    
    console.log(this.employees);
  }

  public getEmployees()
  {
    
    return this.employeeService.getEmployeeList().subscribe((data)=>{
      this.employees=data;
    });
  }

  updateEmployee( id:number)
  {
    return this.router.navigate(['updateEmployee',id])
  }

  deleteEmployee(id:number)
  {
    return this.employeeService.deleteEmployee(id).subscribe(data=>{
      this.getEmployees();
    }, error=>console.log(error)
    );
  }
  
}

