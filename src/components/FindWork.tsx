import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { menuAction } from '@/store/menuReducer';

const FindWork = () => {
    const dispatch = useDispatch();

    const show =useSelector((state:any) => {
        console.log(state.menu)
        return state.menu["Find Work"]})
  return (
    <div onMouseLeave={()=>dispatch(menuAction.toggle(" "))} className={` h-40 ${show?'w-full':'w-0'} border-b-2 rounded-md shadow-md flex overflow-hidden pt-8 bg-white z-30 absolute`}>
        <button className=' flex h-20 justify-between hover:bg-gray-100  w-96 m-2 p-2 bg-gray-50'>
        <div className='flex flex-col'>
        <span className=" text-center text-sm font-medium pl-6 font-sans"> Ways to earn </span>
        <span className="mt-1 text-gray-700 text-sm"> Learn why Upwork has the right opportunities for you. </span></div>
      
        </button>

        <button className=' flex h-20 justify-between hover:bg-gray-100  w-96 m-2 p-2 bg-gray-50'>
        <div className='flex flex-col'>
        <span className=" text-center text-sm font-medium pl-6 font-sans"> Find work for your skills </span>
        <span className="mt-1  text-start pl-10  text-gray-700 text-sm"> Explore the kind of work available in your field. </span></div>
      
        </button>

        <button className=' flex h-20 justify-between hover:bg-gray-100  w-96 m-2 p-2 bg-gray-50'>
        <div className='flex flex-col'>
        <span className=" text-center text-sm font-medium pl-6 font-sans"> Find ways to promote yourself </span>
        <span className="mt-1 text-gray-700 text-start pl-10 text-sm"> Show clients you’re the one they want. </span></div>
    
        </button>



   


</div>
  )
}

export default FindWork
