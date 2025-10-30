import React from 'react'
import herologo from '../../assets/herologo.png'
import hero1 from '../../assets/hero1.png'
import hero2 from '../../assets/hero2.png'

const HeroSection = () => {
    return (
        <section className="min-h-screen flex items-center pt-20 pb-16 ">
            <div className="mx-auto w-full px-6">
                {/* Top logo centered */}
                <div className="flex justify-center mb-10">
                    <img src={herologo} alt="Timeshare Secrets Logo" className="w-44 md:w-56 lg:w-64 xl:w-72" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Left: Headline + description + buttons */}
                    <div className="text-white px-2 md:px-4">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
                            <span className="block">You invested in memories.</span>
                            <span className="block">Not in frustration</span>
                        </h1>

                        <p className="text-base md:text-lg text-gray-300 max-w-2xl mb-8">
                            Timeshare Secrets™ gives you the smartest Timeshare Genie — your trusted advisor who explains your ownership clearly, protects your investment, and keeps you informed at every turn
                        </p>

                        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                            <button className="bg-yellow-500 hover:bg-yellow-600 text-slate-800 px-6 py-3 rounded-lg font-semibold text-base md:text-lg transition-all duration-200 shadow-lg hover:shadow-xl w-full sm:w-auto">
                                Unlock My Timeshare Genie Free
                            </button>

                            <button className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-slate-800 px-6 py-3 rounded-lg font-semibold text-base md:text-lg transition-all duration-200 w-full sm:w-auto">
                                Download App
                            </button>
                        </div>
                    </div>

                    {/* Right: Overlapping images card */}
                    <div className="flex justify-center md:justify-end px-2 md:px-4">
                        {/* Mobile stacked images */}
                        <div className="md:hidden flex flex-col items-center gap-4">
                            <img src={hero1} alt="Creating memories" className="w-72 sm:w-80 object-cover rounded-2xl shadow-2xl" />
                            <img src={hero2} alt="Professional consultation" className="w-56 sm:w-64 object-cover rounded-2xl shadow-xl" />
                        </div>

                        {/* Desktop overlapping images */}
                        <div className="hidden md:block relative w-[320px] sm:w-[420px] lg:w-[480px]">
                            <div className="rounded-3xl p-4 lg:p-6">
                                <div className="relative h-80 lg:h-[400px]">
                                    <img src={hero2} alt="Professional consultation" className="absolute left-4 bottom-4 w-44 sm:w-48 md:w-56 h-28 sm:h-32 md:h-48 object-cover rounded-2xl shadow-xl border-4 border-white/5 z-20" />
                                    <img src={hero1} alt="Creating memories" className="absolute right-0 top-0 w-56 sm:w-64 md:w-72 h-64 sm:h-72 md:h-80 object-cover rounded-3xl shadow-2xl z-10" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection