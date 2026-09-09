import { PageLayout } from '../components/PageLayout'
import { FadeIn } from '../components/ui'
import { HeartPuzzle } from '../components/HeartPuzzle'
import { Puzzle } from 'lucide-react'

type Props = { onNext: () => void }

export function PageHeartPuzzle({ onNext }: Props) {
  return (
    <PageLayout>
      <div className="flex flex-1 flex-col justify-center gap-4">
        <FadeIn>
          <div className="flex flex-col items-center gap-2 text-center">
            <Puzzle className="text-rose" size={28} strokeWidth={1.75} />
            <h1 className="font-serif text-[1.55rem] text-burgundy leading-snug">
              Mini Mission: Fix Our Heart
            </h1>
            <p className="text-sm text-burgundy/65 px-2">
              Two halves are lonely. Join them into one proper full heart to continue. 👀
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <HeartPuzzle onComplete={onNext} />
        </FadeIn>
      </div>
    </PageLayout>
  )
}
