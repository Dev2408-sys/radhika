import { AnimatePresence, motion } from 'framer-motion'
import type { ReactNode } from 'react'

type PageTransitionProps = {
  pageKey: string | number
  children: ReactNode
  direction?: number
}

export function PageTransition({ pageKey, children, direction = 1 }: PageTransitionProps) {
  return (
    <AnimatePresence mode="wait" custom={direction}>
      <motion.div
        key={pageKey}
        custom={direction}
        initial={{ opacity: 0, y: 18 * direction, scale: 0.985, filter: 'blur(4px)' }}
        animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
        exit={{ opacity: 0, y: -12 * direction, scale: 1.01, filter: 'blur(3px)' }}
        transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 flex flex-col"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
