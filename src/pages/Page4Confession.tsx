import { SoftButton } from '../components/SoftButton'
import { PageLayout } from '../components/PageLayout'
import { FadeIn, GlassCard } from '../components/ui'
import { BOY_NAME } from '../config'

type Props = { onNext: () => void }

const facts = [
  {
    n: '01',
    title: 'He thinks about you.',
    sub: 'Probably more than he should.',
  },
  {
    n: '02',
    title: 'He checks his phone hoping it\'s you.',
    sub: 'And then pretends he wasn\'t waiting. 😂',
  },
  {
    n: '03',
    title: 'He may act normal...',
    sub: 'But one message from you and his entire mood changes.',
  },
  {
    n: '04',
    title: 'He\'s officially addicted.',
    sub: 'Unfortunately, the only known cure is more time with you. ❤️',
  },
]

export function Page4Confession({ onNext }: Props) {
  return (
    <PageLayout>
      <div className="flex flex-1 flex-col gap-4">
        <FadeIn>
          <h1 className="font-serif text-center text-[1.55rem] leading-snug text-burgundy">
            Some Important Facts About {BOY_NAME}
          </h1>
        </FadeIn>

        <div className="flex flex-col gap-3">
          {facts.map((f, i) => (
            <GlassCard key={f.n} delay={0.1 + i * 0.1} className="!p-4">
              <p className="font-script text-xl text-rose mb-1">Fact #{f.n}</p>
              <p className="text-[0.98rem] font-medium text-burgundy">{f.title}</p>
              <p className="mt-1 text-sm text-burgundy/60">{f.sub}</p>
            </GlassCard>
          ))}
        </div>

        <FadeIn delay={0.55}>
          <p className="text-center text-sm italic text-burgundy/55">Medical science has given up.</p>
        </FadeIn>

        <FadeIn delay={0.65} className="mt-auto pt-2">
          <SoftButton onClick={onNext}>Continue 💕</SoftButton>
        </FadeIn>
      </div>
    </PageLayout>
  )
}
