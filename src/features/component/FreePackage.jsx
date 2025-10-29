import React from 'react'
import { FaRobot, FaClipboardList, FaEnvelope, FaExclamationTriangle,  } from 'react-icons/fa'
import { FaVault } from 'react-icons/fa6'

const FreePackage = () => {
  const freePackageData = {
    topSection: {
      title: "Start Free Today — Your Genie is Waiting.",
      description: "Join our Forever Free Membership and begin your journey to clarity with Timeshare Genie. No credit card required.",
      buttons: {
        primary: "Download Timeshare Genie Free",
        secondary: "Free Package"
      }
    },
    freePackage: {
      title: "Free Package",
      tagline: "Forever Free Package",
      alert: {
        title: "Alert!",
        message: "This package comes with fixed usage limits. Once the allocated quota is reached, access will be restricted until the next cycle or an upgrade to a paid plan."
      },
      features: [
        {
          id: 1,
          icon: FaRobot,
          title: "Timeshare Genie Access",
          description: "Ask up to 10 questions per month"
        },
        {
          id: 2,
          icon: FaVault,
          title: "Vault Storage",
          description: "Upload and store 3 essential ownership documents"
        },
        {
          id: 3,
          icon: FaClipboardList,
          title: "Basic Ownership Insights",
          description: "Genie will summarize key terms and provide plain-English explanations from your contracts and disclosures"
        },
        {
          id: 4,
          icon: FaEnvelope,
          title: "Email Support",
          description: "Direct access for starter-level guidance"
        }
      ]
    }
  }

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Top Section - Start Free Today */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div className="text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {freePackageData.topSection.title}
              </h2>
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                {freePackageData.topSection.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-slate-800 px-6 py-3 rounded-lg font-semibold text-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
                  {freePackageData.topSection.buttons.primary}
                </button>
                <button className="bg-transparent border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-slate-800 px-6 py-3 rounded-lg font-semibold text-lg transition-colors duration-200">
                  {freePackageData.topSection.buttons.secondary}
                </button>
              </div>
            </div>

            {/* Right side - Phone Mockups */}
            <div className="flex justify-center lg:justify-end relative">
              <div className="relative">
                {/* Phone 1 - Main phone in front */}
                <div className="w-56 h-96 bg-gray-900 rounded-3xl p-3 border-4 border-gray-700 shadow-2xl relative z-20">
                  <div className="w-full h-full bg-white rounded-2xl relative overflow-hidden">
                    {/* Phone screen content */}
                    <div className="p-4 h-full flex flex-col">
                      {/* Status bar */}
                      <div className="flex justify-between items-center mb-4 text-xs text-gray-500">
                        <span>9:41</span>
                        <div className="flex space-x-1">
                          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                        </div>
                      </div>
                      
                      {/* App content */}
                      <div className="flex-1">
                        <div className="space-y-4">
                          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                          <div className="h-4 bg-gray-200 rounded w-full"></div>
                          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                          
                          <div className="bg-yellow-400 rounded-lg p-3 mt-6">
                            <div className="h-3 bg-yellow-600 rounded w-2/3"></div>
                          </div>
                          
                          <div className="space-y-2 mt-6">
                            <div className="h-3 bg-gray-100 rounded"></div>
                            <div className="h-3 bg-gray-100 rounded w-4/5"></div>
                            <div className="h-3 bg-gray-100 rounded w-3/4"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phone 2 - Background phone */}
                <div className="absolute -right-12 top-8 w-48 h-80 bg-gray-800 rounded-3xl p-3 border-4 border-gray-600 shadow-xl transform rotate-12 z-10">
                  <div className="w-full h-full bg-gray-100 rounded-2xl relative overflow-hidden">
                    <div className="p-3">
                      <div className="space-y-3">
                        <div className="h-3 bg-gray-300 rounded"></div>
                        <div className="h-3 bg-gray-300 rounded w-2/3"></div>
                        <div className="h-6 bg-yellow-300 rounded"></div>
                        <div className="space-y-2 mt-4">
                          <div className="h-2 bg-gray-200 rounded"></div>
                          <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Free Package Section */}
        <section>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              {freePackageData.freePackage.title}
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left side - Forever Free Package Badge and Alert */}
            <div className="lg:col-span-1">
              {/* Forever Free Package Badge */}
              <div className="relative mb-8">
                <div className="bg-yellow-500 text-slate-800 px-6 py-4 rounded-lg transform -rotate-3 shadow-lg relative">
                  {/* <FaSpeakerphone className="text-2xl mb-2" /> */}
                  <div className="font-bold text-lg">Forever</div>
                  <div className="font-bold text-lg">Free Package</div>
                  {/* Small decorative lines */}
                  <div className="absolute top-2 right-2">
                    <div className="w-4 h-0.5 bg-slate-800 mb-1"></div>
                    <div className="w-4 h-0.5 bg-slate-800"></div>
                  </div>
                </div>
              </div>

              {/* Alert Box */}
              <div className="bg-slate-800/50 border-l-4 border-yellow-400 p-6 rounded-lg">
                <div className="flex items-start">
                  <FaExclamationTriangle className="text-yellow-400 text-xl mr-3 mt-1 shrink-0" />
                  <div>
                    <h4 className="text-white font-bold text-lg mb-2">
                      {freePackageData.freePackage.alert.title}
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {freePackageData.freePackage.alert.message}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Feature Cards */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {freePackageData.freePackage.features.map((feature) => (
                  <div key={feature.id} className="bg-slate-800/50 border border-yellow-400/30 rounded-xl p-6 hover:border-yellow-400 transition-colors duration-200">
                    <div className="flex items-center mb-4">
                      <feature.icon className="text-yellow-400 text-2xl mr-3" />
                    </div>
                    <h4 className="text-white font-bold text-lg mb-3">
                      {feature.title}
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default FreePackage