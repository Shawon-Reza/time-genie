import React from 'react'
import NavBar from './component/NavBar'
import HeroSection from './component/HeroSection'
import Footer from './component/Footer'
import About from './component/About'
import FreePackage from './component/FreePackage'
import PremiumPackage from './component/PremiumPackage'
import QuickPackageCompare from './component/QuickPackageCompare'
import DownloadStore from './component/DownloadStore'

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-[#0F2846]">
            {/* Navbar */}
            <section className='pt-1 fixed w-full z-50 bg-[#0A1A2F]/80 backdrop-blur-md '>
                <NavBar />
            </section>

            {/* Hero Section */}
            <section id="home" className="pt-8 md:pt-15  xl:pt-0 ">
                <HeroSection />
            </section>

            {/* px-2 sm:px-4 md:px-8 lg:px-10 xl:px-12 */}
            <div className=''>
                {/* About Section */}
                <section id="about" className="mt-12 sm:mt-24 md:mt-36 lg:mt-10 px-2 sm:px-4 md:px-8 lg:px-10 xl:px-12">
                    <About />
                </section>

                {/* Free Package Section */}
                <section id="free-package" className="mt-16 lg:mt-28 xl:mt-28 2xl:mt-0 ">
                    <FreePackage />
                </section>

                {/* Premium Package Section */}
                <section id="premium-package" className="mt-12 lg:mt-20 xl:mt-20 px-2 sm:px-4 md:px-8 lg:px-10 xl:px-12">
                    <PremiumPackage></PremiumPackage>
                </section>

                <section id="quick-compare" className="lg:mt-5 xl:mt-10 px-2 sm:px-4 md:px-8 lg:px-10 xl:px-12">
                    <QuickPackageCompare />
                </section>

                <section id="downloadstore" className="px-4 sm:px-6 lg:px-8 md:mt-7 xl:my-12 px-2 sm:px-4 md:px-8 lg:px-10 xl:px-12">
                    <DownloadStore />
                </section>

            </div>
            {/* Footer */}
            <section className='bg-[#0A1A2F]'>
                <Footer />
            </section>
        </div>
    )
}

export default LandingPage