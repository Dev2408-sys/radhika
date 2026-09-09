import { motion } from 'framer-motion'
import { TOTAL_CHAPTERS } from '../config'

type ProgressIndicatorProps = {
  chapter: number
  visible?: boolean
}

export function ProgressIndicator({ chapter, visible = true }: ProgressIndicatorProps) {
  if (!visible || chapter < 1 || chapter > TOTAL_CHAPTERS) return null

  const padded = String(chapter).padStart(2, '0')
  const total = String(TOTAL_CHAPTERS).padStart(2, '0')

  return (
    <motion.div
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      className="pointer-events-none absolute left-0 right-0 top-0 z-30 flex justify-center pt-[max(0.65rem,env(safe-area-inset-top))]"
    >
      <div className="rounded-full bg-white/55 px-3.5 py-1.5 text-[0.7rem] font-medium tracking-wide text-burgundy/70 shadow-sm backdrop-blur-md border border-white/70">
        Chapter {padded} of {total} <span className="text-rose">❤️</span>
      </div>
    </motion.div>
  )
}
