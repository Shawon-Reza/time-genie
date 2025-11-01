import React from 'react'
import { FaCheck } from 'react-icons/fa'
import { GiCheckMark } from 'react-icons/gi'
import { IoMdCheckmark } from 'react-icons/io'

const PremiumPackage = () => {
  return (
    <section className="  px-4 sm:px-6 lg:px-8">
      <div className="w-full">
        <div className="text-center mb-8 xl:mb-12">
          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-white">Premium Package</h2>
        </div>

        <div className="grid grid-cols-1  lg:grid-cols-3 gap-6 items-start max-w-7xl mx-auto">
          <PricingCard
            ribbonText="Best For New Owners"
            price="$0.00/mth"
            tier="Silver"
            smallNote="Forever Free"
            ctaText="Join Free"
            variant="outline"
            features={[
              "Instant Snapshot after linking HGV/Hilton/RCI/Interval: what you own + next 3 deadlines.",
              "Ask the Genie: 10 questions/month.",
              "1 Smart Alert for 1 resort: choose booking window or points expiring.",
              "Vault Lite (200 MB) for documents.",
              "Basics Library: simple guides and red-flag tips.",
              "“Why?” on every alert: the rule, the risk, the action."
            ]}
          />

          <PricingCard
            ribbonText="For Owners Who Act Fast"
            price="$14.99/mth"
            tier="Gold Elite"
            smallNote="14 Day Free Trial"
            ctaText="Start Free 7-Day Trial"
            variant="primary"
            features={[
              "Ask the Genie: 100 questions/month (ask from any screen).",
              "Smart Alerts for up to 3 resorts/programs: booking opens, upgrades, cancellations, points expiring, maintenance fees due.",
              "Smart Document Summaries + Highlights: bank-by dates, blackout rules, cancellation windows, fees.",
              "Best-Move Tool with clear math: Use, Bank, Exchange (RCI/II), or Convert to Hilton Honors.",
              "Value Guard: cost-per-night and bad-value warnings with better options.",
              "Maintenance Fee Tracker: year-over-year trend, peer benchmark, mischarge flag.",
              "Year-End Plan (60-day countdown): expirations/fees/credits with auto-calendar entries.",
              "Savings Counter (in app + monthly email): expiries prevented, late fees avoided, value improvements in $."
            ]}
          />

          <PricingCard
            ribbonText="Smart Management For Busy Owners"
            price="$29.99/mth"
            tier="Platinum Premier"
            smallNote="Surprise Deals"
            ctaText="Go Platinum"
            variant="primary"
            features={[
              "Unlimited Genie + Deep Research (long docs, side-by-side comparisons).",
              "Portfolio-wide Smart Alerts + Action Cards for all linked resorts/programs.",
              "Light Automations with guardrails: exchange match + pre-approved holds; auto-add all key dates to your calendar.",
              "Ownership Value Dashboard: points, deadlines, wins, and total dollars saved YTD.",
              "Annual Auto-Plan: when to book, bank, exchange, or convert—approve and apply.",
              "Honors Conversion Coach: instant save/lose verdicts using your ratios and MF costs.",
              "Exchange Value Scenarios (RCI/II): trade-power guidance and deposit-timing suggestions.",
              "Elite Progress Signals: track progress to next HGV tier and lowest-cost ways to get there.",
              "Year-End Close (90/60/30/14-day): reconciles points, fees, Open Season/resort credits; “Approve All” with undo where allowed.",
              "Leftover Sweeper: short-notice uses or safe storage for old balances.",
              "Activity Log + Undo + Trust Score: see every action, receipt, and data confidence."
            ]}
          />
        </div>
      </div>
    </section>
  )
}

function PricingCard({ ribbonText, price, tier, smallNote, ctaText, features, variant = 'outline' }) {
  const primary = variant === 'primary'




  return (
    <div className={`relative bg-linear-to-b from-[#0f2a3f] to-[#0b2130] border ${primary ? 'border-yellow-400/80' : 'border-yellow-400/30'} rounded-2xl p-0 overflow-hidden flex flex-col justify-between min-h-[520px] `}>

  



      {/* top ribbon */}
      <div className="bg-white rounded-t-lg text-center py-2">
        <span className="text-sm sm:text-lg text-yellow-600 font-semibold tracking-wider">{ribbonText}</span>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className='text-center'>
            <div className="text-4xl font-extrabold text-white">{price}</div>
            <div className="text-sm text-yellow-300 mt-2 mb-3">{tier}</div>

            <div className="inline-block bg-yellow-50/5 border border-yellow-400/40 text-yellow-300 text-sm px-3 py-1 rounded-md mb-6">{smallNote}</div>
          </div>

          <div className="space-y-3 text-sm text-gray-300 mb-6">
            {features.map((f, i) => (
              <div className="flex items-start gap-1" key={i}>
                <div className="shrink-0 w-7 h-7 rounded-full bg-[#FFF6D2] flex items-center justify-center mr-3 mt-1 p-1.5">
                  <GiCheckMark
                    size={20}
                    className="text-[#D7AB42] text-[12px]" />
                </div>
                <div className='text-sm sm:text-lg md:text-xl'>{f}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <button className={`w-full ${primary ? 'bg-yellow-500 text-slate-800 hover:bg-yellow-600' : 'bg-transparent border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-slate-800'} py-3 rounded-md font-semibold transition`}>{ctaText}</button>
        </div>
      </div>
    </div>
  )
}

export default PremiumPackage