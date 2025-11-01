import React from 'react'
import StartFreeToday from './StartFreeToday'
import FreePackageDetails from './FreePackageDetails'

const FreePackage = () => {
  return (
    // px-4 sm:px-6 lg:px-8
    // px-2 sm:px-4 md:px-8 lg:px-10 xl:px-12
    <div className=''>
      <section className='bg-[#0A1A2F] px-6 sm:px-10 lg:px-16   py-7 xl:py-0'>
        <StartFreeToday></StartFreeToday>
      </section>

      <section className="mt-10  px-6 sm:px-10 lg:px-16">
        <FreePackageDetails></FreePackageDetails>
      </section>
    </div>
  )
}

export default FreePackage