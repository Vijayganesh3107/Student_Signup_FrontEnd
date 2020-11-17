import React, {useState,useEffect } from 'react';
import { Col, Row, Button, Form,Label, Input} from 'reactstrap';
import {useHistory} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import routes from "../routes"
import NavbarHeader from "./Navbar"


const DeletePage=()=>{
    const countryList = require('country-list');
    const countries=countryList.getNames();
    const history=useHistory(); 
    let id=localStorage.getItem("Deleteid");
    const[databyid,setDatabyid]=useState([]);
    

    useEffect(()=>{
         fetch("https://student-signup-app-react.herokuapp.com/get-details/"+id).then(res=>res.json()).then(data=>{
            setDatabyid(data);
         })
         
        
    },[])



const DeleteAction=async()=>{
     let res=await fetch("https://student-signup-app-react.herokuapp.com/delete/"+databyid.email,{
         method:"DELETE",
         headers:{
            "Content-Type": "application/json"
        }
     })
     let data=await res.json();
     if(data.message=="Data Removed"){
         history.push(routes.dashboard)
     }
     else{
         alert(data.message)
     }
}



    return (
        <>
        <NavbarHeader />
        <h1 className="text-center">Deleted Item Info</h1>
            <Form className="container mt-5">
                <Row form className="mb-3">
                    <Col xl={6} className="text-center">
                        <Label>Name:</Label>
                        </Col>
                        <Col xl={3}> 
                        <Input type="text" value={databyid.name} ></Input>
                        </Col>          
                    </Row>
                    <Row form className="mb-3">
                    <Col xl={6}  className="text-center">
                        <Label>Email:</Label>
                        </Col>
                        <Col xl={3}> 
                        <Input type="email" value={databyid.email}></Input>
                        </Col>          
                    </Row>
                    <Row form className="mb-3">
                    <Col xl={6} className="text-center">
                        <Label>Country:</Label>
                        </Col>
                        <Col xl={3}> 
                         <Input type="select" value={databyid.country}>
                     <option value="">Select a Country</option>
                     {countries.map((country,index)=>{
                         return(
                             <option key={index}>{country}</option>
                         )
                     })}
                        </Input> 
                        </Col>          
                    </Row>
    
                    <Row form className="mb-3">
                    <Col xl={6} className="text-center">
                        <Label>City:</Label>
                        </Col>
                        <Col xl={3}> 
                        <Input type="text" value={databyid.city}>
                        </Input>
                        </Col>          
                    </Row>
                    <Row form className="mb-3">
                    <Col xl={6} className="text-center">
                        <Label>State:</Label>
                        </Col>
                        <Col xl={3}> 
                        <Input type="text" value={databyid.state} ></Input>
                        </Col>          
                    </Row>
                    <Row form className="mb-3">
                    <Col xl={6} className="text-center">
                        <Label>Address Line1:</Label>
                        </Col>
                        <Col xl={3}> 
                        <Input type="text" value={databyid.address1} ></Input>
                        </Col>          
                    </Row>
                    <Row form className="mb-3">
                    <Col xl={6} className="text-center">
                        <Label>Address Line 2:</Label>
                        </Col>
                        <Col xl={3}> 
                        <Input type="text" value={databyid.address2} ></Input>
                        </Col>          
                    </Row>
                    <Row form className="mb-3">
                    <Col xl={6} className="text-center">
                        <Label>Gender</Label>
                        </Col>
                        <Col xl={3}> 
                        <Label>Male</Label>
                        <Input type="radio" value="male" name="gender"className="ml-4"  ></Input>
                        <Label className="ml-5">Female</Label>
                        <Input type="radio" value="female" name="gender" className="ml-4"   ></Input>
                        <Label className="ml-5">Other</Label>
                        <Input type="radio" value="other" name="gender" className="ml-4"   ></Input>
                        </Col>        
                    </Row>
                    <Row form className="mb-3">
                    <Col xl={6} className="text-center">
                        <Label>Marital Status:</Label>
                        </Col>
                        <Col xl={3}> 
                        <Input type="select" value={databyid.maritalstatus}>
                            <option value="">Select Marital Status</option>
                            <option value="single">Single</option>
                            <option value="married">Married</option>
                        </Input>
                        </Col>          
                    </Row>
                    <Row form className="mb-3">
                    <Col xl={6} className="text-center">
                        <Label>Favorite Food:</Label>
                        </Col>
                        <Col xl={3}> 
                        <Input type="text" value={databyid.food} ></Input>
                        </Col>          
                    </Row>
                    <Row form className="mb-3">
                    <Col xl={6} className="text-center">
                        <Label>Favorite Color:</Label>
                        </Col>
                        <Col xl={3}> 
                        <Input type="text" value={databyid.color}></Input>
                        </Col>          
                    </Row>
                    <Row className="justify-content-center">
                    <Button color="danger"  onClick={DeleteAction} >Delete</Button>
                    </Row>
                   </Form>
        </>
      );
}

export default DeletePage;