import { SoftButton } from '../components/SoftButton'
import { PageLayout } from '../components/PageLayout'
import { FadeIn, GlassCard } from '../components/ui'
import { FloatingHearts } from '../components/FloatingHearts'
import { SoftImage } from '../components/SoftImage'
import { Confetti } from '../components/Confetti'
import { HeartFullIcon, RingIcon } from '../components/icons'
import { BOY_NAME, GIRL_NAME, IMAGES } from '../config'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Code2, Cake } from 'lucide-react'

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
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center gap-4 text-center px-1 pb-2">
        <FadeIn>
          <p className="font-script text-3xl text-rose">Our Forever Promise</p>
        </FadeIn>

        <div className="relative">
          <SoftImage
            src={IMAGES.rings}
            alt="Wedding rings"
            className="h-32 w-32"
            delay={0.12}
          />
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
            <RingIcon size={32} />
          </div>
        </div>

        <FadeIn delay={0.2}>
          <div className="flex justify-center gap-2">
            <SoftImage
              src="/photos/radhika/radhika-1.png"
              alt={GIRL_NAME}
              className="h-22 w-20 h-24"
            />
            <SoftImage
              src="/photos/pratik/pratik-1.jpg"
              alt={BOY_NAME}
              className="h-24 w-20"
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.28}>
          <div className="flex flex-col items-center gap-1">
            <Cake className="text-rose" size={22} strokeWidth={1.75} />
            <p className="font-serif text-[1.65rem] leading-snug text-burgundy">
              Happy Birthday, {GIRL_NAME}! 🎂❤️
            </p>
          </div>
        </FadeIn>

        <GlassCard delay={0.35} className="!py-4 space-y-3">
          <div className="flex justify-center">
            <HeartFullIcon size={44} />
          </div>
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
            transition={{ delay: 0.7 }}
            className="text-sm leading-relaxed text-burgundy/70 italic"
          >
            Through laughter, through silence,
            <br />
            through easy days and heavy ones —
            <br />
            we stay. We choose. We complete each other.
            <br />
            <span className="not-italic text-rose">(And we keep teasing each other. 😂)</span>
          </motion.p>
        </GlassCard>

        <FadeIn delay={0.45}>
          <p className="text-sm leading-relaxed text-burgundy/65">
            Made with way too much love,
            <br />
            a runaway NO button,
            <br />
            one heart puzzle,
            <br />
            photo ratings,
            <br />
            and a promise meant to last. 😂❤️
          </p>
        </FadeIn>

        <FadeIn delay={0.55}>
          <p className="font-script text-2xl text-rose">— {BOY_NAME}</p>
        </FadeIn>

        {/* Developer note + wish */}
        <GlassCard delay={0.65} className="!py-4 !px-4 space-y-2.5 text-left">
          <div className="flex items-center justify-center gap-2">
            <Code2 size={16} className="text-rose" />
            <p className="font-serif text-base text-burgundy">A note from the developer</p>
          </div>
          <p className="text-sm leading-relaxed text-burgundy/80 text-center">
            This whole website was built as a secret surprise —
            so secretly that even the developer got properly confused
            while making it. 😵‍💫😂
          </p>
          <p className="text-sm leading-relaxed text-burgundy/75 text-center">
            Buttons running away, hearts joining, ratings, vows…
            everything got packed in because one boy wanted one girl
            to feel extra special.
          </p>
          <div className="mx-auto h-px w-12 bg-pink-mid/60 my-1" />
          <p className="text-sm leading-relaxed text-rose text-center italic">
            Dear {GIRL_NAME},
            <br />
            Happy Birthday once more.
            <br />
            May your year be soft, bright, and full of laughs —
            and may you two keep choosing each other, always.
          </p>
          <p className="text-center text-xs text-burgundy/50 pt-1">
            With warm wishes from the person who coded this surprise ✨
          </p>
        </GlassCard>

        <FadeIn delay={0.8}>
          <p className="font-serif text-xl text-burgundy leading-snug">
            Again… Happy Birthday, {GIRL_NAME}. 🎂💕
          </p>
          <p className="mt-1 font-script text-2xl text-rose">You deserve the world.</p>
        </FadeIn>

        <FadeIn delay={0.9} className="w-full pt-1">
          <SoftButton variant="secondary" onClick={onReplay}>
            Replay from the beginning ↻
          </SoftButton>
        </FadeIn>
      </div>
    </PageLayout>
  )
}
