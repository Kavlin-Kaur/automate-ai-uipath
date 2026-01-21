import React from 'react'
import { ListChecks, Settings, Zap, Rocket, GraduationCap } from 'lucide-react'

const steps = [
  {
    title: 'Inventory repetitive tasks',
    desc: 'List tasks with frequency and time spent to surface quick wins.',
    icon: ListChecks,
  },
  {
    title: 'Prioritize by ROI',
    desc: 'Sort by automation potential, time saved, and complexity.',
    icon: Settings,
  },
  {
    title: 'Start with quick wins',
    desc: 'Automate high-potential, low-effort tasks using no-code tools first.',
    icon: Zap,
  },
  {
    title: 'Download UiPath Studio',
    desc: 'Get Community Edition and explore templates on UiPath Marketplace.',
    icon: Rocket,
  },
  {
    title: 'Join UiPath Academy',
    desc: 'Earn free certifications and training for RPA development.',
    icon: GraduationCap,
  },
]

export default function ActionPlan() {
  return (
    <section className="mt-4">
      <div className="glass rounded-2xl p-5 sm:p-6 md:p-8 gradient-border">
        <h2 className="text-xl sm:text-2xl md:text-2xl font-semibold">Action Plan</h2>
        <p className="text-white/70 text-xs sm:text-sm mt-1">Use this 5-step approach to implement automation effectively.</p>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-4">
          {steps.map(({ title, desc, icon: Icon }, i) => (
            <div key={i} className="glass rounded-xl p-4 h-full flex flex-col card-hover group hover:bg-gradient-to-br hover:from-orange-500/15 hover:to-amber-500/10 hover:border-orange-400/30 transition-all duration-300 min-w-0">
              <div className="flex flex-col gap-3 flex-1">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-orange-500/30 to-amber-500/20 flex items-center justify-center group-hover:from-orange-500/40 group-hover:to-amber-500/30 transition-all self-start">
                  <Icon className="h-5 w-5 text-orange-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm sm:text-base leading-snug">{title}</h3>
                  <p className="text-white/70 text-xs sm:text-sm mt-1 leading-relaxed">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
