import { SoftButton } from '../components/SoftButton'
import { PageLayout } from '../components/PageLayout'
import { FadeIn, GlassCard } from '../components/ui'
import { FloatingHearts } from '../components/FloatingHearts'
import { SoftImage } from '../components/SoftImage'
import { Confetti } from '../components/Confetti'
import { BOY_NAME, GIRL_NAME } from '../config'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

type Props = { onReplay: () => void }

export function FinalScreen({ onReplay }: Props) {
  const [showConfetti, setShowConfetti] = useState(true)

  useEffect(() => {
    const t = window.setTimeout(() => setShowConfetti(false), 3500)
    return () => window.clearTimeout(t)
  }, [])

  return (
    <PageLayout>
      <Confetti active={showConfetti} />
      <FloatingHearts count={10} density="soft" />
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center gap-4 text-center px-1">
        <FadeIn>
          <p className="font-script text-3xl text-rose">Our Forever Promise</p>
        </FadeIn>

        <SoftImage
          src="/images/demo-rings.png"
          alt="Wedding rings"
          className="h-40 w-40"
          delay={0.15}
        />

        <FadeIn delay={0.25}>
          <p className="font-serif text-[1.55rem] leading-snug text-burgundy">
            🎂 Happy Birthday {GIRL_NAME} ❤️
          </p>
        </FadeIn>

        <GlassCard delay={0.35} className="!py-5 space-y-3">
          <p className="font-serif text-lg text-burgundy leading-snug">
            {GIRL_NAME} + {BOY_NAME}
          </p>
          <div className="mx-auto h-px w-16 bg-pink-mid/70" />
          <p className="text-sm leading-relaxed text-burgundy/80">
            Girlfriend &amp; boyfriend today.
            <br />
            Wife &amp; husband tomorrow.
            <br />
            <span className="text-rose font-medium">Ardhang &amp; Ardhang — forever.</span>
          </p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-sm leading-relaxed text-burgundy/70 italic"
          >
            Through laughter, through silence,
            <br />
            through easy days and heavy ones —
            <br />
            we stay. We choose. We complete each other.
          </motion.p>
        </GlassCard>

        <FadeIn delay={0.5}>
          <p className="text-sm leading-relaxed text-burgundy/65">
            Made with way too much love,
            <br />
            a little bit of madness,
            <br />
            and a promise meant to last. 😂❤️
          </p>
        </FadeIn>

        <FadeIn delay={0.6}>
          <p className="font-script text-2xl text-rose">— {BOY_NAME}</p>
        </FadeIn>

        <FadeIn delay={0.7} className="w-full pt-2">
          <SoftButton variant="secondary" onClick={onReplay}>
            Replay from the beginning ↻
          </SoftButton>
        </FadeIn>
      </div>
    </PageLayout>
  )
}
