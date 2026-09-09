import { SoftButton } from '../components/SoftButton'
import { PageLayout } from '../components/PageLayout'
import { FadeIn } from '../components/ui'
import { SoftImage } from '../components/SoftImage'
import { BOY_NAME, GIRL_NAME } from '../config'

type Props = { onNext: () => void }

export function Page3BirthdayReveal({ onNext }: Props) {
  return (
    <PageLayout>
      <div className="flex flex-1 flex-col justify-center gap-4">
        <FadeIn>
          <h1 className="font-serif text-center text-[1.85rem] leading-[1.15] tracking-wide text-burgundy uppercase">
            Happy Birthday, {GIRL_NAME} ❤️
          </h1>
        </FadeIn>

        <FadeIn delay={0.12}>
          <p className="text-center text-sm leading-relaxed text-burgundy/70 px-1">
            To the girl who somehow became someone&apos;s favourite notification —
            and one day, his whole world.
          </p>
        </FadeIn>

        <SoftImage
          src="/images/demo-flowers.png"
          alt="Soft roses for Radhika"
          className="mx-auto h-40 w-40"
          delay={0.2}
        />

        <FadeIn delay={0.32}>
          <p className="text-center text-[0.95rem] leading-relaxed text-burgundy/85">
            Today isn&apos;t just another date on the calendar...
            <br />
            <br />
            It&apos;s the day the world got a little more beautiful,
            <br />
            because you were born.
          </p>
        </FadeIn>

        <FadeIn delay={0.45}>
          <p className="text-center text-sm leading-relaxed text-rose">
            And yes...
            <br />
            {BOY_NAME} is still trying to understand
            <br />
            how he got this lucky. 🥹❤️
          </p>
        </FadeIn>

        <FadeIn delay={0.55} className="pt-2">
          <SoftButton onClick={onNext}>There&apos;s more... 👀</SoftButton>
        </FadeIn>
      </div>
    </PageLayout>
  )
}
