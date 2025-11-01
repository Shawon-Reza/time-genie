import React, { use } from 'react'
import herologo from '../../assets/herologo.png'
import hero1 from '../../assets/hero1.png'
import hero2 from '../../assets/hero2.png'
import DotGrid from '../background/DotGrid'
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {
    const navigate = useNavigate()
    return (
        <section className="relative min-h-screen flex items-center pb-16 bg-linear-to-r from-[#072034] via-[#0b2940] to-[#0f3b57] px-2 sm:px-4 md:px-8 lg:px-10 xl:px-12 sm:pb-48 md:pb-56 lg:pb-0">
            {/* Background dots animation (full-section) */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <DotGrid
                    dotSize={10}
                    gap={15}
                    baseColor="#1E1E20"
                    activeColor="#66ADD3"
                    proximity={120}
                    shockRadius={250}
                    shockStrength={5}
                    resistance={750}
                    returnDuration={1.5}
                    style={{ width: '100%', height: '100%' }}
                />
            </div>

            <div className="mx-auto w-full px-6 relative z-10 ">
                {/* Top logo centered */}
                <div className="flex justify-center pb-15 pt-20">
                    <img
                        src={herologo}
                        alt="Timeshare Secrets Logo"
                        className="w-44 md:w-56 lg:w-64 xl:w-72 2xl:w-80 "
                        
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 xl:gap-16 items-center">
                    {/* Left: Headline + description + buttons */}
                    <div className="text-white px-2 md:px-4 ">
                        <h1 className="text-2xl md:text-3xl lg:text-5xl font-extrabold leading-tight mb-6">
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
                    <div className=" px-2 md:px-4  flex flex-col justify-center items-center">

                        {/* Desktop overlapping images */}
                        <div className="mt-40 lg:mt-0  items-center justify-center lg:px-20 xl:px-44  relative w-[250px] sm:w-[420px] lg:w-[480px]">


                            <img src={hero1} alt="Creating memories" className="w-full h-auto object-cover rounded-2xl shadow-2xl max-h-[400px] absolute -top-50" />

                            <img src={hero2} alt="Professional consultation" className="w-[70%] object-cover rounded-2xl shadow-2xl max-h-[250px] absolute -left-10 xl:-left-2  -top-12.5" />

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection