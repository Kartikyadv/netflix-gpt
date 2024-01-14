import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignInFrom,setIsSignInFrom] = useState(true);
    const toggleSignInForm = () => {
        setIsSignInFrom(!isSignInFrom);
    }
  return (
    <>
    <Header/>
    <img className='absolute' src="https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/d3c4e455-f0bf-4003-b7cd-511dda6da82a/IN-en-20240108-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
    alt='Logo' />
    <form className='rounded-lg bg-opacity-80 w-4/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white'>
        <h1 className='font-bold text-3xl py-4' >{isSignInFrom? "Sign In": "Sign Up"}</h1>
        {isSignInFrom?(null): (<input className='p-2 my-4 w-full bg-gray-700' type="text" placeholder='Full Name' name="" id="" />)}
        <input className='p-2 my-4 w-full bg-gray-700' type="text" placeholder='Email or phone number' name="" id="" />
        <input className='p-2 my-4 w-full bg-gray-700' type="password" placeholder='Password' name="" id="" />
        <button className='p-4 my-6 bg-red-700 w-full' >{isSignInFrom? "Sign In": "Sign Up"}</button>
        <p className='py-2 cursor-pointer' onClick={toggleSignInForm} >{isSignInFrom? "New to Neftlix? Sign Up now": "Already a User? Sign In now"}</p>
    </form>
    </>
  )
}

export default Login