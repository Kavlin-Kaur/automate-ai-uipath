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
      <div className="glass rounded-2xl p-5 sm:p-6 md:p-8 card-hover">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="flex flex-col">
            <label className="block text-sm font-medium text-white/80 mb-2">
              Daily repetitive tasks (one per line)
            </label>
            <textarea
              value={tasksInput}
              onChange={(e) => setTasksInput(e.target.value)}
              rows={6}
              placeholder={"Example:\nGenerate weekly dashboards\nManually upload invoices\nPrepare client status updates"}
              className="flex-1 glass rounded-xl p-3 sm:p-4 outline-none focus:ring-2 ring-orange-400/60 text-white placeholder:text-white/50 text-sm"
            />
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">
                Hourly rate (₹)
              </label>
              <div className="flex items-center gap-3">
                <div className="glass rounded-xl p-3 flex-shrink-0">
                  <Wallet className="h-5 w-5 text-[#FA4616]" />
                </div>
                <input
                  type="number"
                  min={1}
                  step={1}
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(e.target.value)}
                  className="flex-1 glass rounded-xl p-3 outline-none focus:ring-2 ring-orange-400/60 text-white placeholder:text-white/50 text-sm"
                  placeholder="Enter your hourly rate"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <button
                onClick={onAnalyze}
                disabled={!canAnalyze || loading}
                className="relative inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold shadow-lg shadow-orange-500/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed enabled:hover:shadow-orange-500/50 enabled:hover:scale-105 bg-gradient-to-r from-[#FA4616] via-orange-500 to-amber-400 hover:from-orange-600 hover:via-orange-400 hover:to-yellow-300 text-white w-full md:w-auto"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    <span className="hidden sm:inline">Analyzing...</span>
                  </>
                ) : (
                  <>Analyze</>
                )}
              </button>
              {!canAnalyze && (
                <span className="text-white/70 text-xs sm:text-sm">Enter tasks and a valid rate to analyze.</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
