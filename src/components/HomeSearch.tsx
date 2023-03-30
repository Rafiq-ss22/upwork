import React from 'react'

const HomeSearch = () => {
  return (
    <div className='flex w-[600px] mb-5 bg-zinc-100 justify-between place-self-center border-2 border-gray-400 rounded-l-full rounded-r-full'>

        <input className=' placeholder-black bg-zinc-100  border-none outline-none  m-4 w-80 text-sm font-sans text-black ' placeholder='Try "data entry" or "build a website"'/>
        <button className='w-44 m-1 bg-green-600 text-white rounded-l-full rounded-r-full' type="button"> Get Started</button>
      
    </div>
  )
}

export default HomeSearch
