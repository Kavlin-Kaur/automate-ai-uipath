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
    <div className="glass rounded-2xl p-5 sm:p-6 gradient-border card-hover group hover:bg-orange-50/50 transition-all duration-300">
      <div className="flex flex-col sm:flex-row items-start justify-between gap-3 sm:gap-4">
        <div className="flex-1 min-w-0">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900">{task.name}</h3>
          <p className="text-gray-600 text-xs sm:text-sm mt-1">Time per day: {task.timeMin} min</p>
          <p className="text-gray-600 text-xs sm:text-sm">Monthly savings: <span className="font-semibold text-orange-600">₹{Math.round(task.monthlySavings).toLocaleString()}</span></p>
        </div>
        <DifficultyBadge level={task.difficulty} />
      </div>

      {/* Progress bar */}
      <div className="mt-4">
        <div className="flex items-center justify-between text-xs text-gray-600">
          <span>Automation Potential</span>
          <span className="font-semibold text-orange-600">{potentialPct}%</span>
        </div>
        <div className="mt-2 h-2.5 rounded-full bg-gray-200 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-orange-500 via-orange-600 to-amber-500 shadow-md"
            style={{ width: `${potentialPct}%` }}
          />
        </div>
      </div>

      <div className="mt-4 text-sm">
        <p className="text-gray-700 mb-2"><span className="text-gray-500">Suggestion:</span></p>
        <pre className="whitespace-pre-wrap text-gray-700 text-xs sm:text-sm font-mono overflow-x-auto">{task.suggestion}</pre>
        <div className="mt-3 text-orange-600 font-semibold text-xs sm:text-sm flex items-center gap-2"><span>⚡</span> UiPath Workflow: Use {task.uipath.requiredActivities[0]} from UiPath Studio</div>
      </div>

      {/* UiPath Implementation Guide */}
      <div className="mt-5 glass rounded-xl p-4 border-orange-300">
        <div className="flex items-center gap-2 mb-3">
          <Bot className="h-5 w-5 text-orange-600" />
          <span className="font-semibold text-sm text-gray-900">UiPath Implementation Guide</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
          <div className="flex items-start gap-2">
            <Workflow className="h-4 w-4 mt-0.5 text-orange-600 flex-shrink-0" />
            <div className="min-w-0">
              <div className="text-gray-600 text-xs">Required Activities</div>
              <div className="text-gray-800 text-xs sm:text-sm break-words">{task.uipath.requiredActivities.join(', ')}</div>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Cpu className="h-4 w-4 mt-0.5 text-orange-600 flex-shrink-0" />
            <div>
              <div className="text-gray-600 text-xs">Bot Type</div>
              <div className="text-gray-800 text-xs sm:text-sm">{task.uipath.botType}</div>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Gauge className="h-4 w-4 mt-0.5 text-orange-600 flex-shrink-0" />
            <div>
              <div className="text-gray-600 text-xs">Complexity</div>
              <div className="text-gray-800 text-xs sm:text-sm">{task.uipath.complexity}</div>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle className="h-4 w-4 mt-0.5 text-orange-600 flex-shrink-0" />
            <div className="min-w-0">
              <div className="text-gray-600 text-xs">Marketplace Template</div>
              <div className="text-gray-800 text-xs sm:text-sm break-words">{task.uipath.template}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
