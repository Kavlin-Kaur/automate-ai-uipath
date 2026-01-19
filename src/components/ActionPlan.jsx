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
    <section className="mt-2">
      <div className="glass rounded-2xl p-6 md:p-8 gradient-border">
        <h2 className="text-xl md:text-2xl font-semibold">Action Plan</h2>
        <p className="text-white/80 text-sm mt-1">Use this 4-step approach to implement automation effectively.</p>
        <div className="mt-5 grid md:grid-cols-4 gap-4">
          {steps.map(({ title, desc, icon: Icon }, i) => (
            <div key={i} className="glass rounded-xl p-4 card-hover">
              <div className="flex items-center gap-2 mb-2">
                <div className="h-9 w-9 rounded-lg bg-white/20 flex items-center justify-center">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="font-semibold">{title}</span>
              </div>
              <p className="text-white/80 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
