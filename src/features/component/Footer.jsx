import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-yellow-500 rounded-md flex items-center justify-center font-bold text-slate-800">
                <span className="text-lg">TS</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-yellow-400">TIMESHARE</h3>
                <p className="text-sm text-gray-300">SECRETS</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Your trusted partner in timeshare investment decisions. 
              Unlock the secrets to successful vacation ownership.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-yellow-400 font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="text-gray-300 hover:text-yellow-400 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-yellow-400 transition-colors">About</a></li>
              <li><a href="#free-package" className="text-gray-300 hover:text-yellow-400 transition-colors">Free Package</a></li>
              <li><a href="#premium-package" className="text-gray-300 hover:text-yellow-400 transition-colors">Premium</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-yellow-400 font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <p>Email: info@timesharesecrets.com</p>
              <p>Phone: (555) 123-4567</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Timeshare Secrets. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer