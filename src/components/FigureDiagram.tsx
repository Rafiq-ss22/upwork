import React from 'react'
import Image from 'next/image'
const FigureDiagram = () => {
  return (
    <div className=' m-20 grid grid-cols-6 '>
 

        <figure className='h-11 w-32'>
        <Image width={80} height={40} data-qa="microsoft" src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload//c_fit/general/logobar/microsoft.svg" alt="Microsoft worked with Upwork to collaborate on an integrated solution that helps enterprises work with freelancers at scale powered by Microsoft 365 and Upwork Enterprise."/>    
        </figure>

        <figure className='h-11 w-32'>
        <Image width={80} height={40} data-qa="airbnb" src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload//c_fit/general/logobar/airbnb.svg" alt="Airbnb works with Upwork to post more than 10000 projects on Upwork."/>
        </figure>

        <figure className='h-11 w-32'>
        <Image width={80} height={40} data-qa="nasdaq" src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload//c_fit/general/logobar/nasdaq.svg" alt="Bissell works with Upwork as a staffing alternative to their hiring process."/>      
        </figure>

        <figure className='h-11 w-32'><Image width={80} height={40} data-qa="automatic" src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload//c_fit/general/logobar/automatic.svg" alt="Automatic worked with Upwork to build their remote-first company with top talent found on Upwork."/></figure>
        <figure className='h-11 w-32'><Image width={80} height={40} data-qa="bissell" src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload//c_fit/general/logobar/bissell.svg" alt="Bissell works with Upwork as a staffing alternative to their hiring process."/></figure>
        <figure className='h-11 w-32'><Image width={80} height={40} data-qa="coty" src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload//c_fit/general/logobar/coty.svg" alt="COTY worked with Upwork to evolve their contingent workforce management."/></figure>
    </div>
  )
}

export default FigureDiagram
