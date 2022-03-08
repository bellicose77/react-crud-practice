import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const FormHandling = () => {
    const [user,setUser]=useState({
        fname:'',
        lname:'',
        email:'',
        password:''
    })
    console.log(user)
    const handleInput=(e)=>{
       let userInputValue=e.target.value;
       setUser(
           {

           
           ...user ,
           [e.target.name]:userInputValue}
           )
    }
    return (
        <>
           <Form>
               <label>First Name:</label>
               <input
               name='fname'
               type='text'
               value={user.name}
               onChange={(e)=>handleInput(e)}
               >
                   
               </input>
               <br/>
               <label>Last Name:</label>
               <input
               name='lname'
               type='text'
               value={user.lname}
               onChange={(e)=>handleInput(e)}
               />
                      
                      <br/>
               <label>Email:</label>
               <input
               name='email'
               type='email'
               value={user.email}
               onChange={(e)=>handleInput(e)}
               />
                      <br/>
            
               <label>Password:</label>
               <input
               name='password'
               type='password'
               value={user.password}
               onChange={(e)=>handleInput(e)}
               >
               </input>
               <br/>
               <Button >Submit</Button>
  
           </Form> 
        </>
    );
};

export default FormHandling;