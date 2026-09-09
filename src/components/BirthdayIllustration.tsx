import { motion } from 'framer-motion'

export function BirthdayIllustration() {
  return (
    <div className="relative h-36 w-44">
      <div className="absolute inset-0 rounded-full bg-pink-soft/40 blur-2xl" />
      <motion.div
        className="relative flex h-full flex-col items-center justify-end"
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Cake */}
        <svg viewBox="0 0 140 120" className="h-32 w-auto drop-shadow-md" aria-hidden>
          <ellipse cx="70" cy="98" rx="48" ry="8" fill="#f0d4de" opacity="0.7" />
          <rect x="30" y="62" width="80" height="36" rx="8" fill="#fff8f3" stroke="#f5d0d8" />
          <path d="M30 74 Q50 66 70 74 Q90 82 110 74 L110 82 Q90 90 70 82 Q50 74 30 82 Z" fill="#f5d0d8" />
          <rect x="38" y="48" width="64" height="20" rx="6" fill="#ffe8ef" stroke="#e8a0b0" />
          <path d="M38 56 Q54 50 70 56 Q86 62 102 56 L102 62 Q86 68 70 62 Q54 56 38 62 Z" fill="#e8a0b0" />
          {/* Candles */}
          <rect x="52" y="30" width="5" height="20" rx="2" fill="#c45c7a" />
          <rect x="68" y="26" width="5" height="24" rx="2" fill="#a34460" />
          <rect x="84" y="32" width="5" height="18" rx="2" fill="#c45c7a" />
          <ellipse cx="54.5" cy="28" rx="3" ry="5" fill="#ffb347" />
          <ellipse cx="70.5" cy="24" rx="3" ry="5" fill="#ffb347" />
          <ellipse cx="86.5" cy="30" rx="3" ry="5" fill="#ffb347" />
          {/* Flowers */}
          <circle cx="24" cy="88" r="7" fill="#f5d0d8" />
          <circle cx="24" cy="88" r="3" fill="#c45c7a" />
          <circle cx="116" cy="90" r="6" fill="#ffd6e0" />
          <circle cx="116" cy="90" r="2.5" fill="#c45c7a" />
        </svg>
        <span className="absolute left-2 top-4 text-sm opacity-70">💕</span>
        <span className="absolute right-1 top-8 text-xs opacity-60">✨</span>
        <span className="absolute right-6 top-2 text-sm opacity-70">🌸</span>
      </motion.div>
    </div>
  )
}
