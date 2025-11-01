import React from 'react'
import { FaRegUser, FaFolderOpen, FaBookOpen, FaEnvelope } from 'react-icons/fa'
import img from '../../assets/freemic.png'
import { BorderBeam } from '@/components/ui/border-beam'

const FreePackageDetails = () => {
  return (
    <section className="">
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Left: Megaphone / Alert */}
          <div className="flex flex-col items-start space-y-6">
            {/* Megaphone graphic */}
            <div className="w-full flex justify-center md:justify-start">
             <img src={img} alt="Free Package Megaphone" className="w-56 sm:w-64 md:w-72 object-contain" />
            </div>

            

            <div className="mt-4 prose max-w-none text-white text-sm">
              <h4 className="text-yellow-400 underline decoration-yellow-400 underline-offset-4">Alert!</h4>
              <p className="mt-2 text-gray-300">This package comes with fixed usage limits. Once the allocated quota is reached, access will be restricted until the next cycle or an upgrade to a paid plan.</p>
            </div>
          </div>

          {/* Center + Right: Heading + Cards */}
          <div className="md:col-span-2">
            <div className="text-center md:text-left mb-6 md:mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white">Free Package</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card title="Timeshare Genie Access" icon={<FaRegUser className="text-yellow-400 text-2xl" />}>
                Ask up to 10 questions per month
              </Card>

              <Card title="Vault Storage" icon={<FaFolderOpen className="text-yellow-400 text-2xl" />}>
                Upload and store 3 essential ownership documents
              </Card>

              <Card title="Basic Ownership Insights" icon={<FaBookOpen className="text-yellow-400 text-2xl" />}>
                Genie will summarize key terms and provide plain-English explanations from your contracts and disclosures
              </Card>

              <Card title="Email Support" icon={<FaEnvelope className="text-yellow-400 text-2xl" />}>
                Direct access for starter-level guidance
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Card({ title, icon, children }) {
  return (
    <div className="relative overflow-hidden bg-transparent border border-yellow-400/30 rounded-lg p-6 min-h-[120px]">

       <BorderBeam
        duration={20}
        size={400}
        className="from-transparent via-[#D7AB42] to-transparent"
      />
      <BorderBeam
        duration={20}
        delay={3}
        size={400}
        borderWidth={2}
        className="from-transparent via-blue-500 to-transparent"
      />

      <div className="flex items-start space-x-4">
        <div className="mt-1">{icon}</div>
        <div>
          <h4 className="text-white font-semibold text-lg mb-2">{title}</h4>
          <p className="text-gray-300 text-sm">{children}</p>
        </div>
      </div>
    </div>
  )
}

export default FreePackageDetails