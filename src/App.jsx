import React, { useMemo, useState } from 'react'
import Header from './components/Header'
import InputSection from './components/InputSection'
import SummaryCards from './components/SummaryCards'
import TaskCard from './components/TaskCard'
import ActionPlan from './components/ActionPlan'
import Footer from './components/Footer'

const workingDaysPerMonth = 22

// Generate deterministic "pseudo-random" values based on task name hash
function hashCode(str) {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash // Convert to 32-bit integer
  }
  return Math.abs(hash)
}

function seededRandom(seed, min, max) {
  const x = Math.sin(seed) * 10000
  return min + (x - Math.floor(x)) * (max - min)
}

function getConsistentTimeMin(taskName) {
  const seed = hashCode(taskName)
  return Math.floor(seededRandom(seed, 30, 150))
}

function getConsistentPotential(taskName) {
  const seed = hashCode(taskName) * 2
  return seededRandom(seed, 0.6, 1.0)
}

function getDifficulty(potential) {
  if (potential >= 0.85) return 'Easy'
  if (potential >= 0.72) return 'Medium'
  return 'Hard'
}

function suggestionFor(difficulty) {
  switch (difficulty) {
    case 'Easy':
      return (
        'Build this automation in UiPath Studio using:\n' +
        '- Excel Activities (Read Range, Write Range)\n' +
        '- Email Activities (Get Outlook Mail)\n' +
        '- File Operations\n' +
        'Estimated build time: 1-2 hours\n' +
        "Template: Use 'Excel Automation' from UiPath Marketplace"
      )
    case 'Medium':
      return (
        'Build this automation in UiPath Studio using:\n' +
        '- Web Automation (Data Scraping)\n' +
        '- Orchestrator Queue Integration\n' +
        '- REFramework template\n' +
        'Estimated build time: 4-6 hours\n' +
        "Template: Use 'Web Data Extraction' from UiPath Marketplace"
      )
    case 'Hard':
      return (
        'Build this automation in UiPath Studio using:\n' +
        '- Document Understanding\n' +
        '- Machine Learning Skills\n' +
        '- API Integration\n' +
        'Estimated build time: 8-12 hours\n' +
        "Template: Use 'Intelligent Document Processing' from UiPath"
      )
    default:
      return 'Use UiPath Studio with best-practice templates to accelerate delivery.'
  }
}

function uipathGuideFor(difficulty) {
  if (difficulty === 'Easy') {
    return {
      requiredActivities: [
        'Excel: Read Range, Write Range',
        'Mail: Get Outlook Mail Messages',
        'File: Move/Copy/Delete',
      ],
      botType: 'Attended',
      complexity: 'Low',
      template: 'Excel Automation (UiPath Marketplace)',
      estimated: '1-2 hours',
    }
  }
  if (difficulty === 'Medium') {
    return {
      requiredActivities: [
        'UI/Web: Data Scraping/Wizard',
        'Orchestrator: Queues, Transactions',
        'Framework: REFramework',
      ],
      botType: 'Unattended',
      complexity: 'Medium',
      template: 'Web Data Extraction (UiPath Marketplace)',
      estimated: '4-6 hours',
    }
  }
  return {
    requiredActivities: [
      'Document Understanding: Classify, Data Extraction',
      'ML Skills: Endpoint Integration',
      'HTTP/REST: API Integration',
    ],
    botType: 'Unattended',
    complexity: 'High',
    template: 'Intelligent Document Processing (UiPath)',
    estimated: '8-12 hours',
  }
}

export default function App() {
  const [tasksInput, setTasksInput] = useState('Prepare daily sales report\nCopy data from emails to spreadsheet\nUpdate CRM with new leads')
  const [hourlyRate, setHourlyRate] = useState(1000) // ₹
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState([])
  const [analyzed, setAnalyzed] = useState(false)

  const canAnalyze = useMemo(() => {
    const lines = tasksInput.split('\n').map(s => s.trim()).filter(Boolean)
    return lines.length > 0 && Number(hourlyRate) > 0
  }, [tasksInput, hourlyRate])

  const handleAnalyze = async () => {
    if (!canAnalyze) return
    setLoading(true)

    // Simulate analysis latency for UX
    await new Promise(res => setTimeout(res, 800))

    const taskLines = tasksInput.split('\n').map(s => s.trim()).filter(Boolean)
    const computed = taskLines.map(name => {
      const timeMin = getConsistentTimeMin(name)
      const potential = getConsistentPotential(name)
      const difficulty = getDifficulty(potential)
      const dailySavedMin = timeMin * potential
      const monthlyHoursSaved = (dailySavedMin * workingDaysPerMonth) / 60
      const monthlySavings = monthlyHoursSaved * Number(hourlyRate)
      const guide = uipathGuideFor(difficulty)
      return {
        name,
        timeMin,
        potential,
        difficulty,
        suggestion: suggestionFor(difficulty),
        dailySavedMin,
        monthlyHoursSaved,
        monthlySavings,
        uipath: guide,
      }
    })

    setResults(computed)
    setAnalyzed(true)
    setLoading(false)
  }

  const summary = useMemo(() => {
    const totalDailySavedMin = results.reduce((acc, r) => acc + r.dailySavedMin, 0)
    const monthlySavings = results.reduce((acc, r) => acc + r.monthlySavings, 0)
    const yearlyImpact = monthlySavings * 12
    return { totalDailySavedMin, monthlySavings, yearlyImpact }
  }, [results])

  return (
    <div className="min-h-screen">
      <div className="relative">
        {/* Decorative gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900" />
        <div className="relative">
          <Header />
          <main className="mx-auto max-w-6xl px-4 pb-16">
            <InputSection
              tasksInput={tasksInput}
              setTasksInput={setTasksInput}
              hourlyRate={hourlyRate}
              setHourlyRate={setHourlyRate}
              onAnalyze={handleAnalyze}
              loading={loading}
              canAnalyze={canAnalyze}
            />

            {analyzed && (
              <div className="space-y-8 fade-in">
                <SummaryCards
                  totalDailySavedMin={summary.totalDailySavedMin}
                  monthlySavings={summary.monthlySavings}
                  yearlyImpact={summary.yearlyImpact}
                />

                {/* Task Breakdown */}
                <section className="mt-2">
                  <h2 className="text-xl md:text-2xl font-semibold mb-4">Task Breakdown</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {results.map((task, idx) => (
                      <TaskCard key={idx} task={task} />
                    ))}
                  </div>
                </section>

                {/* Action Plan */}
                <ActionPlan />

                {/* Export Button */}
                <section className="mt-2">
                  <div className="glass rounded-2xl p-6 gradient-border flex items-center justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold">Download UiPath Implementation Plan</h3>
                      <p className="text-white/70 text-sm">Export tasks with activities, estimates, and templates.</p>
                    </div>
                    <button
                      onClick={() => {
                        const lines = []
                        lines.push('AutoMate AI for UiPath — Implementation Plan')
                        lines.push('')
                        results.forEach((t, i) => {
                          lines.push(`${i + 1}. Task: ${t.name}`)
                          lines.push(`   Time/Day: ${t.timeMin} min`)
                          lines.push(`   Automation Potential: ${Math.round(t.potential * 100)}%`)
                          lines.push(`   Difficulty: ${t.difficulty}`)
                          lines.push(`   Monthly Savings (₹): ${Math.round(t.monthlySavings).toLocaleString()}`)
                          lines.push('   UiPath Suggestion:')
                          t.suggestion.split('\n').forEach(l => lines.push(`     ${l}`))
                          lines.push('   UiPath Implementation Guide:')
                          lines.push(`     Required Activities: ${t.uipath.requiredActivities.join(', ')}`)
                          lines.push(`     Bot Type: ${t.uipath.botType}`)
                          lines.push(`     Complexity: ${t.uipath.complexity}`)
                          lines.push(`     Marketplace Template: ${t.uipath.template}`)
                          lines.push(`     Estimated Build Time: ${t.uipath.estimated}`)
                          lines.push('')
                        })
                        const blob = new Blob([lines.join('\n')], { type: 'text/plain;charset=utf-8' })
                        const url = URL.createObjectURL(blob)
                        const a = document.createElement('a')
                        a.href = url
                        a.download = 'uipath-implementation-plan.txt'
                        document.body.appendChild(a)
                        a.click()
                        a.remove()
                        URL.revokeObjectURL(url)
                      }}
                      className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold bg-gradient-to-r from-[#FA4616] via-orange-500 to-amber-400 hover:from-orange-500 hover:to-amber-300 transition-colors"
                    >
                      Download
                    </button>
                  </div>
                </section>
              </div>
            )}
          </main>
        </div>
      </div>
      <Footer />
    </div>
  )
}
