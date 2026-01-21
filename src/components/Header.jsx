import React from 'react'
import { Bot, Sparkles, BadgeCheck } from 'lucide-react'

export default function Header() {
  return (
    <header className="mx-auto max-w-6xl px-4 pt-6 sm:pt-8 md:pt-10 pb-4 sm:pb-6">
      <div className="relative glass rounded-2xl p-5 sm:p-6 md:p-8 gradient-border card-hover">
        <div className="absolute right-3 sm:right-4 top-3 sm:top-4">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-400 bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700 hover:bg-orange-200 transition-all">
            <BadgeCheck className="h-4 w-4 text-orange-600" />
            UiPath Compatible
          </span>
        </div>
        <div className="flex flex-col sm:flex-row items-start gap-4 pr-32 sm:pr-0">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-400 shadow-md flex-shrink-0">
            <Bot className="h-7 w-7 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight text-gray-900">
              AutoMate AI for UiPath
            </h1>
            <p className="text-gray-600 text-xs sm:text-sm md:text-base mt-1">
              Powered by UiPath Automation Platform
            </p>
            <p className="mt-2 text-gray-600 text-xs sm:text-sm md:text-base flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-orange-600 flex-shrink-0" />
              <span>Analyze repetitive tasks, prioritize automation, and quantify ROI.</span>
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}
