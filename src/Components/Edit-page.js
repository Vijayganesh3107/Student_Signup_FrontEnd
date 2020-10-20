import React, { Fragment,useState,useEffect } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input,Select,Options,Alert } from 'reactstrap';
import {useHistory,Link} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import routes from "../routes"
import id from "./Signuppage"
import NavbarHeader from "./Navbar"

const EditPage=()=>{
    const countryList = require('country-list');
    const countries=countryList.getNames();
    const history=useHistory();
    
    const[databyid,setDatabyid]=useState([]);
    const [name,setName]=useState(databyid.name);
    const[email,setEmail]=useState(databyid.email);
    const[country,setCountry]=useState('');
    const[city,setCity]=useState('');
    const[state,setState]=useState('');
    const[address1,setAddress1]=useState('');
    const[address2,setAddress2]=useState('');
    const [gender,setGender]=useState('');
    const[maritalstatus,setMarital]=useState('');
    const[food,setFood]=useState('')
    const[color,setColor]=useState('')
   
    
    let id=localStorage.getItem("id");
    

    useEffect(()=>{
         fetch("https://student-signup-app-react.herokuapp.com/get-details/"+id).then(res=>res.json()).then(data=>{
            setDatabyid(data);
         })
         
        
    },[])




   


    // const handleNameChange=(e)=>{
    //     setName(e.target.value)
    // }

    // const handleEmailChange=(e)=>{
    //     setEmail(e.target.value)
    // }

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




const EditData=async()=>{
    let bodydata={
        name:databyid.name,
        email:databyid.email,
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
     let res=await fetch("https://student-signup-app-react.herokuapp.com/edit-details/"+databyid.email,{
         method:"PUT",
         body:JSON.stringify(bodydata),
         headers:{
            "Content-Type": "application/json"
        }
     })
     let data=await res.json();
     if(data.message=="Data successfully updated"){
         history.push(routes.dashboard)
     }
}



    return (
        <>
        <NavbarHeader />
        <h1 className="text-center">Edit Page</h1>
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
                        <Input type="select" onChange={handleCountryChange}>
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
                    <Button color="success"  onClick={EditData} >Edit</Button>
                    <Link className="ml-5" to={routes.dashboard}>Go to Dashboard</Link>
                    </Row>
                   </Form>
        </>
      );
}

export default EditPage