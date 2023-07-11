import {Link} from 'react-router-dom'
import React, { useState,useEffect } from 'react';
import '../css/login.css'
import Logo from '../images/logo.jpg'

function Login(){
 
    const inintialvalues = {username:"",password:""}
    const [formInput,setFormInputs] = useState(inintialvalues)
    const [formerrors,setformerrors] = useState({})
    const [isSubmit,setIsSubmit] = useState(false)
    const [errorscolor,seterrorscolor] = useState("red")

    const handleforminputs = (e) =>{
        const {name,value} = e.target

        setFormInputs({...formInput,[name]:value})
        console.log(formInput)
    }

    const submitForm =(e) =>{
        e.preventDefault()
        setformerrors(validateform(formInput))
        setIsSubmit(true)
        
    }

    useEffect(() =>{
        console.log(formerrors)
        if(Object.keys(formerrors).length === 0 && isSubmit){
            console.log(formInput)
        }
    },[formerrors])

    const validateform = (values) =>{
        const errors = {}

        if(!values.username){
            errors.username = "username is requred"
        }
        if(!values.password){
            errors.password = "password is required"
        }
        else if(values.password.length < 4){
            errors.password = "your password is too short"
        }
        return errors

    }


   

 return(
 <div className='loginbody'>
    <div className='overay'></div>
    <pre style={{backgroundColor:'white'}}>{JSON.stringify(formInput,)}</pre>
   <div className="loginform">
     
    <div className='topic'>
        <h1>ekwendeni college of health sciences</h1>
        <div>
        <img src={Logo}></img>
        <h3>student portal</h3>
        </div>
    </div>
    <div className='form'>
        <form action='/' onSubmit={submitForm}>
        <div className="form-input">
            <label>username</label>
            <input type="text" name="username" value={inintialvalues.username} onChange={handleforminputs}></input>
            <p style={{color:'red'}}>{formerrors.username}</p>
        </div>
       
        <div className="form-input">
            <label>password</label>
            <input type="password" name="password" value={inintialvalues.password} onChange={handleforminputs}></input>
            <p style={{color:'red'}}>{formerrors.password}</p>
        </div>
       
        <div className="form-input submit">
            <input type="submit" value="login" name="login"></input>
        </div>
        <div className='restform'>
            <p>
                <Link to='/resetpassword'>resent password</Link>
            </p>
        </div>
        </form>
        
    </div>
   </div>
   </div>
    )
}
export default Login