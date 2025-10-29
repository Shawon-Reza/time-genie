import React from 'react'
import { FaUser, FaBell, FaFileAlt, FaRobot, FaShieldAlt } from 'react-icons/fa'
import { FaVault } from 'react-icons/fa6'

const About = () => {
  const aboutData = {
    section1: {
      title: "What is Timeshare Genie?",
      subtitle: "Your AI-Powered Timeshare Assistant",
      description: "Timeshare Genie™ is the smartest assistant in the industry-upload contracts, Public Offering Statements, Property Reports, Disclosure Guides, Maintenance Fee Notices and more-securely in your Vault.",
      buttonText: "Try Genie Free",
      illustration: {
        icon: FaRobot,
        alt: "AI Assistant Illustration"
      }
    },
    section2: {
      title: "Why Owners Trust Timeshare Genie?",
      subtitle: "Introducing:",
      quote: "Timeshare Genie",
      features: [
        {
          id: 1,
          icon: FaUser,
          title: "Your Trusted Advisor",
          description: "Ask anything about your ownership and get clear, unbiased answers."
        },
        {
          id: 2,
          icon: FaVault,
          title: "The Vault",
          description: "Ask anything about your ownership and get clear, unbiased answers."
        },
        {
          id: 3,
          icon: FaBell,
          title: "Always Current & Smart Alerts",
          description: "Ask anything about your ownership and get clear, unbiased answers."
        },
        {
          id: 4,
          icon: FaFileAlt,
          title: "Critical Changes & Policy Updates",
          description: "Ask anything about your ownership and get clear, unbiased answers."
        }
      ]
    }
  }

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section 1: What is Timeshare Genie? */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              {aboutData.section1.title}
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Illustration */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Large Question Mark Background */}
                <div className="w-64 h-64 md:w-80 md:h-80 bg-yellow-500 rounded-full flex items-center justify-center text-8xl md:text-9xl font-bold text-slate-800 relative overflow-hidden">
                  ?
                  {/* Small AI Robot Icon */}
                  <div className="absolute bottom-8 left-8 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                    <FaRobot className="text-white text-xl" />
                  </div>
                  {/* Floating Elements */}
                  <div className="absolute top-4 right-8 w-8 h-8 bg-white rounded-full"></div>
                  <div className="absolute top-16 left-4 w-6 h-6 bg-gray-300 rounded-full"></div>
                  <div className="absolute bottom-20 right-4 w-10 h-10 bg-orange-400 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="text-white">
              <h3 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-6">
                {aboutData.section1.subtitle}
              </h3>
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                {aboutData.section1.description}
              </p>
              <button className="bg-transparent border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-slate-800 px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200">
                {aboutData.section1.buttonText}
              </button>
            </div>
          </div>
        </section>

        {/* Section 2: Why Owners Trust Timeshare Genie? */}
        <section>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
              {aboutData.section2.title}
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left side - App mockup and intro */}
            <div>
              <div className="mb-8">
                <p className="text-yellow-400 text-lg mb-2">{aboutData.section2.subtitle}</p>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-8">
                  "{aboutData.section2.quote}"
                </h3>
              </div>
              
              {/* App Mockup */}
              <div className="flex justify-center lg:justify-start">
                <div className="relative">
                  {/* Phone mockup */}
                  <div className="w-48 h-80 bg-gray-800 rounded-3xl p-4 border-4 border-gray-600 shadow-2xl">
                    <div className="w-full h-full bg-white rounded-2xl relative overflow-hidden">
                      {/* Phone screen content */}
                      <div className="p-4">
                        <div className="flex items-center justify-between mb-4">
                          <FaShieldAlt className="text-yellow-500 text-xl" />
                          <div className="text-xs text-gray-500">9:41</div>
                        </div>
                        <div className="space-y-3">
                          <div className="h-3 bg-gray-200 rounded"></div>
                          <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                          <div className="h-8 bg-yellow-400 rounded"></div>
                          <div className="space-y-2 mt-4">
                            <div className="h-2 bg-gray-100 rounded"></div>
                            <div className="h-2 bg-gray-100 rounded w-5/6"></div>
                            <div className="h-2 bg-gray-100 rounded w-2/3"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Tablet mockup behind phone */}
                  <div className="absolute -left-8 top-8 w-32 h-48 bg-gray-700 rounded-2xl transform rotate-12 -z-10">
                    <div className="w-full h-full bg-gray-100 rounded-xl m-2"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Feature cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {aboutData.section2.features.map((feature) => (
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
        </section>
      </div>
    </div>
  )
}

export default About