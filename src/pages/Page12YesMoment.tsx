import { SoftButton } from '../components/SoftButton'
import { PageLayout } from '../components/PageLayout'
import { FadeIn, GlassCard } from '../components/ui'
import { Confetti } from '../components/Confetti'
import { FloatingHearts } from '../components/FloatingHearts'
import { SoftImage } from '../components/SoftImage'
import { BOY_NAME, GIRL_NAME } from '../config'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

type Props = { onNext: () => void }

export function Page12YesMoment({ onNext }: Props) {
  const [confetti, setConfetti] = useState(true)
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    const timers = [
      window.setTimeout(() => setConfetti(false), 4200),
      window.setTimeout(() => setPhase(1), 900),
      window.setTimeout(() => setPhase(2), 2200),
      window.setTimeout(() => setPhase(3), 3600),
    ]
    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <PageLayout>
      <Confetti active={confetti} />
      <FloatingHearts count={14} density="celebration" />
      <div className="relative z-10 flex flex-1 flex-col justify-center gap-3.5 text-center">
        <FadeIn>
          <p className="font-serif text-4xl text-rose">YAYYYYY ❤️🥹</p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="font-serif text-2xl text-burgundy tracking-wide">I KNEW IT.</p>
        </FadeIn>

        <SoftImage
          src="/images/demo-ardhang.png"
          alt="Two halves becoming whole"
          className="mx-auto h-36 w-36"
          delay={0.35}
        />

        {phase >= 1 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-2"
          >
            <p className="font-script text-2xl text-rose">The Ardhang Moment</p>
            <p className="text-sm leading-relaxed text-burgundy/80 px-2">
              One half is {GIRL_NAME}.
              <br />
              One half is {BOY_NAME}.
              <br />
              Together — complete.
            </p>
          </motion.div>
        )}

        {phase >= 2 && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <GlassCard className="!py-4 text-left space-y-2">
              <p className="text-sm leading-relaxed text-burgundy/85">
                Today you are my girlfriend.
                <br />
                Someday, you will be my wife.
              </p>
              <p className="text-sm leading-relaxed text-burgundy/85">
                Today I am your boyfriend.
                <br />
                Someday, I will be your husband.
              </p>
              <p className="text-sm leading-relaxed text-rose italic">
                In every soft season and every hard one —
                I promise to stay.
              </p>
            </GlassCard>
          </motion.div>
        )}

        {phase >= 3 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-3 pt-1"
          >
            <p className="font-serif text-[1.2rem] leading-snug text-burgundy">
              You&apos;re loved more than you know. ❤️
            </p>
            <p className="font-script text-xl text-burgundy/80">
              With love,
              <br />
              {BOY_NAME}
            </p>
            <SoftButton onClick={onNext}>Seal our forever vow 💍</SoftButton>
          </motion.div>
        )}
      </div>
    </PageLayout>
  )
}
