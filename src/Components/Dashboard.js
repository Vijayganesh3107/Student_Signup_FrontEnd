import React, { Fragment,useState,useEffect } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input,Select,Options,Alert,Table } from 'reactstrap';
import {useHistory,Link} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import routes from "../routes"
import NavbarHeader from "./Navbar"
import "../Styles/DashboardStyle.css"


const Dashboard=()=>{

     const[datas,setDatas]=useState([]);
     const history=useHistory();


     useEffect(()=>{
         fetch("https://student-signup-app-react.herokuapp.com/get-details")
         .then(res=>res.json())
         .then(data1=>{
             setDatas(data1);
         })
     },[])

     const handleEditClick=(e)=>{
          var id= e.target.id;
          localStorage.setItem("id",id);
         history.push(routes.edit.replace(":emailid",id));      
     }
     const handleDeleteClick=(e)=>{
        var id= e.target.id;
        localStorage.setItem("Deleteid",id);
       history.push(routes.delete.replace(":emailid",id));      
   }

    return(
        <>
        <NavbarHeader className="container-fluid"></NavbarHeader>
        <h1 className="text-center">Dashboard</h1>
        <Table striped className="table  container mt-5 dashboard">
        <thead>
          <tr>
              <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Country</th>
            <th>State</th>
            <th>City</th>
            <th>Address Line 1</th>
            <th>Address Line 2</th>
            <th>Gender</th>
            <th>Marital Status</th>
            <th>Favorite Food</th>
            <th>Favorite Color</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((item,index)=>{
              return(
                  <tr key={index}>
                      <td>{index+1}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.country}</td>
                      <td>{item.state}</td>
                      <td>{item.city}</td>
                      <td>{item.address1}</td>
                      <td>{item.address2}</td>
                      <td>{item.gender}</td>
                      <td>{item.maritalstatus}</td>
                      <td>{item.food}</td>
                      <td>{item.color}</td>
                      <td>
                          <Button color="primary"   onClick={handleEditClick}  id={item.email}>Edit</Button>
                      </td>
                      <td>
                          <Button color="danger" onClick={handleDeleteClick} id={item.email}>Delete</Button>
                      </td>
                  </tr>
              )
          })}
        </tbody>
      </Table>
      </>
   
    )
}

export default Dashboard;