import { useState } from 'react'
import { SoftButton } from '../components/SoftButton'
import { FloatingHearts } from '../components/FloatingHearts'
import { PageLayout } from '../components/PageLayout'
import { FadeIn, GlassCard } from '../components/ui'
import { GIRL_NAME } from '../config'
import { motion, AnimatePresence } from 'framer-motion'

type Props = { onNext: () => void }

export function Page1SecretEntry({ onNext }: Props) {
  const [burst, setBurst] = useState(false)

  const handleClick = () => {
    setBurst(true)
    window.setTimeout(onNext, 700)
  }

  return (
    <PageLayout>
      <FloatingHearts count={9} />
      <div className="relative z-10 flex flex-1 flex-col justify-center gap-6 px-1">
        <FadeIn>
          <p className="font-script text-[2rem] text-rose leading-none">Hey {GIRL_NAME}...</p>
          <span className="text-2xl">❤️</span>
        </FadeIn>

        <FadeIn delay={0.15}>
          <h1 className="font-serif text-[1.85rem] leading-tight text-burgundy">
            I made something for you.
          </h1>
          <p className="mt-2 text-sm text-burgundy/60">
            A little love letter... and a forever promise.
          </p>
        </FadeIn>

        <GlassCard delay={0.3} className="text-center">
          <p className="text-[0.95rem] leading-relaxed text-burgundy/80">
            Before you continue...
            <br />
            I need you to promise me one thing.
          </p>
        </GlassCard>

        <FadeIn delay={0.45} className="mt-2">
          <SoftButton onClick={handleClick}>Okay, I promise 💗</SoftButton>
        </FadeIn>
      </div>

      <AnimatePresence>
        {burst && (
          <motion.div
            className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {[...Array(8)].map((_, i) => (
              <motion.span
                key={i}
                className="absolute text-2xl"
                initial={{ scale: 0, x: 0, y: 0, opacity: 1 }}
                animate={{
                  scale: 1.2,
                  x: Math.cos((i / 8) * Math.PI * 2) * 70,
                  y: Math.sin((i / 8) * Math.PI * 2) * 70,
                  opacity: 0,
                }}
                transition={{ duration: 0.65, ease: 'easeOut' }}
              >
                💗
              </motion.span>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </PageLayout>
  )
}
