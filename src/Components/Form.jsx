import React from 'react'
import { useState } from 'react'

const Form = () => {
 
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [loginMode, setLoginMode] = useState(true)
    
 /* const handleClick =(e) => {
        setData('Register')
        console.log ('data')

      };

      const handleSignUpClick =() => {
        
        alert('signup account')

      };
      const handleLoginClick =() => {
       
        console.log ('login into account')

      };
      const handleFormSubmit =() => {
       
        console.log ('SUBMIT FORM')

      };*/

      const greeting= loginMode ? "Welcome back" : "we are glad you are here" ;
  return (
    <div className='flex  h-screen flex-row items-center justify-center bg-gradient-to-br from-blue-300 to-violet-400'>
<div className='w-80 p-8 bg-white rounded border border-solid sm:w-96'>
    <div className='mb-6 flex flex-col gap-y-2 justify-center items-center'>
        <label className='text-xl'>Register</label>

    <button className='h-10 w-1/2 rounded border-2 border-solid border-green-400 hover:bg-green-200' onChange={() =>setLoginMode(!loginMode)}> Login </button>

    <button className='h-10 w-1/2 rounded border-2 border-solid border-blue-500 hover:bg-blue-200' > sign up</button>
    </div>
    
    <h1 className='mb-6 text-center text-3xl font-bold'>{greeting}</h1>
   
    <form onSubmit={this.handleFormSubmit}>
<label htmlFor='email'> Email address</label>
<input 
id='email' 
type='text'  
className='mb-4 h-8 w-full rounded border border-solid'
onChange={(event) =>setEmail(event.target.value)}
value={email}
/>

<label htmlFor='password'> Password</label>
<input 
     id='password' 
     type='password'  
     className='mb-4 h-8 w-full rounded border border-solid'
     onChange={(event) =>setPassword(event.target.value)}
     value={password}
     />

<label htmlFor='password'>confirm Password</label>
<input 
    id='password' 
    type='password'  
    className='mb-4 h-8 w-full rounded border border-solid'
    onChange={(event) =>setConfirmPassword(event.target.value)}
    value={confirmPassword}
/>

 </form>

    <button className='h-10 w-full rounded border-2 border-solid border-red-500 hover:bg-red-200' onClick={handleClick}> Login into Account</button>
</div>
    </div>
  )
}

export default Form