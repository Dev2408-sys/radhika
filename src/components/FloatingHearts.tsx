import { motion } from 'framer-motion'
import { useMemo } from 'react'

type FloatingHeartsProps = {
  count?: number
  density?: 'soft' | 'medium' | 'celebration'
}

const hearts = ['💗', '💕', '❤️', '🌸', '✨']

export function FloatingHearts({ count = 10, density = 'soft' }: FloatingHeartsProps) {
  const items = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${8 + ((i * 37) % 84)}%`,
      delay: (i * 0.55) % 5,
      duration: density === 'celebration' ? 4 + (i % 3) : 7 + (i % 5),
      size: density === 'celebration' ? 14 + (i % 10) : 10 + (i % 8),
      emoji: hearts[i % hearts.length],
      opacity: density === 'soft' ? 0.25 + (i % 4) * 0.08 : 0.45 + (i % 4) * 0.1,
    }))
  }, [count, density])

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {items.map((h) => (
        <motion.span
          key={h.id}
          className="absolute bottom-[-10%]"
          style={{ left: h.left, fontSize: h.size, opacity: h.opacity }}
          animate={{
            y: [0, -900],
            x: [0, Math.sin(h.id) * 28, 0],
            rotate: [0, 15, -10, 0],
          }}
          transition={{
            duration: h.duration,
            delay: h.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {h.emoji}
        </motion.span>
      ))}
    </div>
  )
}
