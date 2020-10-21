import React, { useState} from 'react';
import { Col, Row, Button, Form, Label, Input,Alert } from 'reactstrap';
import {useHistory} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import routes from "../routes"
import NavbarHeader from "./Navbar"

const SignupPage = () => {
    const countryList = require('country-list');
    const countries=countryList.getNames();
    const history=useHistory();
    const [name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[country,setCountry]=useState('');
    const[city,setCity]=useState('');
    const[state,setState]=useState('');
    const[address1,setAddress1]=useState('');
    const[address2,setAddress2]=useState('');
    const [gender,setGender]=useState('');
    const[maritalstatus,setMarital]=useState('');
    const[food,setFood]=useState('')
    const[color,setColor]=useState('')
    const [visible, setVisible] = useState(false);
   
    
        
        
      
        

    const handleNameChange=(e)=>{
        setName(e.target.value)
    }

    const handleEmailChange=(e)=>{
        setEmail(e.target.value)
    }

    const handleCountryChange=(e)=>{
        setCountry(e.target.value);

    }

   const handleCityChange=(e)=>{
       setCity(e.target.value)
   }

   const handleStateChange=(e)=>{
    setState(e.target.value)
}

const handleAddress1Change=(e)=>{
    setAddress1(e.target.value)
}
const handleAddress2Change=(e)=>{
    setAddress2(e.target.value)
}

const handleGenderChange=(e)=>{
    setGender(e.target.value)
}

const handleMaritalChange=(e)=>{
    setMarital(e.target.value)
}

const handleFoodChange=(e)=>{
    setFood(e.target.value)
}
const handleColorChange=(e)=>{
    setColor(e.target.value)
}

const  PostData= async()=>{
    var bodydata={
        name,
        email,
        country,
        city,
        state,
        address1,
        address2,
        gender,
        maritalstatus,
        food,
        color

    }
    var req=await fetch("http://localhost:5000/add-details",{
        method:"POST",
        body:JSON.stringify(bodydata),
        headers:{
            "Content-Type": "application/json"
        }
    })
    var data= await req.json();
    
    if(data.message=="Data Inserted to the db")
    {   
        setVisible(true);
      history.push(routes.dashboard)
    }
    else{
        alert(data.message)
    }
}

  return (
    <>
    <NavbarHeader />
    <h1 className="text-center">Signup Page</h1>
        <Form className="container mt-5">
            <Row form className="mb-3">
                <Col xl={6} className="text-center">
                    <Label>Name:</Label>
                    </Col>
                    <Col xl={3}> 
                    <Input type="text" value={name} onChange={handleNameChange}></Input>
                    </Col>          
                </Row>
                <Row form className="mb-3">
                <Col xl={6}  className="text-center">
                    <Label>Email:</Label>
                    </Col>
                    <Col xl={3}> 
                    <Input type="email" value={email} onChange={handleEmailChange}></Input>
                    </Col>          
                </Row>
                <Row form className="mb-3">
                <Col xl={6} className="text-center">
                    <Label>Country:</Label>
                    </Col>
                    <Col xl={3}> 
                     <Input type="select" onChange={handleCountryChange}>
                     <option value="">Select a Country</option>
                     {countries.map((country,index)=>{
                         return(
                             <option key={index}>{country}</option>
                         )
                     })}
                     {/* <option value="India">India</option>
                     <option value="USA">USA</option>
                     <option value="UK">UK</option>
                     <option value="Australia">Australia</option>
                     <option value="South Africa">South Africa</option>
                     <option value="Srilanka">Sri Lanka</option>
                     <option value="Pakistan">Pakistan</option> */}
                    </Input> 
                    </Col>          
                </Row>

                <Row form className="mb-3">
                <Col xl={6} className="text-center">
                    <Label>City:</Label>
                    </Col>
                    <Col xl={3}> 
                    <Input type="text" value={city} onChange={handleCityChange}>
                    </Input>
                    </Col>          
                </Row>
                <Row form className="mb-3">
                <Col xl={6} className="text-center">
                    <Label>State:</Label>
                    </Col>
                    <Col xl={3}> 
                    <Input type="text" value={state} onChange={handleStateChange}></Input>
                    </Col>          
                </Row>
                <Row form className="mb-3">
                <Col xl={6} className="text-center">
                    <Label>Address Line1:</Label>
                    </Col>
                    <Col xl={3}> 
                    <Input type="text" value={address1} onChange={handleAddress1Change}></Input>
                    </Col>          
                </Row>
                <Row form className="mb-3">
                <Col xl={6} className="text-center">
                    <Label>Address Line 2:</Label>
                    </Col>
                    <Col xl={3}> 
                    <Input type="text" value={address2} onChange={handleAddress2Change}></Input>
                    </Col>          
                </Row>
                <Row form className="mb-3">
                <Col xl={6} className="text-center">
                    <Label>Gender</Label>
                    </Col>
                    <Col xl={3}> 
                    <Label>Male</Label>
                    <Input type="radio" value="male" name="gender"className="ml-4" onChange={handleGenderChange} ></Input>
                    <Label className="ml-5">Female</Label>
                    <Input type="radio" value="female" name="gender" className="ml-4"  onChange={handleGenderChange} ></Input>
                    <Label className="ml-5">Other</Label>
                    <Input type="radio" value="other" name="gender" className="ml-4"  onChange={handleGenderChange} ></Input>
                    </Col>        
                </Row>
                <Row form className="mb-3">
                <Col xl={6} className="text-center">
                    <Label>Marital Status:</Label>
                    </Col>
                    <Col xl={3}> 
                    <Input type="select" onChange={handleMaritalChange}>
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
                    <Input type="text" value={food} onChange={handleFoodChange}></Input>
                    </Col>          
                </Row>
                <Row form className="mb-3">
                <Col xl={6} className="text-center">
                    <Label>Favorite Color:</Label>
                    </Col>
                    <Col xl={3}> 
                    <Input type="text" value={color} onChange={handleColorChange}></Input>
                    </Col>          
                </Row>
                <Row className="justify-content-center">
                <Button color="success"  onClick={PostData} >Submit</Button>
                </Row>
               </Form>
                <Alert color="info" isOpen={visible}>
                I am an alert and I can be dismissed!
                </Alert>
    </>
  );

}

export default SignupPage;