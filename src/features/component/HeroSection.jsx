import React from 'react'
import { FaShieldAlt, FaCamera, FaHandshake } from 'react-icons/fa'

const HeroSection = () => {
    const heroData = {
        logo: {
            icon: "TS",
            title: "TIMESHARE",
            subtitle: "SECRETS",
            trademark: "™"
        },
        headline: {
            main: "You invested in memories.",
            secondary: "Not in frustration"
        },
        description: "Timeshare Secrets™ gives you the smartest Timeshare Genie—your trusted advisor who explains your ownership clearly, protects your investment, and keeps you informed at every turn",
        buttons: {
            primary: "Unlock My Timeshare Genie Free",
            secondary: "Download App"
        },
        images: [
            {
                id: 1,
                alt: "Business handshake representing trust and partnership",
                icon: FaHandshake,
                description: "Professional consultation"
            },
            {
                id: 2,
                alt: "Happy woman taking vacation photos",
                icon: FaCamera,
                description: "Creating memories"
            }
        ]
    }

    return (
        <div className="min-h-screen flex items-center px-4 pt-20 pb-10">
            <div className="max-w-7xl mx-auto w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Content */}
                    <div className="text-white space-y-8">
                        {/* Logo Section */}
                        <div className="text-center lg:text-left">
                            <div className="inline-flex flex-col items-center lg:items-start">
                                {/* Shield Logo */}
                                <div className="relative mb-6">
                                    <div className="w-20 h-24 md:w-24 md:h-28 border-2 border-yellow-400 rounded-t-full rounded-b-lg flex items-center justify-center bg-slate-800/50 backdrop-blur-sm">
                                        <div className="text-yellow-400 text-2xl md:text-3xl font-bold flex items-center">
                                            <span className="mr-1">T</span>
                                            <span className="text-yellow-300">S</span>
                                        </div>
                                    </div>
                                    <FaShieldAlt className="absolute -top-2 -right-2 text-yellow-400 text-lg opacity-80" />
                                </div>
                                
                                {/* Brand Text */}
                                <div className="text-center lg:text-left">
                                    <h1 className="text-2xl md:text-3xl font-bold text-yellow-400 tracking-wider">
                                        {heroData.logo.title}
                                    </h1>
                                    <p className="text-lg md:text-xl font-semibold text-yellow-300 tracking-wide">
                                        {heroData.logo.subtitle}<span className="text-sm align-top">{heroData.logo.trademark}</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Main Headline */}
                        <div className="space-y-4">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                                <span className="block">{heroData.headline.main}</span>
                                <span className="block">{heroData.headline.secondary}</span>
                            </h2>
                        </div>

                        {/* Description */}
                        <div>
                            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                                {heroData.description}
                            </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-yellow-500 hover:bg-yellow-600 text-slate-800 px-6 py-4 rounded-lg font-semibold text-base md:text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                                {heroData.buttons.primary}
                            </button>
                            <button className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-slate-800 px-6 py-4 rounded-lg font-semibold text-base md:text-lg transition-all duration-200 transform hover:-translate-y-0.5">
                                {heroData.buttons.secondary}
                            </button>
                        </div>
                    </div>

                    {/* Right Content - Images */}
                    <div className="relative">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
                            {/* Business Image Placeholder */}
                            <div className="relative group">
                                <div className="bg-linear-to-br from-slate-700 to-slate-600 rounded-2xl p-8 h-64 md:h-80 flex flex-col items-center justify-center text-center shadow-2xl transform transition-all duration-300 group-hover:scale-105">
                                    <FaHandshake className="text-yellow-400 text-4xl md:text-5xl mb-4" />
                                    <h3 className="text-white font-semibold text-lg mb-2">Professional Service</h3>
                                    <p className="text-gray-300 text-sm">Trusted advisors protecting your investment</p>
                                    <div className="absolute inset-0 bg-linear-to-t from-slate-800/50 to-transparent rounded-2xl"></div>
                                </div>
                            </div>

                            {/* Vacation Image Placeholder */}
                            <div className="relative group md:mt-8">
                                <div className="bg-linear-to-br from-blue-600 to-blue-500 rounded-2xl p-8 h-64 md:h-80 flex flex-col items-center justify-center text-center shadow-2xl transform transition-all duration-300 group-hover:scale-105">
                                    <FaCamera className="text-yellow-300 text-4xl md:text-5xl mb-4" />
                                    <h3 className="text-white font-semibold text-lg mb-2">Memory Making</h3>
                                    <p className="text-blue-100 text-sm">Creating unforgettable vacation experiences</p>
                                    <div className="absolute inset-0 bg-linear-to-t from-blue-800/50 to-transparent rounded-2xl"></div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl"></div>
                        <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-400/20 rounded-full blur-xl"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection