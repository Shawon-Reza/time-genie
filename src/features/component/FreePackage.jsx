import React from 'react'
import StartFreeToday from './StartFreeToday'
import FreePackageDetails from './FreePackageDetails'

const FreePackage = () => {
  return (
    <div className='px-4 sm:px-6 lg:px-8'>
      <section>
        <StartFreeToday></StartFreeToday>
      </section>

      <section className="mt-10 2xl:-mt-10">
        <FreePackageDetails></FreePackageDetails>
      </section>
    </div>
  )
}

export default FreePackage