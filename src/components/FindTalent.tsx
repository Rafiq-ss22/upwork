import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { menuAction } from '@/store/menuReducer';

const FindTalent = () => {
  const dispatch = useDispatch();

  const show =useSelector((state:any) => {
    return state.menu["Find Talent"]})

  // const [isUse ,setInUse]=useState(true)
  return (
    <div onMouseLeave={()=>dispatch(menuAction.toggle(" "))} className={`h-96 border-b-2 rounded-md shadow-md ${show?'w-full':'w-0'} flex overflow-hidden bg-white z-30 absolute`}>
          <div className=' basis-1/3 m-6 border-r-2 h-full border-gray-300 '>
              <button className=' flex h-20 justify-between hover:bg-gray-100  w-96 m-2 p-2 bg-gray-50'>
              <div className='flex flex-col'>
              <span className=" text-center text-sm font-medium pl-6 font-sans">Post a job and hire a pro</span>
              <span className="mt-1 text-gray-700 text-sm">Talent Marketplace</span></div>
              <svg className='w-6 h-6  place-self-center -rotate-90' xmlns="http://www.w3.org/2000/svg" fill="none"  aria-hidden="true" viewBox="0 0 24 24" role="img">
              <path className=' stroke-green-600' vectorEffect="non-scaling-stroke"  strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M18 10l-6 5-6-5"></path>
              </svg>
              </button>

              <button className=' flex h-20 justify-between hover:bg-gray-100  w-96 m-2 p-2 bg-gray-50'>
              <div className='flex flex-col'>
              <span className=" text-center text-sm font-medium pl-6 font-sans">Browse and buy projects</span>
              <span className="mt-1  text-start pl-10  text-gray-700 text-sm">Project Catalog</span></div>
              <svg className='w-6 h-6  place-self-center -rotate-90' xmlns="http://www.w3.org/2000/svg" fill="none"  aria-hidden="true" viewBox="0 0 24 24" role="img">
              <path className=' stroke-green-600' vectorEffect="non-scaling-stroke"  strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M18 10l-6 5-6-5"></path>
              </svg>
              </button>

              <button className=' flex h-20 justify-between hover:bg-gray-100  w-96 m-2 p-2 bg-gray-50'>
              <div className='flex flex-col'>
              <span className=" text-center text-sm font-medium pl-6 font-sans">Let us find you the right talent</span>
              <span className="mt-1 text-gray-700 text-start pl-10 text-sm">Talent Scout</span></div>
              <svg className='w-6 h-6  place-self-center -rotate-90' xmlns="http://www.w3.org/2000/svg" fill="none"  aria-hidden="true" viewBox="0 0 24 24" role="img">
              <path className=' stroke-green-600' vectorEffect="non-scaling-stroke"  strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M18 10l-6 5-6-5"></path>
              </svg>
              </button>


          </div>

          <div className='h-full basis-1/4 '>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam dolorem unde nobis cum? Aliquid ad, ducimus vitae possimus iure praesentium saepe a cumque error incidunt? Adipisci tempora nostrum voluptatibus. Tenetur.
            
          </div>

      
    </div>
  )
}

export default FindTalent
