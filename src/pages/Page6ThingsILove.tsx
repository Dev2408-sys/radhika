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
  'The way you already feel like home.',
  'And the wife you will be someday. 💍',
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
            <GlassCard key={item} delay={0.08 + i * 0.07} className="!py-3 !px-4 text-center">
              <p className="text-[0.95rem] text-burgundy">{item}</p>
            </GlassCard>
          ))}
        </div>

        <FadeIn delay={0.7} className="text-center">
          <p className="font-script text-2xl text-rose mb-1">And honestly...</p>
          <p className="font-serif text-3xl text-burgundy">Just YOU.</p>
          <p className="mt-2 text-sm text-burgundy/60">My favourite human. My better half.</p>
        </FadeIn>

        <FadeIn delay={0.85} className="mt-auto pt-2">
          <SoftButton onClick={onNext}>Our story 💌</SoftButton>
        </FadeIn>
      </div>
    </PageLayout>
  )
}
