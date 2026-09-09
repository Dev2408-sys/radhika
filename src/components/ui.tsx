import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type FadeInProps = {
  children: ReactNode
  delay?: number
  className?: string
  y?: number
}

export function FadeIn({ children, delay = 0, className = '', y = 14 }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

type GlassCardProps = {
  children: ReactNode
  className?: string
  delay?: number
}

export function GlassCard({ children, className = '', delay = 0 }: GlassCardProps) {
  return (
    <FadeIn delay={delay} className={['glass-card rounded-3xl p-5', className].join(' ')}>
      {children}
    </FadeIn>
  )
}
