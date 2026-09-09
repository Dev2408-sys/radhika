import { SoftButton } from '../components/SoftButton'
import { PageLayout } from '../components/PageLayout'
import { FadeIn, GlassCard } from '../components/ui'
import { SoftImage } from '../components/SoftImage'
import { BOY_NAME, GIRL_NAME } from '../config'

type Props = { onNext: () => void }

const timeline = [
  { when: 'Then...', what: 'Two people met.' },
  { when: 'Then...', what: 'Conversations became habits.' },
  { when: 'Then...', what: 'Habits became favourite moments.' },
  { when: 'Then...', what: 'Someone started smiling at their phone like a fool in love. 😂' },
  { when: 'Now...', what: `There's a birthday girl named ${GIRL_NAME} reading this.` },
  { when: 'Soon...', what: 'A husband and a wife — writing forever, together.' },
]

export function Page7LoveStory({ onNext }: Props) {
  return (
    <PageLayout>
      <div className="flex flex-1 flex-col gap-3.5">
        <FadeIn>
          <h1 className="font-serif text-center text-[1.65rem] text-burgundy">
            Our Little Story ❤️
          </h1>
        </FadeIn>

        <SoftImage
          src="/images/demo-ardhang.png"
          alt="Two hearts becoming one"
          className="mx-auto h-28 w-28"
          delay={0.1}
        />

        <div className="relative pl-2">
          <div className="absolute left-[18px] top-3 bottom-3 w-px bg-gradient-to-b from-pink-soft via-rose/40 to-pink-soft" />
          <div className="flex flex-col gap-2.5">
            {timeline.map((item, i) => (
              <FadeIn key={item.what} delay={0.12 + i * 0.1} className="relative flex gap-3">
                <div className="relative z-10 mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white border border-pink-mid shadow-sm">
                  <span className="h-2 w-2 rounded-full bg-rose" />
                </div>
                <div className="glass-card flex-1 rounded-2xl px-4 py-2.5">
                  <p className="font-script text-lg text-rose leading-none mb-0.5">{item.when}</p>
                  <p className="text-sm text-burgundy leading-relaxed">{item.what}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <GlassCard delay={0.8} className="text-center !py-4">
          <p className="text-sm leading-relaxed text-burgundy/85">
            And somewhere along the way,
            <br />
            you became {BOY_NAME}&apos;s <span className="font-medium text-rose">ardhang</span> —
            <br />
            the missing half that made his life feel complete.
          </p>
        </GlassCard>

        <FadeIn delay={0.95} className="mt-auto pt-1">
          <SoftButton onClick={onNext}>Read the letter 💌</SoftButton>
        </FadeIn>
      </div>
    </PageLayout>
  )
}
