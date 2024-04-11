import { useState } from 'react';
import { useBankContext } from "./BankContext";
import Card from "./BankContext";

import React from 'react';


const Register = () =>{
    const {bank} = useBankContext(); //pull bank and adduser from global state
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('');
    
  
    

    //adding things from the MIT videos
    const [show, setShow] = useState(true);
    //const [status, setStatus] = useState('');

    function Validate(field, label){
        if (!field){
            setStatus('Error: ' + label);
            setTimeout(() => setStatus(''), 3000);
            return false;
        }
        return true;
    }

    function ValidatePass(field){
      if (!(field.length >=8)){
        setStatus('Error, password must be 8 or more characters');
        setTimeout(()=> setStatus(''), 3000)
        return false;
      }
      return true;
    }

    const HandleCreate = ()=>{
       if (!Validate(username, "username"))
            return;
        
        if (!Validate(email, 'email'))
            return;
        
        if (!ValidatePass(password, "password"))
            return;
        bank.users.push({username, email, password, balance:100});
        alert(`Account successfully created!`);
        setShow(false);
            
 }

    function ClearForm(){
        setUsername('');
        setEmail('');
        setPassword('');
        setShow(true);
    }

   



    

    return(
        <Card 
        bgcolor = "ingo"
        header = "Create Account"
        status = {status}
        body={show ? (
          <>
          Username <br/>
          <input type="input" className='form-control' id='username' placeholder='enter username' value = {username}
          onChange={e=> setUsername(e.currentTarget.value)} /><br/>
          Email <br />
          <input type='input' className='form-control' id="email" placeholder='enter email' value={email} 
          onChange={e=>setEmail(e.currentTarget.value)} /><br />
          Password <br />
          <input type = 'input' className='form-control' id='password' placeholder='enter password' value ={password}
          onChange={e=>setPassword(e.currentTarget.value)} /><br/>
          <button type="submit" className='btn btn-light' onClick={HandleCreate} disabled ={!username}>Create Account</button>
          </>
        ):(
          <>
          <h5>You created an account!</h5>
          <button type="submit" className='btn btn-light' onClick={ClearForm}>Add another account?</button>
          </>
        )} />
       

);}

export default Register;