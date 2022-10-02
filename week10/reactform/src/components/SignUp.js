import React, {useState} from 'react'
import Login from './Login'

function SignUp() {

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
        if(text.length<4){
            setUserErr(true)
        }
        else{
            setUserErr(false)
        } 
        setUser(text)

        // console.log()
    }

    function emailHandler(e){
        let email = e.target.value;
        if(!(email.includes('@') && email.includes('.com') || email.includes('.in') )){
            setCharErr(true)
        }
        else{
            setCharErr(false)
        }
        
        setChar(email)
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


    function signUpHandler(event){

            if(!charErr && !numErr){
                // alert('Succesfully logged in')
                // window.loca
                return(
                    <div className='success'>Successfully Signed up</div>
                )

            }
            else{
                alert("Invalid data")
                // <h1>wronggg </h1>
            }

            event.preventDefault()
        }
  return (
    <div className='hello'>
        
        <form onSubmit={signUpHandler} >
        <h1>Sign up</h1>
            <div className='details' > 
            <label>Enter username</label><br/>
            <input type='text' onChange={userHandler} placeholder='John Doe' /><br/>
            {userErr? <span>Username is short</span>:null}<br/>

            <label>Enter Email ID</label><br/>
            <input type='text' onChange={emailHandler} /><br/>
            {charErr? <span>Email is Invalid (add '@' and '.in' or '.com')</span>:null }<br/>
            
            <label>Enter password</label><br/>
            <input type='password' onChange={passwordHandler} /><br/>
            {passwordErr?<span>Password length must be greater than 4</span>: null}<br/>
            {numErr?<span>Include atleast one number</span>: null}<br/>

            <button type='submit' className='submit'>Sign up</button>
            </div>
        </form>
        <h4>Already have an account?</h4>
            <button onClick={<Login/>}  className='submitRender'>Log in</button>
    </div>
  )
}

export default SignUp