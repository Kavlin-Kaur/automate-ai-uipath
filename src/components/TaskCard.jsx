import React from 'react'
import { CheckCircle, AlertTriangle, Gauge, Bot, Workflow, Cpu } from 'lucide-react'

function DifficultyBadge({ level }) {
  const map = {
    Easy: { color: 'bg-green-500/20 text-green-300', Icon: CheckCircle },
    Medium: { color: 'bg-yellow-500/20 text-yellow-300', Icon: Gauge },
    Hard: { color: 'bg-red-500/20 text-red-300', Icon: AlertTriangle },
  }
  const { color, Icon } = map[level] || map.Medium
  return (
    <span className={`inline-flex items-center gap-1.5 ${color} px-2.5 py-1 rounded-full text-xs font-semibold`}>
      <Icon className="h-4 w-4" />
      {level}
    </span>
  )
}

export default function TaskCard({ task }) {
  const potentialPct = Math.round(task.potential * 100)
  return (
    <div className="glass rounded-2xl p-5 gradient-border card-hover">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold">{task.name}</h3>
          <p className="text-white/70 text-sm mt-1">Time per day: {task.timeMin} min</p>
          <p className="text-white/70 text-sm">Monthly savings: <span className="font-semibold">₹{Math.round(task.monthlySavings).toLocaleString()}</span></p>
        </div>
        <DifficultyBadge level={task.difficulty} />
      </div>

      {/* Progress bar */}
      <div className="mt-4">
        <div className="flex items-center justify-between text-xs text-white/70">
          <span>Automation Potential</span>
          <span>{potentialPct}%</span>
        </div>
        <div className="mt-2 h-2 rounded-full bg-white/10 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500"
            style={{ width: `${potentialPct}%` }}
          />
        </div>
      </div>

      <div className="mt-4 text-sm">
        <p className="text-white/80 mb-2"><span className="text-white/60">Suggestion:</span></p>
        <pre className="whitespace-pre-wrap text-white/85 text-sm">{task.suggestion}</pre>
        <div className="mt-3 text-orange-300 font-semibold">🤖 UiPath Workflow: Use {task.uipath.requiredActivities[0]} from UiPath Studio</div>
      </div>

      {/* UiPath Implementation Guide */}
      <div className="mt-5 glass rounded-xl p-4">
        <div className="flex items-center gap-2 mb-2">
          <Bot className="h-5 w-5 text-orange-300" />
          <span className="font-semibold">UiPath Implementation Guide</span>
        </div>
        <div className="grid md:grid-cols-2 gap-3 text-sm">
          <div className="flex items-start gap-2">
            <Workflow className="h-4 w-4 mt-0.5 text-white/70" />
            <div>
              <div className="text-white/70">Required Activities</div>
              <div className="text-white/85">{task.uipath.requiredActivities.join(', ')}</div>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Cpu className="h-4 w-4 mt-0.5 text-white/70" />
            <div>
              <div className="text-white/70">Bot Type</div>
              <div className="text-white/85">{task.uipath.botType}</div>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Gauge className="h-4 w-4 mt-0.5 text-white/70" />
            <div>
              <div className="text-white/70">Complexity</div>
              <div className="text-white/85">{task.uipath.complexity}</div>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle className="h-4 w-4 mt-0.5 text-white/70" />
            <div>
              <div className="text-white/70">Marketplace Template</div>
              <div className="text-white/85">{task.uipath.template}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
