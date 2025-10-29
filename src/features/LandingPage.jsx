import React from 'react'
import NavBar from './component/NavBar'
import HeroSection from './component/HeroSection'
import Footer from './component/Footer'
import About from './component/About'
import FreePackage from './component/FreePackage'
import PremiumPackage from './component/PremiumPackage'

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900">
            <NavBar />

            {/* Hero Section */}
            <section id="home" className="min-h-screen">
                <HeroSection />
            </section>

            {/* About Section */}
            <section id="about" className="min-h-screen">
                <About />
            </section>

            {/* Free Package Section */}
            <section id="free-package" className="min-h-screen">
                <FreePackage />
            </section>

            {/* Premium Package Section */}
            <section id="premium-package" className="min-h-screen flex items-center justify-center px-4">
                <PremiumPackage></PremiumPackage>
            </section>

            <Footer />
        </div>
    )
}

export default LandingPage