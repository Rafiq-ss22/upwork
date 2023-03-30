import React from 'react'
import CategoryButton from './CategoryButton'
import FigureDiagram from './FigureDiagram'
import FindTalent from './FindTalent'
import FindWork from './FindWork'
import HomeSearch from './HomeSearch'


const HomePage = () => {
  return (
    <div className='grid grid-cols-1 align-middle justify-center'>
      <FindTalent/>
      <FindWork/>
      <div className='grid grid-cols-1 text-green-900 pt-20 pb-10 justify-center text-7xl font-serif'>
        <span className='text-center '>Find the best people</span>
        <span className=' text-center '>for your job  </span>
      </div>
      <div className='flex w-full justify-center '>
      <HomeSearch/>
      </div>
      <CategoryButton/>
      <FigureDiagram/>


      
    </div>
  )
}

export default HomePage
