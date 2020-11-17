import React, {useState,useEffect } from 'react';
import { Button} from 'reactstrap';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

import {useHistory} from "react-router-dom"
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
        <NavbarHeader></NavbarHeader>
        <h1 className="text-center">Dashboard</h1>
        <Table>
        <Thead>
          <Tr>
              <Th>Id</Th>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Country</Th>
            <Th>State</Th>
            <Th>City</Th>
            <Th>Address Line 1</Th>
            <Th>Address Line 2</Th>
            <Th>Gender</Th>
            <Th>Marital Status</Th>
            <Th>Favorite Food</Th>
            <Th>Favorite Color</Th>
            <Th>Edit</Th>
            <Th>Delete</Th>
          </Tr>
        </Thead>
        <Tbody>
          {datas.map((item,index)=>{
              return(
                  <Tr key={index}>
                      <Td>{index+1}</Td>
                      <Td>{item.name}</Td>
                      <Td>{item.email}</Td>
                      <Td>{item.country}</Td>
                      <Td>{item.state}</Td>
                      <Td>{item.city}</Td>
                      <Td>{item.address1}</Td>
                      <Td>{item.address2}</Td>
                      <Td>{item.gender}</Td>
                      <Td>{item.maritalstatus}</Td>
                      <Td>{item.food}</Td>
                      <Td>{item.color}</Td>
                      <Td>
                          <Button color="primary"   onClick={handleEditClick}  id={item.email}>Edit</Button>
                      </Td>
                      <Td>
                          <Button color="danger" onClick={handleDeleteClick} id={item.email}>Delete</Button>
                      </Td>
                  </Tr>
              )
          })}
        </Tbody>
      </Table>
      </>
   
    )
}

export default Dashboard;