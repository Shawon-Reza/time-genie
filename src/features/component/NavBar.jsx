import React, { useState } from 'react'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import logo from "../../assets/logo.png"
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navigate = useNavigate()

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About Timeshare Genie', href: '#about' },
    { name: 'Get Free Package', href: '#free-package' },
    { name: 'Premium Package', href: '#premium-package' }
  ]

  const scrollToSection = (href) => {
    const selector = href.startsWith('#') ? href : `#${href}`
    const element = document.querySelector(selector)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
      return
    }

    // If the element isn't on the current page, navigate to home then
    // attempt to scroll after a short delay. This covers the case when
    // the NavBar is used on other routes (e.g. Terms, Privacy).
    navigate('/')
    setTimeout(() => {
      const el = document.querySelector(selector)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 250)
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className="relative  text-white z-100">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Timeshare Genie Logo"
              onClick={() => {
                // Ensure we are on the home route, then scroll to top/home section
                navigate('/')
                setTimeout(() => {
                  const el = document.querySelector('#home')
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                }, 200)
                setIsMobileMenuOpen(false)
              }}
              className="h-14 cursor-pointer" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-300 hover:text-yellow-400 px-3 py-2 text-sm font-medium transition-colors duration-200 border-b-2 border-transparent hover:border-yellow-400"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Download App Button */}
          <div className="hidden lg:block">
            <button
              onClick={() => scrollToSection('#downloadstore')}
              className="bg-yellow-500 hover:bg-yellow-600 text-slate-800 px-6 py-2 rounded-lg font-semibold text-sm transition-colors duration-200 shadow-lg hover:shadow-xl">
              Download App
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isMobileMenuOpen ? (
                <HiX className="h-6 w-6" />
              ) : (
                <HiMenuAlt3 className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-slate-800 border-t border-slate-700 z-50">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left text-gray-300 hover:text-yellow-400 px-3 py-2 text-base font-medium transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
            <div className="pt-4 border-t border-slate-700">
              <button 
              onClick={()=>{
                scrollToSection("#downloadstore");
              }}
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-slate-800 px-6 py-3 rounded-lg font-semibold text-sm transition-colors duration-200">
                Download App
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default NavBar