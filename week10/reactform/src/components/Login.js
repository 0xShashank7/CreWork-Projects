import React, { useState } from 'react'
import './Login.css'
import SignUp from './SignUp'

function Login() {

    const [user,setUser]=useState('')
    const [userErr,setUserErr]=useState(false)
    const [password,setPassword]=useState('')
    const [passwordErr,setPasswordErr]=useState(false)

    const [char,setChar]=useState('')
    const [charErr,setCharErr]=useState(false)

    const [num,setNum]=useState('')
    const [numErr,setNumErr]=useState(false)



    function userHandler(event){
        let text = event.target.value;
        // if(text.length<4){
        //     setUserErr(true)
        // }
        // else{
        //     setUserErr(false)
        // } 
        // setUser(text)

        // console.log()

        if(!(text.includes('@') && text.includes('.com') || text.includes('.in') )){
            setCharErr(true)
        }
        else{
            setCharErr(false)
        }
        
        setChar(text)
        
        
        // console.log(event.target.value)
    }

    function passwordHandler(event){
        let pass = event.target.value;
        if(pass.length<4){
            setPasswordErr(true)
        }
        else{
            setPasswordErr(false)
        }
        setPassword(pass)

        if(!pass.match(/[0-9]/)){
            setNumErr(true)
        }
        else{
            setNumErr(false)
        }
        setNum(pass)
        
        // console.log(event.target.value)
    }

    function loginHandler(event){

        if(!charErr && !numErr){
            // alert('Succesfully logged in')
            // <h1>Succesfully logged in</h1>
            window.location.href= 'https://c.tenor.com/GCm3-of-828AAAAC/hello-world-rajinikanth.gif'
        }
        else{
            alert("Invalid data")
            // <h1>wronggg</h1>
        }

        event.preventDefault()
    }

  return (
    <div className='hello'>
        
        <form onSubmit={loginHandler} >
        <h1>Login</h1>
            <div className='details' > 
            <label>Enter Email Address</label><br/>
            <input type='text' onChange={userHandler} placeholder='john@doe.com' /><br/>
            {charErr? <span>Email is Invalid (add '@' and '.in' or '.com')</span>:null }<br/>
            
            <label>Enter password</label><br/>
            <input type='password' onChange={passwordHandler} /><br/>
            {passwordErr?<span>Password length must be greater than 4</span>: null}<br/>
            {numErr?<span>Include atleast one number</span>: null}<br/>

            <button type='submit' className='submit' >Login</button>

            
            </div>
        </form>
        <h4>Dont have an account?</h4>
            <button className='submit' onClick={<SignUp/>  } >Sign up</button>
    </div>
  )
}

export default Login