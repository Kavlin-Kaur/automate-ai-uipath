import React from 'react'
import { Wallet, Loader2 } from 'lucide-react'

export default function InputSection({
  tasksInput,
  setTasksInput,
  hourlyRate,
  setHourlyRate,
  onAnalyze,
  loading,
  canAnalyze,
}) {
  return (
    <section className="space-y-4">
      <div className="glass rounded-2xl p-6 md:p-8 card-hover">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-white/80 mb-2">
              Daily repetitive tasks (one per line)
            </label>
            <textarea
              value={tasksInput}
              onChange={(e) => setTasksInput(e.target.value)}
              rows={8}
              placeholder={"Example:\nGenerate weekly dashboards\nManually upload invoices\nPrepare client status updates"}
              className="w-full glass rounded-xl p-4 outline-none focus:ring-2 ring-indigo-400/60 text-white placeholder:text-white/50"
            />
          </div>
          <div className="flex flex-col">
            <label className="block text-sm font-medium text-white/80 mb-2">
              Hourly rate (₹)
            </label>
            <div className="flex items-center gap-3">
              <div className="glass rounded-xl p-3">
                <Wallet className="h-5 w-5 text-[\#FA4616]" />
              </div>
              <input
                type="number"
                min={1}
                step={1}
                value={hourlyRate}
                onChange={(e) => setHourlyRate(e.target.value)}
                className="flex-1 glass rounded-xl p-3 outline-none focus:ring-2 ring-indigo-400/60 text-white placeholder:text-white/50"
                placeholder="Enter your hourly rate"
              />
            </div>

            <div className="mt-6 flex items-center gap-3">
              <button
                onClick={onAnalyze}
                disabled={!canAnalyze || loading}
                className="relative inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold shadow-glow transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed bg-gradient-to-r from-[#FA4616] via-orange-500 to-amber-400 hover:from-orange-500 hover:to-amber-300"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>Analyze</>
                )}
              </button>
              {!canAnalyze && (
                <span className="text-white/70 text-sm">Enter tasks and a valid rate to analyze.</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
