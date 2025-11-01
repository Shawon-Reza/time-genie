import React from 'react'
import { FaRegLightbulb } from 'react-icons/fa'

const QuickPackageCompare = () => {
  const cards = [
    {
      title: 'Silver :',
      features: ['10 Q&As', '1 Alert', 'Snapshot', 'Calendar Sync'],
      variant: 'white'
    },
    {
      title: 'Gold :',
      features: ['100 Q&As', '3 Resort Alerts', 'Smart Summaries', 'Best-Move Tool', 'Fee Tracker', 'Year-End Plan', 'Savings Counter'],
      variant: 'gold'
    },
    {
      title: 'Platinum :',
      features: ['Unlimited Q&As', 'Portfolio Alerts', 'Automations', 'Value Dashboard', 'Annual Auto-Plan', 'Honors/Exchange Optimizers', 'Year-End Close', 'Leftover Sweeper', 'Elite Signals'],
      variant: 'gold'
    }
  ]

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-white mb-8">Quick Package Compare</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {cards.map((c, i) => (
            <CompareCard key={i} title={c.title} features={c.features} variant={c.variant} />
          ))}
        </div>

        <div className="mt-6">
          <p className="text-center text-lg md:text-2xl lg:text-3xl text-yellow-400">“ Timeshare Secrets™ — Simple tools that protect value and prevent stress.”</p>
        </div>
      </div>
    </section>
  )
}

function CompareCard({ title, features, variant = 'gold' }) {
  const borderClass = variant === 'white' ? 'border-white' : 'border-yellow-400'
  const bgClass = variant === 'white' ? 'bg-transparent' : 'bg-gradient-to-b from-[#152936] to-[#26343a]/40'
  return (
    <div className={`p-6 rounded-xl ${bgClass} border-2 ${borderClass} border-opacity-40`}>
      <div className="flex items-start mb-4">
        <div className="text-yellow-400 mr-3"><FaRegLightbulb /></div>
        <h3 className="text-white text-lg font-semibold">{title}</h3>
      </div>

      <ul className="text-gray-300 text-sm space-y-2">
        {features.map((f, idx) => (
          <li key={idx} className="inline-block">{f}{idx < features.length - 1 ? ' • ' : ''}</li>
        ))}
      </ul>
    </div>
  )
}

export default QuickPackageCompare