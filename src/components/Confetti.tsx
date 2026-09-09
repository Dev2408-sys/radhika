import { motion } from 'framer-motion'
import { useMemo } from 'react'

type ConfettiProps = {
  active: boolean
}

const colors = ['#c45c7a', '#f5d0d8', '#e8a0b0', '#fff8f3', '#a34460', '#ffd6e0', '#ffb7c5']

export function Confetti({ active }: ConfettiProps) {
  const pieces = useMemo(
    () =>
      Array.from({ length: 48 }, (_, i) => ({
        id: i,
        left: `${(i * 17) % 100}%`,
        delay: (i % 12) * 0.05,
        duration: 2.2 + (i % 5) * 0.35,
        color: colors[i % colors.length],
        size: 6 + (i % 5),
        rotate: (i * 47) % 360,
        isHeart: i % 5 === 0,
      })),
    [],
  )

  if (!active) return null

  return (
    <div className="pointer-events-none absolute inset-0 z-50 overflow-hidden" aria-hidden>
      {pieces.map((p) => (
        <motion.div
          key={p.id}
          className="absolute top-[-5%]"
          style={{ left: p.left }}
          initial={{ y: 0, opacity: 1, rotate: 0, scale: 0.6 }}
          animate={{
            y: '110vh',
            opacity: [1, 1, 0],
            rotate: p.rotate + 180,
            scale: 1,
          }}
          transition={{ duration: p.duration, delay: p.delay, ease: 'easeOut' }}
        >
          {p.isHeart ? (
            <span style={{ fontSize: p.size + 6 }}>❤️</span>
          ) : (
            <span
              className="block rounded-sm"
              style={{
                width: p.size,
                height: p.size * 1.4,
                background: p.color,
              }}
            />
          )}
        </motion.div>
      ))}
    </div>
  )
}
