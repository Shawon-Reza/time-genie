import React from 'react'
import { FaLock, FaMobileAlt, FaBell } from 'react-icons/fa'

const DownloadStore = () => {
  return (
    <section className="">
      <div className="w-full">
        <div className="bg-cream-50/95 rounded-xl p-8 md:p-12 mx-auto" style={{backgroundColor: '#fcf6e9'}}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#081826] text-center">Timeshare Genie — Now in Your Pocket</h2>
          <p className="text-center text-sm md:text-base text-gray-600 mt-4  mx-auto">Enjoy 24/7 ownership clarity from your phone. Get personalized answers, manage documents, and receive policy updates — all in one elegant app.</p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 items-center text-center">
            <Feature icon={<FaLock className="text-yellow-500 text-2xl" />} title="Secure Mobile Vault" />
            <Feature icon={<FaMobileAlt className="text-yellow-500 text-2xl" />} title="Ask Genie On the Go" />
            <Feature icon={<FaBell className="text-yellow-500 text-2xl" />} title="Instant Ownership Updates" />
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a className="inline-flex items-center bg-[#0b3146] text-white px-4 py-2 rounded-md shadow hover:opacity-95" href="#">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M318.7 268.7c.5 3.2 1 6.4 1 9.7 0 53.2-43 121.3-96.6 121.3-23.7 0-33.6-16-95.8-16-64.6 0-83.4 16-106.3 16-53.6 0-96.6-68.1-96.6-121.3 0-3.3.4-6.5 1-9.7 68.1-1 118.6-56.4 118.6-115.6C58.5 79.7 36.9 44.4 36.9 44.4c44.9-26 100.2 11.1 100.2 11.1 44 34.6 115.1 33.7 115.1 33.7s8.3-29.8 31.2-61.5c0 0 49.5-26 100.9 11.1 0 0-21.7 35.3-52.6 53.2 0 59.2 50.5 114.6 118.6 115.6z"/></svg>
              <span className="text-sm font-medium">Download on the App Store</span>
            </a>

            <a className="inline-flex items-center border border-[#0b3146] text-[#0b3146] px-4 py-2 rounded-md shadow hover:opacity-95" href="#">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M325.3 234.3C327 186 367 146 415 146c-.2 45.8-32 85.5-74.7 95.9-22.2 5.4-46.9 4.4-69 7.4zM94.1 344.9c-7.9-26.2-2.9-58.7 11.6-93.6C132.6 206 174.4 176 214.7 176c36.6 0 67.3 25.8 84.7 56.9 7.6 13.8 13.6 28.8 17.6 44.3 3.9 15.1 4.5 31.3 1.4 47.3-7.4 38.6-37.6 68-77 73.3-45.6 5.9-99.5-10.6-128.3-53.9z"/></svg>
              <span className="text-sm font-medium">GET IT ON Google Play</span>
            </a>
          </div>

          <p className="text-center text-xs text-gray-500 mt-3">Available for iOS and Android. Concierge clarity, anywhere.</p>
        </div>

        <div className="mt-16 mb-8 text-center">
          <p className="text-xl md:text-2xl text-yellow-400 max-w-4xl mx-auto opacity-80">“Built exclusively for discerning owners of Hilton, Marriott, Disney, Wyndham, and leading exchange companies. Independent. Professional. Always on your side.”</p>

          <div className="mt-8">
            <button className="bg-yellow-500 text-slate-800 px-6 py-3 rounded-md font-semibold">Unlock Your Timeshare Genie Free</button>
          </div>
        </div>
      </div>
    </section>
  )
}

function Feature({ icon, title }){
  return (
    <div className="flex flex-col items-center text-center">
      <div className="bg-white/5 rounded-full p-3 mb-3">{icon}</div>
      <div className="text-sm font-medium text-[#081826]">{title}</div>
    </div>
  )
}

export default DownloadStore