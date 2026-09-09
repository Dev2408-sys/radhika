import { SoftButton } from '../components/SoftButton'
import { PageLayout } from '../components/PageLayout'
import { FadeIn, GlassCard } from '../components/ui'

type Props = { onNext: () => void }

const loves = [
  'Your smile ❤️',
  'Your laugh 😂',
  'The way you talk.',
  'The little things you do without realizing.',
  'How you make ordinary moments feel special.',
  'Your beautiful heart.',
]

export function Page6ThingsILove({ onNext }: Props) {
  return (
    <PageLayout>
      <div className="flex flex-1 flex-col gap-4">
        <FadeIn>
          <h1 className="font-serif text-center text-[1.65rem] text-burgundy">
            Things I Love About You
          </h1>
        </FadeIn>

        <div className="flex flex-col gap-2.5">
          {loves.map((item, i) => (
            <GlassCard key={item} delay={0.1 + i * 0.09} className="!py-3.5 !px-4 text-center">
              <p className="text-[0.98rem] text-burgundy">{item}</p>
            </GlassCard>
          ))}
        </div>

        <FadeIn delay={0.7} className="text-center">
          <p className="font-script text-2xl text-rose mb-1">And honestly...</p>
          <p className="font-serif text-3xl text-burgundy">Just YOU.</p>
        </FadeIn>

        <FadeIn delay={0.85}>
          <p className="text-center text-sm text-burgundy/65 leading-relaxed">
            I could write 100 reasons...
            <br />
            but I&apos;d probably end up writing 1000.
          </p>
        </FadeIn>

        <FadeIn delay={0.95} className="mt-auto pt-2">
          <SoftButton onClick={onNext}>Our story 💌</SoftButton>
        </FadeIn>
      </div>
    </PageLayout>
  )
}
