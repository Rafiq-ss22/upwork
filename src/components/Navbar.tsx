import React, { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import BasicSelect from './MenuSelect'
import TemporaryDrawer from './Drawer'
import Register from './Register'
import Login from './Login'

import { useSelector, useDispatch } from "react-redux";
import { authAction } from "../store/authReducer";


const Navbar = (props:any) => {
     const dispatch = useDispatch();
    const authData =useSelector((state:any) => {
      console.log(props)
      return state.auth.auth})
  return (
    <div className='flex justify-between border-b-2 border-gray-300 '>
        <div className='flex  gap-5 '>
          <button onClick={()=>props.sideNav(!props.status)} className=' place-self-center w-6 h-6'>&#9776;</button>
        <Image  src="/Upwork-Logo.png"
                alt="Logo"
                width={100}
                height={42}
                className="p-5"
                ></Image>
             <BasicSelect name={"Find Talent"}/>
    
        <BasicSelect name={"Find Work"}/>
        <BasicSelect name={"Why Upwork"}/>
        <BasicSelect name={"Enterprise"}/>
        </div>
        <div className='flex gap-5'>
          {
            authData?(<>
          
            <button className=' mt-5 mb-5 rounded-l-full rounded-r-full mr-5 w-24'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
</svg>
</button></>):(  <> <Login>Log In</Login>
            <Register> Sign Up</Register></>)
          }
       
        </div>
        

      
    </div>
  )
}

export default Navbar
