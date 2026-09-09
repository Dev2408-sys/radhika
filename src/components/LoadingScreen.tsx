import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { GIRL_NAME } from '../config'
import { FloatingHearts } from './FloatingHearts'

type LoadingScreenProps = {
  onComplete: () => void
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const doneRef = useRef(false)

  useEffect(() => {
    let frame = 0
    const id = window.setInterval(() => {
      frame += 1
      setProgress((p) => {
        const next = Math.min(100, p + (frame < 8 ? 7 : frame < 16 ? 4 : 2) + Math.random() * 3)
        if (next >= 100 && !doneRef.current) {
          doneRef.current = true
          window.clearInterval(id)
          window.setTimeout(onComplete, 450)
        }
        return next
      })
    }, 90)
    return () => window.clearInterval(id)
  }, [onComplete])

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center soft-glow safe-pad px-8">
      <FloatingHearts count={8} density="soft" />
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-sm text-center"
      >
        <p className="font-script text-3xl text-rose mb-2">with love</p>
        <h1 className="font-serif text-2xl leading-snug text-burgundy sm:text-[1.7rem]">
          Preparing something special for {GIRL_NAME}... ❤️
        </h1>

        <div className="mt-10 mx-auto w-full max-w-[240px]">
          <div className="h-2.5 overflow-hidden rounded-full bg-white/70 border border-pink-soft/50">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-pink-soft to-rose"
              animate={{ width: `${progress}%` }}
              transition={{ ease: 'easeOut', duration: 0.2 }}
            />
          </div>
          <p className="mt-3 text-sm font-medium tracking-wide text-burgundy/60">
            {Math.floor(progress)}%
          </p>
        </div>
      </motion.div>
    </div>
  )
}
