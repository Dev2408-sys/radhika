import { SoftButton } from '../components/SoftButton'
import { PageLayout } from '../components/PageLayout'
import { FadeIn } from '../components/ui'
import { BOY_NAME, GIRL_NAME } from '../config'

type Props = { onNext: () => void }

const wishes = [
  'More happiness',
  'More adventures',
  'More laughter',
  'More success',
  'More beautiful memories',
  'And a LOT of reasons to smile.',
]

export function Page10BirthdayWish({ onNext }: Props) {
  return (
    <PageLayout>
      <div className="flex flex-1 flex-col justify-center gap-5">
        <FadeIn>
          <h1 className="font-serif text-center text-[1.85rem] text-burgundy">One More Thing...</h1>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="text-center text-sm text-burgundy/70">May this year bring you:</p>
        </FadeIn>

        <div className="space-y-2.5 px-1">
          {wishes.map((w, i) => (
            <FadeIn key={w} delay={0.22 + i * 0.08}>
              <p className="text-center text-[0.98rem] text-burgundy">
                <span className="mr-1.5">✨</span>
                {w}
              </p>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.75}>
          <p className="text-center text-sm leading-relaxed text-burgundy/75 px-2">
            And whenever life gets difficult...
            <br />
            in every soft day and every stormy one...
            <br />
            <br />
            remember that {BOY_NAME} will still choose you —
            <br />
            as your boyfriend now,
            <br />
            and as your husband for the life ahead.
          </p>
        </FadeIn>

        <FadeIn delay={0.9}>
          <p className="font-serif text-center text-2xl text-burgundy leading-snug">
            Happy Birthday, {GIRL_NAME}. ❤️
          </p>
        </FadeIn>

        <FadeIn delay={1} className="pt-1">
          <SoftButton onClick={onNext}>Wait... one last thing 👀</SoftButton>
        </FadeIn>
      </div>
    </PageLayout>
  )
}
