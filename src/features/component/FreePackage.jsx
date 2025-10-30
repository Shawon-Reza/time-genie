import React from 'react'
import StartFreeToday from './StartFreeToday'
import FreePackageDetails from './FreePackageDetails'

const FreePackage = () => {
  return (
    <div>
      <section>
        <StartFreeToday></StartFreeToday>
      </section>

      <section className="mt-10">
        <FreePackageDetails></FreePackageDetails>
      </section>
    </div>
  )
}

export default FreePackage