import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employeedetails } from '../employeedetails';
import { EmployeedetailsService } from '../employeedetails.service';


@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css']
})
export class EditemployeeComponent implements OnInit {

  id!: number;
  employee:Employeedetails=new Employeedetails();
  constructor(public employeeService:EmployeedetailsService,
    public route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];
    this.employeeService.getEmployeById(this.id).subscribe(data =>
      {
        this.employee = data;
      }, error=>console.log(error)
      );
      console.log(this.id);
    
  }

  onSubmit()
  {
    return this.employeeService.updateEmployee(this.id,this.employee).subscribe(data=>{
      this.goToEmployeeList();
    },
    error=>console.log(error)
    );
  }

  goToEmployeeList()
  {
    return this.router.navigate(['/employee']);

  }
  

}
