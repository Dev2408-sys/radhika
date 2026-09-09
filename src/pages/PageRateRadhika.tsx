import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Sparkles } from 'lucide-react'
import { PageLayout } from '../components/PageLayout'
import { FadeIn } from '../components/ui'
import { SoftButton } from '../components/SoftButton'
import { PhotoRater } from '../components/PhotoRater'
import { RADHIKA_PHOTOS } from '../data/photos'
import { useRatings } from '../hooks/useRatings'
import { BOY_FIRST, GIRL_NAME } from '../config'

type Props = { onNext: () => void }

export function PageRateRadhika({ onNext }: Props) {
  const [started, setStarted] = useState(false)
  const [idx, setIdx] = useState(0)
  const { setRadhikaScore } = useRatings()

  const photo = RADHIKA_PHOTOS[idx]

  return (
    <PageLayout>
      <div className="flex flex-1 flex-col justify-center gap-3">
        {!started ? (
          <FadeIn className="space-y-5 text-center">
            <Sparkles className="mx-auto text-rose" size={28} strokeWidth={1.75} />
            <h1 className="font-serif text-[1.55rem] text-burgundy leading-snug">
              Rate The Birthday Girl ✨
            </h1>
            <p className="text-sm text-burgundy/70 leading-relaxed px-1">
              These are {BOY_FIRST}&apos;s favourite photos of {GIRL_NAME}.
              <br />
              Now YOU rate them — beauty + hasi-majak.
            </p>
            <p className="text-xs text-burgundy/50 px-2">
              Fair warning: low beauty scores will be rejected by the system. 😌❤️
            </p>
            <SoftButton onClick={() => setStarted(true)}>Rate my favourites</SoftButton>
          </FadeIn>
        ) : (
          <AnimatePresence mode="wait">
            <PhotoRater
              key={photo.id}
              photo={photo}
              index={idx}
              total={RADHIKA_PHOTOS.length}
              mode="radhika"
              onSubmit={(beauty, funny) => {
                setRadhikaScore(photo.id, { beauty, funny })
                if (idx + 1 >= RADHIKA_PHOTOS.length) onNext()
                else setIdx((i) => i + 1)
              }}
            />
          </AnimatePresence>
        )}
      </div>
    </PageLayout>
  )
}
