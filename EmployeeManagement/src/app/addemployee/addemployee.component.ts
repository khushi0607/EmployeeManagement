import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employeedetails } from '../employeedetails';
import { EmployeedetailsService } from '../employeedetails.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  constructor(private employeeService:EmployeedetailsService,
    private router:Router) { }

  ngOnInit(): void {
  }
  employees:Employeedetails= new Employeedetails();
  
  addEmployeeDetails(){
    console.log("worked");
    console.log(this.employees);
    this.saveEmployee();
  }

  goToEmployeeList()
  {
    return this.router.navigate(['/employee']);

  }

  saveEmployee ()
  {
    this.employeeService.createEmployee(this.employees).subscribe( data=>{
      console.log(data);
    },
    error=> console.log(error));
    this.goToEmployeeList();
  }
}
