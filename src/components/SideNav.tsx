import React, { useState } from 'react'
import SideNavBtn from './SideNavBtn'
import { motion } from 'framer-motion'
import { useSelector, useDispatch } from "react-redux";
import { authAction } from "../store/authReducer";
import Image from 'next/image'


const SideNav = () => {

  const [showProduct, setProduct] = useState(false)
  const [showUser, setUser] = useState(false)
  const dispatch = useDispatch();

  const authData = useSelector((state: any) => {
    return state.auth.auth
  })

  return (
    <div className='flex items-center flex-col bg-green-600 border-r-2 w-[300px] border-gray-300 h-full'>
      <div  className=" place-self-center m-3 w-56 flex justify-center h-36 bg-white">

      <Image  src="/Upwork-Logo.png"
                alt="Logo"
                width={100}
                height={10}
                className="max-w-full h-auto "
               
                ></Image>
      </div>
      

      <motion.button whileTap={{ scale: 0.9 }} className='flex m-2  hover:bg-neutral-400 justify-between  bg-green-100 flex-row gap-2 h-28 w-64'>
        <span className=' font-mono ml-10 place-self-center'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M19.006 3.705a.75.75 0 00-.512-1.41L6 6.838V3a.75.75 0 00-.75-.75h-1.5A.75.75 0 003 3v4.93l-1.006.365a.75.75 0 00.512 1.41l16.5-6z" />
            <path fill-rule="evenodd" d="M3.019 11.115L18 5.667V9.09l4.006 1.456a.75.75 0 11-.512 1.41l-.494-.18v8.475h.75a.75.75 0 010 1.5H2.25a.75.75 0 010-1.5H3v-9.129l.019-.006zM18 20.25v-9.565l1.5.545v9.02H18zm-9-6a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h3a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75H9z" clip-rule="evenodd" />
          </svg>

        </span>
        <span className=' font-mono mr-10 place-self-center'> {"Home"} </span>

      </motion.button>
      <motion.button whileTap={{ scale: 0.9 }} className='flex m-2  hover:bg-neutral-400 justify-between  bg-green-100 flex-row gap-2 h-28 w-64'>
        <span className=' font-mono ml-10 place-self-center'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M18.75 12.75h1.5a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5zM12 6a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 6zM12 18a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 18zM3.75 6.75h1.5a.75.75 0 100-1.5h-1.5a.75.75 0 000 1.5zM5.25 18.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5zM3 12a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 013 12zM9 3.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zM12.75 12a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zM9 15.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
        </svg>
        </span>
        <span className=' font-mono mr-10 place-self-center'> {"Profile"} </span>

      </motion.button>


      <motion.button whileTap={{ scale: 0.9 }} className='flex m-2  hover:bg-neutral-400 justify-between  bg-green-100 flex-row gap-2 h-28 w-64'>
        <span className=' font-mono ml-10 place-self-center'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fill-rule="evenodd" d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z" clip-rule="evenodd" />
          </svg>

        </span>
        <span className=' font-mono mr-10 place-self-center'> {"Contact"} </span>

      </motion.button>

      <motion.button whileTap={{ scale: 0.9 }} className='flex m-2  hover:bg-neutral-400 justify-between  bg-green-100 flex-row gap-2 h-28 w-64'>
        <span className=' font-mono ml-10 place-self-center'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z" />
            <path fill-rule="evenodd" d="M3.087 9l.54 9.176A3 3 0 006.62 21h10.757a3 3 0 002.995-2.824L20.913 9H3.087zm6.163 3.75A.75.75 0 0110 12h4a.75.75 0 010 1.5h-4a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
          </svg>

        </span>
        <span className=' font-mono mr-10 place-self-center'> {"About"} </span>

      </motion.button>

      <motion.button whileTap={{ scale: 0.9 }} className='flex m-2  hover:bg-neutral-400 justify-between  bg-green-100 flex-row gap-2 h-28 w-64'>
        <span className=' font-mono ml-10 place-self-center'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fill-rule="evenodd" d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" />
            <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
          </svg>

        </span>
        <span className=' font-mono mr-10 place-self-center'> {"Resources"} </span>

      </motion.button>


      <SideNavBtn name="User" setter={setUser} value={showUser} />
      <SideNavBtn name="Product" setter={setProduct} value={showProduct} />

      {authData ? <motion.button whileTap={{ scale: 0.9 }} className='flex m-2  hover:bg-neutral-400 justify-between  bg-green-100 flex-row gap-2 h-28 w-64' onClick={() => dispatch(authAction.logout())} >
        <span className=' font-mono ml-10 place-self-center'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fill-rule="evenodd" d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm5.03 4.72a.75.75 0 010 1.06l-1.72 1.72h10.94a.75.75 0 010 1.5H10.81l1.72 1.72a.75.75 0 11-1.06 1.06l-3-3a.75.75 0 010-1.06l3-3a.75.75 0 011.06 0z" clip-rule="evenodd" />
        </svg>
        </span>
        <span className=' font-mono mr-10 place-self-center'> {"Logout"} </span></motion.button> : null}

      <div className=' basis-full mt-44 bg-green-100 '>
        <span className='mt-5 text-emerald-900 text-sm font-mono '>
          Table of Contents
          python-docx
          What it can do
          User Guide
          API Documentation
          Contributor Guide
          Next topic
          Installing
          Useful Links
          python-docx @ GitHub
          python-docx @ PyPI
          Issue Tracker
        </span>


      </div>


    </div>
  )
}

export default SideNav
