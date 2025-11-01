import React from 'react'
import about1 from '../../assets/about2.png'

const StartFreeToday = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }
  return (
    <section className="  text-white">
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 b ">
          {/* Left: copy */}
          <div className="">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
              “Start Free Today — Your
              <span className="block">Genie is Waiting.”</span>
            </h2>

            <p className="text-base md:text-lg text-gray-300 mb-8 max-w-xl">
              Join our Forever Free Membership and begin your journey to clarity with Timeshare Genie. No credit card required.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-slate-800 px-6 py-3 rounded-lg font-semibold text-base md:text-lg shadow-lg w-full sm:w-auto">
                Download Timeshare Genie Free
              </button>

              <button
              onClick={()=>{
                scrollToSection("#downloadstore")
              }}
              className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-slate-800 px-6 py-3 rounded-lg font-semibold text-base md:text-lg w-full sm:w-auto">
                Free Package
              </button>
            </div>
          </div>

          {/* Right: phones - stacked on mobile, overlapping on md+ */}
          <div className="flex justify-center md:justify-end px-2 md:px-6">
            <img src={about1} alt="App mobile view 1" className="w-full h-full" />

          </div>
        </div>
      </div>
    </section>
  )
}

export default StartFreeToday