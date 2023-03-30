import { motion } from 'framer-motion'
import React from 'react'


const CategoryButton = () => {
  return (
    <div className='grid md:flex md:flex-wrap justify-center md:gap-2 gap-2 place-self-center grid-cols-3 md:w-[1000px]'>
     
        <motion.button  whileTap={{ scale: 0.9 }}  className='flex md:flex-row md:basis-1/4 md:w-52 md:h-12 hover:bg-neutral-400 justify-center md:p-2 rounded-xl  md:overflow-hidden md:rounded-l-full md:rounded-r-full bg-green-100 flex-col gap-2 h-20 w-24'>
        <svg className=' place-self-center h-6 w-5 ' xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img">
        <path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 4H3v16h18V4z"></path>
        <path vectorEffect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.75 11.51l2.25 2-2.25 2m-7.5-4l-2.25 2 2.25 2m5.31-6.06l-3.12 8.12M3 7.02h18"></path></svg>
        <span className=' text-sm place-self-center font-bold text-emerald-900  '>Development & IT</span>
        </motion.button>

        <motion.button whileTap={{ scale: 0.9 }}  className='md:basis-1/4 flex md:flex-row md:w-52 hover:bg-neutral-400 md:h-12 justify-center md:p-2 rounded-xl  md:overflow-hidden md:rounded-l-full md:rounded-r-full bg-green-100 flex-col gap-2 h-20 w-24'>
        <svg className=' place-self-center h-6 w-5 ' xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-name="Layer 1" viewBox="0 0 24 24" role="img"><line x1="14.74" x2="18.45" y1="5.55" y2="9.26" fill="none" vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></line>
        <path fill="none" vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.49 20.59L4.57 21A1.3 1.3 0 013 19.43l.38-1.92a2.56 2.56 0 01.72-1.34l12.4-12.4a2.6 2.6 0 013.7 0h0a2.6 2.6 0 010 3.7L7.83 19.87a2.56 2.56 0 01-1.34.72z"></path><path fill="none" vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.34" d="M16.06 11.64l4.42 4.41a1.8 1.8 0 010 2.53l-1.9 1.9a1.8 1.8 0 01-2.53 0l-4.41-4.42m-3.7-3.7L3.52 8a1.8 1.8 0 010-2.53l1.9-1.9A1.8 1.8 0 018 3.52L12.42 8"></path><line x1="4.27" x2="6.17" y1="8.69" y2="6.8" fill="none" vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.37"></line><line x1="6.09" x2="7.98" y1="10.51" y2="8.62" fill="none" vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.37"></line><line x1="13.49" x2="15.38" y1="17.91" y2="16.02" fill="none" vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.37"></line><line x1="15.31" x2="17.2" y1="19.73" y2="17.83" fill="none" vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.37"></line></svg>
       
        <span className=' text-sm place-self-center font-bold text-emerald-900  '>Design & Creative</span>
        </motion.button>


         <motion.button whileTap={{ scale: 0.9 }}  className='md:basis-1/4 flex md:flex-row md:w-52 hover:bg-neutral-400 md:h-12 justify-center md:p-2 rounded-xl  md:overflow-hidden md:rounded-l-full md:rounded-r-full bg-green-100 flex-col gap-2 h-20 w-24'>
         <svg className=' place-self-center h-6 w-5 '  xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img">
        <path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.735 15.734h-4v5h4v-5zm7-3h-4v8h4v-8zm7-3h-4v11h4v-11zm-4.07-7h3.07v3.07"></path><path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.735 2.734l-7.69 7.31-2.9-2.93-5.7 5.37"></path></svg>
        <span className=' text-sm place-self-center font-bold text-emerald-900  '>Sales & Marketing</span>
        </motion.button>


        <motion.button whileTap={{ scale: 0.9 }}  className='md:basis-1/4 flex md:flex-row hover:bg-neutral-400 md:w-52 md:h-12 justify-center md:p-2 rounded-xl  md:overflow-hidden md:rounded-l-full md:rounded-r-full bg-green-100 flex-col gap-2 h-20 w-24'>
        <svg className=' place-self-center h-6 w-5 ' xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img">
        <path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.31 10.732s-2.324 3.29-1.855 6.833L3 20.98 6.465 8.556c3.524.468 6.832-1.855 6.832-1.855l4.012 4.031z"></path><path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.31 8.846L15.154 3.69a.976.976 0 00-1.38 0l-1.07 1.07a.976.976 0 000 1.38l5.156 5.156a.976.976 0 001.38 0l1.07-1.07a.976.976 0 000-1.38zM3.03 20.982l5.719-5.72m1.015.42a1.445 1.445 0 100-2.889 1.445 1.445 0 000 2.89z"></path></svg>
        <span className='  text-sm place-self-center font-bold text-emerald-900 '>Writing & Translation</span>
        </motion.button>
      

      
    
       <motion.button whileTap={{ scale: 0.9 }}  className='flex md:flex-row hover:bg-neutral-400 md:w-56 md:h-12 justify-center md:p-2 rounded-xl  md:overflow-hidden md:rounded-l-full md:rounded-r-full bg-green-100 flex-col gap-2 h-20 w-24'>
       <svg className=' place-self-center h-6 w-5 ' xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 10.88H4a1 1 0 00-1 1v4a1 1 0 001 1h2a1 1 0 001-1v-4a1 1 0 00-1-1zm13.678 0h-2a1 1 0 00-1 1v4a1 1 0 001 1h2a1 1 0 001-1v-4a1 1 0 00-1-1zm-.34 0a7.75 7.75 0 00-7.5-7.88 7.75 7.75 0 00-7.499 7.88"></path>
       <path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.309 19.699h4.33a2 2 0 001.999-2v-.82"></path><path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.839 21a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
        <span className='  text-sm place-self-center font-bold text-emerald-900 '>Admin & Customer Support</span>
        </motion.button>


       <motion.button whileTap={{ scale: 0.9 }}  className='flex md:flex-row hover:bg-neutral-400 md:w-56 md:h-12 justify-center md:p-2 rounded-xl  md:overflow-hidden md:rounded-l-full md:rounded-r-full bg-green-100 flex-col gap-2 h-20 w-24'>
       <svg className=' place-self-center h-6 w-5 ' xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-name="Layer 1" viewBox="0 0 24 24" role="img"><rect width="18" height="18" x="3" y="3" fill="none" vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" rx="3"></rect>
       <polyline fill="none" vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" points="14.43 8.77 18 8.77 18 12.34"></polyline><polyline fill="none" vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" points="18 8.77 12.45 14.32 9.7 11.54 6 15.23"></polyline></svg>
        <span className='  text-sm place-self-center font-bold text-emerald-900 '>Finance & Accounting</span>
        </motion.button>


       <motion.button whileTap={{ scale: 0.9 }}  className='flex md:flex-row hover:bg-neutral-400 md:w-56 md:h-12 justify-center md:p-2 rounded-xl  md:overflow-hidden md:rounded-l-full md:rounded-r-full bg-green-100 flex-col gap-2 h-20 w-24'>
       <svg  className=' place-self-center h-6 w-5 ' xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-name="Layer 1" viewBox="0 0 24 24" role="img"><line x1="14.74" x2="18.45" y1="5.55" y2="9.26" fill="none" vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></line><path fill="none" vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.16 9.14l-1.7-1.7a3.32 3.32 0 00-4.24-4.25l1.62 1.63-2 2-1.65-1.6a3.32 3.32 0 004.25 4.24l1.7 1.7"></path><path fill="none" vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.21 9.09l5.32-5.32a2.6 2.6 0 013.7 0h0a2.6 2.6 0 010 3.7l-12.4 12.4a2.56 2.56 0 01-1.34.72L4.57 21A1.3 1.3 0 013 19.43l.38-1.92a2.56 2.56 0 01.72-1.34z"></path><path fill="none" vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.84 14.86l1.7 1.7a3.32 3.32 0 004.24 4.25l-1.62-1.63 2-2 1.63 1.62a3.32 3.32 0 00-4.25-4.24l-1.7-1.7"></path></svg>
        <span className='  text-sm place-self-center font-bold text-emerald-900 '>Engineering & Architecture</span>
        </motion.button>


       <motion.button whileTap={{ scale: 0.9 }}  className='flex md:flex-row hover:bg-neutral-400 md:w-56 md:h-12 justify-center md:p-2 rounded-xl  md:overflow-hidden md:rounded-l-full md:rounded-r-full bg-green-100 flex-col gap-2 h-20 w-24'>
        <svg className=' place-self-center h-6 w-5 ' xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.75 18.75v-16m-7.5 0h15m-11.5 16h8a2 2 0 012 2h-12a2 2 0 012-2v0zm-2-14l-3 6h6l-3-6zm0 9a3 3 0 003-3h-6a3 3 0 003 3v0zm12-9l-3 6h6l-3-6zm0 9a3 3 0 003-3h-6a3 3 0 003 3v0z"></path></svg>
        <span className='  text-sm place-self-center font-bold text-emerald-900 '>Writing & Translation</span>
        </motion.button>

       
      
    </div>
  )
}

export default CategoryButton
