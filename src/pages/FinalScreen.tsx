import { SoftButton } from '../components/SoftButton'
import { PageLayout } from '../components/PageLayout'
import { FadeIn } from '../components/ui'
import { FloatingHearts } from '../components/FloatingHearts'
import { BOY_NAME, GIRL_NAME } from '../config'

type Props = { onReplay: () => void }

export function FinalScreen({ onReplay }: Props) {
  return (
    <PageLayout>
      <FloatingHearts count={8} density="soft" />
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center gap-6 text-center px-1">
        <FadeIn>
          <p className="font-serif text-[1.75rem] leading-snug text-burgundy">
            🎂 Happy Birthday {GIRL_NAME} ❤️
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-sm leading-relaxed text-burgundy/75">
            Made with way too much love,
            <br />
            a little bit of madness,
            <br />
            and definitely too much effort. 😂❤️
          </p>
        </FadeIn>

        <FadeIn delay={0.35}>
          <p className="font-script text-2xl text-rose">— {BOY_NAME}</p>
        </FadeIn>

        <FadeIn delay={0.5} className="w-full pt-4">
          <SoftButton variant="secondary" onClick={onReplay}>
            Replay from the beginning ↻
          </SoftButton>
        </FadeIn>
      </div>
    </PageLayout>
  )
}
