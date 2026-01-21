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
      gradient: 'from-orange-200 to-amber-100',
    },
    {
      title: 'Monthly Savings',
      value: `₹${Math.round(monthlySavings).toLocaleString()}`,
      sub: 'Estimated based on automation potential',
      icon: Wallet,
      gradient: 'from-orange-100 to-amber-200',
    },
    {
      title: 'Yearly Impact',
      value: `₹${Math.round(yearlyImpact).toLocaleString()}`,
      sub: '12 × monthly savings',
      icon: TrendingUp,
      gradient: 'from-amber-200 to-orange-100',
    },
  ]

  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {cards.map(({ title, value, sub, icon: Icon, gradient }, i) => (
          <div key={i} className="relative rounded-2xl overflow-hidden card-hover group">
            <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-100 group-hover:opacity-90 transition-opacity duration-300`} />
            <div className="relative glass p-5 sm:p-6 md:p-7 group-hover:bg-white transition-all duration-300">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                <div className="h-12 w-12 rounded-xl bg-orange-300/40 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-400/50 transition-all group-hover:scale-110">
                  <Icon className="h-6 w-6 text-orange-700" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-gray-600 text-xs sm:text-sm">{title}</p>
                  <p className="text-xl sm:text-2xl font-bold mt-1 text-gray-900">{value}</p>
                  <p className="text-gray-500 text-xs mt-1.5">{sub}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
