# AutoMate AI - Process Automation Advisor

A professional, AI-inspired frontend tool that analyzes repetitive tasks and recommends automation with estimated ROI. Built with React, Vite, Tailwind CSS, and lucide-react.

## Features
- Multi-line task input and hourly rate (₹)
- Per-task analysis: time per day, automation potential, difficulty, monthly savings, suggestions
- Summary cards: total time saved, monthly savings, yearly impact
- Task breakdown with progress bars and difficulty badges
- Action plan with four next steps
- Modern gradient + glassmorphism design, responsive, and animated

## Tech Stack
- React 18 (functional components + hooks)
- Vite
- Tailwind CSS
- lucide-react (icons)

## Requirements
- Node.js 18+ (recommended)
- npm or pnpm or yarn

## Setup

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Tailwind Configuration
- Tailwind is configured via `tailwind.config.js` and `postcss.config.js`.
- Content scanning includes `index.html` and all files under `src/**/*.{js,jsx,ts,tsx}`.
- Base styles and reusable utilities live in `src/index.css` (gradient background, glass, card-hover, fade-in).

## Project Structure
- `index.html`: Vite entry file
- `src/main.jsx`: React entry
- `src/App.jsx`: App layout, analysis logic, and sections
- `src/index.css`: Tailwind directives + custom utilities
- `src/components/`: Header, InputSection, SummaryCards, TaskCard, ActionPlan

## Notes
- Currency uses the rupee symbol (₹) in UI and calculations.
- Working days per month assumed as 22 for ROI estimates.
- Difficulty and potential are heuristic/randomized for demo purposes.
- Icons are from `lucide-react` and chosen for high compatibility (e.g., `Wallet`, `Clock`, `TrendingUp`).

## Customization
- Adjust gradients or glass effects in `src/index.css`.
- Tweak difficulty thresholds or suggestions in `src/App.jsx`.
- Replace icons by importing any available symbol from `lucide-react`.
