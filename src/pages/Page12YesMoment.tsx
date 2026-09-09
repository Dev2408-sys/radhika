import { SoftButton } from '../components/SoftButton'
import { PageLayout } from '../components/PageLayout'
import { FadeIn } from '../components/ui'
import { Confetti } from '../components/Confetti'
import { FloatingHearts } from '../components/FloatingHearts'
import { BOY_NAME, GIRL_NAME } from '../config'
import { useEffect, useState } from 'react'

type Props = { onNext: () => void }

export function Page12YesMoment({ onNext }: Props) {
  const [confetti, setConfetti] = useState(true)

  useEffect(() => {
    const t = window.setTimeout(() => setConfetti(false), 4200)
    return () => window.clearTimeout(t)
  }, [])

  return (
    <PageLayout>
      <Confetti active={confetti} />
      <FloatingHearts count={14} density="celebration" />
      <div className="relative z-10 flex flex-1 flex-col justify-center gap-4 text-center">
        <FadeIn>
          <p className="font-serif text-4xl text-rose">YAYYYYY ❤️🥹</p>
        </FadeIn>

        <FadeIn delay={0.25}>
          <p className="font-serif text-2xl text-burgundy tracking-wide">I KNEW IT.</p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <p className="text-burgundy/80">Thank you for choosing me.</p>
        </FadeIn>

        <FadeIn delay={0.55}>
          <p className="text-sm leading-relaxed text-burgundy/80 px-1">
            Here&apos;s to more laughs,
            <br />
            more random conversations,
            <br />
            more silly fights,
            <br />
            more unforgettable memories,
            <br />
            more adventures,
            <br />
            more hugs,
            <br />
            and a whole lot more love. ❤️
          </p>
        </FadeIn>

        <FadeIn delay={0.75}>
          <p className="font-serif text-xl text-burgundy">Happy Birthday, {GIRL_NAME}.</p>
        </FadeIn>

        <FadeIn delay={0.9}>
          <p className="font-serif text-[1.35rem] leading-snug text-rose">
            You&apos;re loved more than you know. ❤️
          </p>
        </FadeIn>

        <FadeIn delay={1.05}>
          <p className="font-script text-2xl text-burgundy/80">
            With love,
            <br />
            {BOY_NAME}
          </p>
        </FadeIn>

        <FadeIn delay={1.2} className="pt-2">
          <SoftButton onClick={onNext}>One last peek 🎂</SoftButton>
        </FadeIn>
      </div>
    </PageLayout>
  )
}
