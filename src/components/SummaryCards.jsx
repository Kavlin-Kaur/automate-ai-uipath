import React from 'react'
import { Clock, Wallet, TrendingUp } from 'lucide-react'

export default function SummaryCards({ totalDailySavedMin, monthlySavings, yearlyImpact }) {
  const monthlyHours = (totalDailySavedMin * 22) / 60

  const cards = [
    {
      title: 'Total Time Saved (Daily)',
      value: `${Math.round(totalDailySavedMin)} min`,
      sub: `${monthlyHours.toFixed(1)} hrs / month`,
      icon: Clock,
      gradient: 'from-[#FA4616] to-[#0E2C4E]',
    },
    {
      title: 'Monthly Savings',
      value: `₹${Math.round(monthlySavings).toLocaleString()}`,
      sub: 'Estimated based on automation potential',
      icon: Wallet,
      gradient: 'from-orange-500 to-amber-400',
    },
    {
      title: 'Yearly Impact',
      value: `₹${Math.round(yearlyImpact).toLocaleString()}`,
      sub: '12 × monthly savings',
      icon: TrendingUp,
      gradient: 'from-[#0E2C4E] to-indigo-600',
    },
  ]

  return (
    <section>
      <div className="grid md:grid-cols-3 gap-6">
        {cards.map(({ title, value, sub, icon: Icon, gradient }, i) => (
          <div key={i} className="relative rounded-2xl overflow-hidden card-hover">
            <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-70`} />
            <div className="relative glass p-6 md:p-7">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-white/20 flex items-center justify-center">
                  <Icon className="h-7 w-7" />
                </div>
                <div>
                  <p className="text-white/80 text-sm">{title}</p>
                  <p className="text-2xl font-bold">{value}</p>
                  <p className="text-white/80 text-xs mt-1">{sub}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
