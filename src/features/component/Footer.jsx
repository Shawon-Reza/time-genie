import React from 'react'

const Footer = () => {
  return (
    <footer className=" text-gray-300 py-8 px-4">
      <div className=" mx-auto text-center">
        <nav className="flex flex-wrap justify-center gap-6 mb-4">
          <a href="#" className="text-gray-300 hover:text-white text-sm">Privacy</a>
          <a href="#" className="text-gray-300 hover:text-white text-sm">Terms</a>
          <a href="#" className="text-gray-300 hover:text-white text-sm">Why Owners Trust Genie</a>
          <a href="#" className="text-gray-300 hover:text-white text-sm">App Download</a>
          <a href="#" className="text-gray-300 hover:text-white text-sm">Free Membership</a>
        </nav>

        <div className="mb-4">
          <span className="text-yellow-400 font-semibold">Powered By LYNQUIX.</span>
        </div>

        <div>
          <p className="text-sm text-gray-400 max-w-4xl mx-auto">©Timeshare Secrets. All Rights Reserved. Independent, developer-friendly assistant. Not affiliated with Hilton, Marriott, Wyndham, Disney, or others.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer