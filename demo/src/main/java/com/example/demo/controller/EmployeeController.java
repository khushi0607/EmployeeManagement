package com.example.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.repository.EmployeeRepository;
import com.example.demo.exception.ResourceNotFound;
import com.example.demo.model.Employee;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin("http://localhost:4200/")
public class EmployeeController {

	@Autowired
	public EmployeeRepository employeeRepository;
	
	//get All Employees Details
	@GetMapping("/employee")
	public List<Employee> getAllEmployees(){
		return employeeRepository.findAll();
	}
	
	//Add a employee
	//@RequestBody -> converts java object given from client(request body)to domain object(
	@PostMapping("/employee")
	public Employee createEmployee(@RequestBody Employee emp){
		return employeeRepository.save(emp);
	}
	
	//get employee by id rest 
	@GetMapping("/employee/{id}")
	public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id)
	{
		Employee employee= employeeRepository.findById(id)
				.orElseThrow(()-> new ResourceNotFound("Employee not Found = "+ id));
		return ResponseEntity.ok(employee);
	}
	
	//update employee rest 
	
	@PutMapping("/employee/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee emp)
	{
		Employee employee= employeeRepository.findById(id)
				.orElseThrow(()-> new ResourceNotFound("Employee not Found = "+ id));
		
		employee.setFirstName(emp.getFirstName());
		employee.setLastName(emp.getLastName());
		employee.setEmail(emp.getEmail());
		
		Employee updatedEmployee = employeeRepository.save(employee);
		
		return ResponseEntity.ok(updatedEmployee);
	}
	
	@DeleteMapping("/employee/{id}")
	public ResponseEntity<Map<String,Boolean>> deleteEmployee(@PathVariable Long id)
	{
		Employee employee= employeeRepository.findById(id)
				.orElseThrow(()-> new ResourceNotFound("Employee not Found = "+ id));
		employeeRepository.delete(employee);
		Map<String,Boolean>response=new HashMap<>();
		response.put("Deleted ", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}

