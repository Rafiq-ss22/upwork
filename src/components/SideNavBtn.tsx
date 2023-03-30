import { motion } from 'framer-motion'
import React from 'react'


const SideNavBtn = (props:any) => {
  return (
   <>
    <motion.button layout whileTap={{ scale: 0.9 }} onClick={()=>{props.setter(!props.value)}}  className='flex m-2  hover:bg-neutral-400 justify-between  bg-green-100 flex-row gap-2 h-12 w-64'>
    <span className=' font-mono ml-10 place-self-center'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fill-rule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clip-rule="evenodd" />
  <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
</svg>

    </span>
    <span className=' font-mono text-center place-self-center'> {props.name} </span>
    <figure onMouseOver={()=>{props.setter(!props.value)}} className={`${props.value?"rotate-180":null} flex h-10 w-8 p-2 place-self-center hover:rotate-180`}>
    <svg  xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img">
    <path vectorEffect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M18 10l-6 5-6-5"></path>
    </svg>
    </figure>
     </motion.button>

     {props.value?(<><motion.div layout   className='bg-green-800 p-4 relative'>
     <button className='flex  hover:bg-neutral-400  bg-green-100 flex-row  h-12 w-60'>
    <span className=' font-mono ml-10 place-self-center'> Link 1 </span>
     </button>
     <button className='flex  hover:bg-neutral-400  bg-green-100 flex-row  h-12 w-60'>
    <span className=' font-mono ml-10 place-self-center'> Link 2 </span>
     </button>
     <button className='flex  hover:bg-neutral-400  bg-green-100 flex-row  h-12 w-60'>
    <span className=' font-mono ml-10 place-self-center'> Link 3 </span>
     </button>

     </motion.div></>):(null)}
   </>
  )
}

export default SideNavBtn
