import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'

type ToastProps = {
  message: string | null
  onDone?: () => void
  duration?: number
}

export function Toast({ message, onDone, duration = 2200 }: ToastProps) {
  useEffect(() => {
    if (!message) return
    const t = window.setTimeout(() => onDone?.(), duration)
    return () => window.clearTimeout(t)
  }, [message, duration, onDone])

  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.98 }}
          className="pointer-events-none absolute bottom-24 left-4 right-4 z-40 mx-auto max-w-sm"
        >
          <div className="glass-card rounded-2xl px-4 py-3 text-center text-sm leading-relaxed text-burgundy shadow-lg">
            {message}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
