import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Employee from './Employee';
function Edit() {

const [id,setId]=useState('');
const [empname,setEmpname]=useState('');
const [Age,setAge]=useState('');
const [designation,setDesignation]=useState('');
const [salary,setSalary]=useState(0);

useEffect(()=>{
  setId(localStorage.getItem('Id'))
  setEmpname(localStorage.getItem('empname'))
  setAge(localStorage.getItem('age'))
  setDesignation(localStorage.getItem('designation'))
  setSalary(localStorage.getItem('salary'))

},[])
console.log(id);
console.log(empname);
console.log(designation);
console.log(Age);
console.log(salary);


 var index = Employee.map(item=>item.id).indexOf(id);
 console.log(index);

  let history=useNavigate()
  const handleUpdate=(e)=>{
  e.preventDefault();
  console.log(e);
  let emp=Employee[index]
  console.log(emp);
  emp.id=id;
  emp.empname=empname;
  emp.age=Age;
  emp.designation=designation;
  emp.salary=salary;
  console.log(emp);

  history('/')

 }



  return (
    <>
      <h1 className='text-primary text-center m-4'>update employee Management System</h1>
      <p className='p-3'>An employee management system is a software, that helps your employees to give their best efforts every day to achieve the goals of your organization. It guides and manages employees efforts in the right direction. It also securely stores and manages personal and other work-related details for your employees. That makes it easier to store and access the data when there is a need.

        In the employee management system, you can manage admin activities in an easier and quicker way. Employees are an important part of your organization it is their work that ultimately contributes to the bottom line of the company. It is an important part of HR management.</p>

      <Row>
        <Col md={5}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCGfa9cIG5USunpHOXJBzKEkfkQ2wAmmdJPS7C6LSfr_oJg_vHYf2NeJHJJ02OKC3wAWM&usqp=CAU" />
        </Col>

        <Col md={5}>
        <Form className='border border-3 p-5'>
        <Form.Group className="mb-3" >
        <Form.Label>ID</Form.Label>
        <Form.Control type="text" placeholder="Enter your ID"
        value={id}
        onChange={(e)=>setId(e.target.value)}
        required
        />
        </Form.Group>

        <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your Name"
        value={empname}
        onChange={(e)=>setEmpname(e.target.value)}
        required


        />
        </Form.Group>

        <Form.Group className="mb-3" >
        <Form.Label>Age</Form.Label>
        <Form.Control type="text" placeholder="Enter your Age"
        value={Age}
        onChange={(e)=>setAge(e.target.value)}
        required

        />
        </Form.Group>

        <Form.Group className="mb-3" >
        <Form.Label>Designation</Form.Label>
        <Form.Control type="text" placeholder="Enter your Designation"
        value={designation}
        onChange={(e)=>setDesignation(e.target.value)}
        required


        />
        </Form.Group>

        <Form.Group className="mb-3" >
        <Form.Label>Salary</Form.Label>
        <Form.Control type="text" placeholder="Enter your Salary"
        value={salary}
        onChange={(e)=>setSalary(e.target.value)}
        required


        />
        </Form.Group>
      
      
      
      <Button variant="success" type="submit" onClick={(e)=>handleUpdate(e)}>
        Update
      </Button>
    </Form>
        </Col>
      </Row>

    </>

  )
}

export default Edit