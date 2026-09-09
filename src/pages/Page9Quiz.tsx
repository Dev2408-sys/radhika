import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { SoftButton } from '../components/SoftButton'
import { PageLayout } from '../components/PageLayout'
import { FadeIn } from '../components/ui'

type Props = { onNext: () => void }

type Step = 'intro' | 'q1' | 'q2' | 'q3' | 'done'

export function Page9Quiz({ onNext }: Props) {
  const [step, setStep] = useState<Step>('intro')
  const [feedback, setFeedback] = useState<string | null>(null)

  const showFeedback = (text: string, next: Step, delay = 1400) => {
    setFeedback(text)
    window.setTimeout(() => {
      setFeedback(null)
      setStep(next)
    }, delay)
  }

  return (
    <PageLayout>
      <div className="flex flex-1 flex-col justify-center gap-5">
        <FadeIn>
          <h1 className="font-serif text-center text-[1.65rem] text-burgundy">
            Okay, Birthday Girl...
          </h1>
        </FadeIn>

        <AnimatePresence mode="wait">
          {step === 'intro' && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="space-y-5 text-center"
            >
              <p className="text-burgundy/80">Enough emotional drama.</p>
              <p className="text-sm text-burgundy/65">
                Let&apos;s settle some VERY important questions.
              </p>
              <SoftButton onClick={() => setStep('q1')}>I&apos;m ready 😌</SoftButton>
            </motion.div>
          )}

          {step === 'q1' && (
            <motion.div
              key="q1"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="space-y-4"
            >
              <p className="text-center font-medium text-burgundy">Who is more cute?</p>
              <div className="grid grid-cols-2 gap-3">
                <SoftButton
                  fullWidth
                  variant="secondary"
                  onClick={() => showFeedback('Correct answer: You ❤️', 'q2')}
                  disabled={!!feedback}
                >
                  Me 😌
                </SoftButton>
                <SoftButton
                  fullWidth
                  onClick={() => showFeedback('Correct answer: You ❤️', 'q2')}
                  disabled={!!feedback}
                >
                  You ❤️
                </SoftButton>
              </div>
            </motion.div>
          )}

          {step === 'q2' && (
            <motion.div
              key="q2"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="space-y-4"
            >
              <p className="text-center font-medium text-burgundy">Who is more annoying?</p>
              <div className="grid grid-cols-2 gap-3">
                <SoftButton
                  fullWidth
                  variant="secondary"
                  onClick={() => showFeedback('Finally, some self-awareness. 😂', 'q3')}
                  disabled={!!feedback}
                >
                  Me 😂
                </SoftButton>
                <SoftButton
                  fullWidth
                  onClick={() =>
                    showFeedback("Wrong answer. But I'll allow it because it's your birthday. 😌", 'q3')
                  }
                  disabled={!!feedback}
                >
                  You 👀
                </SoftButton>
              </div>
            </motion.div>
          )}

          {step === 'q3' && (
            <motion.div
              key="q3"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="space-y-4"
            >
              <p className="text-center font-medium text-burgundy">Who loves the other more?</p>
              <div className="grid grid-cols-2 gap-3">
                <SoftButton
                  fullWidth
                  variant="secondary"
                  onClick={() => showFeedback('Nice try.', 'done', 1100)}
                  disabled={!!feedback}
                >
                  Me ❤️
                </SoftButton>
                <SoftButton
                  fullWidth
                  onClick={() => showFeedback('Nice try.', 'done', 1100)}
                  disabled={!!feedback}
                >
                  You ❤️
                </SoftButton>
              </div>
            </motion.div>
          )}

          {step === 'done' && (
            <motion.div
              key="done"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-5 text-center"
            >
              <p className="font-serif text-xl text-burgundy leading-snug">
                Result: BOTH ARE OBSESSED. 😂❤️
              </p>
              <SoftButton onClick={onNext}>One more thing... ✨</SoftButton>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {feedback && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-center text-sm font-medium text-rose"
            >
              {feedback}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </PageLayout>
  )
}
