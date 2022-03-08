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
       console.log(e.target.value)
    }
    return (
        <>
           <Form>
               <label>First Name:</label>
               <input
               name='fname'
               type='text'

               onChange={(e)=>handleInput(e)}
               >
                   
               </input>
               <br/>
               <label>Last Name:</label>
               <input
               name='lname'
               type='text'

               onChange={(e)=>handleInput(e)}
               />
                      
                      <br/>
               <label>Email:</label>
               <input
               name='email'
               type='email'

               onChange={(e)=>handleInput(e)}
               />
                      <br/>
            
               <label>Password:</label>
               <input
               name='password'
               type='password'

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