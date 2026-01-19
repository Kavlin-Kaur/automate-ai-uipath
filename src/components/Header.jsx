import React from 'react'
import { Bot, Sparkles, BadgeCheck } from 'lucide-react'

export default function Header() {
  return (
    <header className="mx-auto max-w-6xl px-4 pt-10 pb-6">
      <div className="relative glass rounded-2xl p-6 md:p-8 gradient-border card-hover">
        <div className="absolute right-4 top-4">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#FA4616] bg-white/10 px-3 py-1 text-xs font-semibold text-white">
            <BadgeCheck className="h-4 w-4 text-[#FA4616]" />
            UiPath Compatible
          </span>
        </div>
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#FA4616] to-orange-400 shadow-glow">
            <Bot className="h-7 w-7" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold leading-tight">
              AutoMate AI for UiPath
            </h1>
            <p className="text-white/80 text-sm md:text-base">
              Powered by UiPath Automation Platform
            </p>
            <p className="mt-2 text-white/80 text-sm md:text-base flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-orange-300" />
              Analyze repetitive tasks, prioritize automation, and quantify ROI.
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}
