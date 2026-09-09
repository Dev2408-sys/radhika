import { useEffect, useState } from 'react'
import { PageLayout } from '../components/PageLayout'
import { FadeIn } from '../components/ui'
import { YesNoQuestion } from '../components/YesNoQuestion'
import { FloatingHearts } from '../components/FloatingHearts'
import { motion, AnimatePresence } from 'framer-motion'
import { GIRL_NAME } from '../config'

type Props = { onYes: () => void }

export function Page11FinalQuestion({ onYes }: Props) {
  const [showQuestion, setShowQuestion] = useState(false)

  useEffect(() => {
    const t = window.setTimeout(() => setShowQuestion(true), 1600)
    return () => window.clearTimeout(t)
  }, [])

  return (
    <PageLayout className="!bg-gradient-to-b from-[#ffe8ef] via-[#f8e8ee] to-[#fff1e8]">
      <FloatingHearts count={7} density="soft" />
      <div className="relative z-10 flex flex-1 flex-col justify-center gap-5">
        <FadeIn>
          <h1 className="font-serif text-center text-[1.7rem] text-burgundy">Before you leave...</h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-center text-sm text-burgundy/70">
            {GIRL_NAME}, I have one very important question.
          </p>
        </FadeIn>

        <AnimatePresence>
          {!showQuestion && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex justify-center py-2"
            >
              <motion.span
                animate={{ scale: [1, 1.15, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.2, repeat: Infinity }}
                className="text-2xl"
              >
                💍
              </motion.span>
            </motion.div>
          )}
        </AnimatePresence>

        {showQuestion && (
          <>
            <FadeIn>
              <p className="font-serif text-center text-[1.2rem] leading-snug text-burgundy px-1">
                Will you keep choosing me,
                <br />
                loving me,
                <br />
                laughing with me,
                <br />
                holding me through good days and hard days,
                <br />
                and walking with me —
                <br />
                as my better half —
                <br />
                toward a forever where you are my wife
                <br />
                and I am your husband? ❤️
              </p>
            </FadeIn>

            <FadeIn delay={0.25}>
              <YesNoQuestion onYes={onYes} />
            </FadeIn>
          </>
        )}
      </div>
    </PageLayout>
  )
}
