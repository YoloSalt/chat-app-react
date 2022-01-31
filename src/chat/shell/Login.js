import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/core";
import React, { Component }  from 'react';
import './Login.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ChatShell from "./Chat-Shell";


function App() {
  const navigation = useNavigation();
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const SelectContact = () =>{
    navigation.navigate('ChatShell')        //Chuyển trang khi bấm user
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
      navigation.navigate('ChatShell')  ;
      
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };
  <Route>
    <Route path="/" exact>
          <ChatShell />
          </Route>
  </Route>

  return (
    <div className="container"
     /* style={{display:"flex",flexDirection:"column" , justifyContent:"center"
              ,alignItems:"center",height:"100vh",maxWidth: "500px",width:"100%",
              margin:"auto",
              
              
    }}    */
    
    >
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
       
      ) : (
        <p></p>
      )}

      <form onSubmit={handleSubmit} 
     /* style={{
 width: "100%",
 height:"30%",
 border: "1px solid #dfdfdf",
 padding: "20px",
 borderRadius: "5px",
 background: "#fff",


      }}  */
      >
        <h1>Login</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
           
          </div>
          <p>{formErrors.username}</p>
          <div className="field" 
          style={{   
            position: "relative",
            left: "0px",
            top:"10px",
           
           
            
            }}>





            <label   style={{paddingRight:"33px" , fontSize:"15px"}}>Phone</label>
            <input type="tel" style={{ height:"20px", width:"250px",
            
            borderRadius: "5px",height:"20px", 
            width: "100%",
            padding: "12px 20px",
            margin: "8px 0",
            display: "inline-block",
            border: "1px solid #ccc",
            boxSizing: "border-box",
          
          }}
             id="phone" name="phone"
              placeholder="123-45-678" 
              onChange={handleChange}
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
          </div>
         
          <div className="field"
           style={{  position: "relative",
           left: "0px",
            top:"10px",
     }}
     >

        
            <label  style={{paddingRight:"37px",fontSize:"15px"}}>Password</label>
            <input
            style={{ 
              
              
              borderRadius: "5px",height:"20px", width:"150px",
              width: "100%",
              padding: "12px 20px",
              margin: "8px 0",
              display: "inline-block",
              border: "1px solid #ccc",
              boxSizing: "border-box",
            
            
            }}
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.password}</p>
          <button className="fluid ui button blue">Login</button>
        </div>
      </form>
    </div>
  );
}

export default App;
