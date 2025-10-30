import React from 'react'
import { FaUser, FaBell, FaFileAlt, FaRobot, FaLock } from 'react-icons/fa'
import about1 from '../../assets/about1.png'
import about2 from '../../assets/about2.png'


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
          icon: FaLock,
          title: "The Vault",
          description: "Securely store and access your contracts, reports, and notices in one place."
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
      <div className="mx-auto">
        
        {/* Section 1: What is Timeshare Genie? */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              {aboutData.section1.title}
            </h2>
          </div>

          <div className="grid grid-cols-12 gap-12 items-center">
            {/* Left side - Illustration */}
            <div className="col-span-5 flex justify-center ">
              <div className="relative">
                {/* Large Question Mark Background */}
                <div>
                  <img src={about1} alt={aboutData.section1.illustration.alt} className="w-full h-full" />
                </div>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="text-white col-span-7">
              <h3 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-6">
                {aboutData.section1.subtitle}
              </h3>
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                {aboutData.section1.description}
              </p>
              <button className="bg-transparent border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-slate-800 px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200 w-full sm:w-auto text-center">
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

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left side - App mockup and intro */}
            <div className="lg:col-span-5 xl:col-span-4 mb-12 lg:mb-0">
              <div className="mb-8">
                <p className="text-yellow-400 text-lg mb-2 opacity-90">{aboutData.section2.subtitle}</p>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
                  "{aboutData.section2.quote}"
                </h3>
              </div>

              {/* App Mockup */}
              <div className="flex justify-center lg:justify-start">
                <div className="relative">
                  {/* Phone mockup */}
                  <div>
                    <img src={about2} alt="App Mockup"
                      className="w-full h-full" />
                  </div>

                  {/* Tablet mockup behind phone */}
                  <div className="absolute -left-8 top-8 w-32 h-48 bg-gray-700 rounded-2xl transform rotate-12 -z-10">
                    <div className="w-full h-full bg-gray-100 rounded-xl m-2"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Feature cards */}
            <div className='lg:col-span-7 xl:col-span-8'>
              <div className="grid lg:grid-cols-2 gap-6 items-center">
                {aboutData.section2.features.map((feature) => (
                  <div key={feature.id} className="bg-slate-800/50 border-2 border-yellow-400/30 rounded-xl p-6 hover:border-yellow-400 transition-colors duration-200">
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

export default About