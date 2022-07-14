import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { EditemployeeComponent } from './editemployee/editemployee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

const routes: Routes = [
  {
    path:"employee",
    component:EmployeeListComponent
  },
  {
    path:'',redirectTo:'employee',pathMatch:'full'
  },
  {
    path:"addEmployee",
    component:AddemployeeComponent
  },
  {
    path:"updateEmployee/:id",
    component:EditemployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
