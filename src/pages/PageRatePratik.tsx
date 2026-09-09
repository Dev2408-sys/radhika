import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Camera } from 'lucide-react'
import { PageLayout } from '../components/PageLayout'
import { FadeIn } from '../components/ui'
import { SoftButton } from '../components/SoftButton'
import { PhotoRater } from '../components/PhotoRater'
import { PRATIK_PHOTOS } from '../data/photos'
import { useRatings } from '../hooks/useRatings'
import { BOY_FIRST } from '../config'

type Props = { onNext: () => void }

export function PageRatePratik({ onNext }: Props) {
  const [started, setStarted] = useState(false)
  const [idx, setIdx] = useState(0)
  const { setPratikScore } = useRatings()

  const photo = PRATIK_PHOTOS[idx]

  return (
    <PageLayout>
      <div className="flex flex-1 flex-col justify-center gap-3">
        {!started ? (
          <FadeIn className="space-y-5 text-center">
            <Camera className="mx-auto text-rose" size={28} strokeWidth={1.75} />
            <h1 className="font-serif text-[1.55rem] text-burgundy leading-snug">
              Rate Your Boyfriend 📸
            </h1>
            <p className="text-sm text-burgundy/70 leading-relaxed px-1">
              Official assignment for {BOY_FIRST}&apos;s photos.
              <br />
              Give each one a <span className="text-rose font-medium">beauty</span> score
              and a <span className="text-rose font-medium">hasi-majak</span> score.
            </p>
            <p className="text-xs text-burgundy/50">Be honest. He can take it. Probably. 😂</p>
            <SoftButton onClick={() => setStarted(true)}>Start rating {BOY_FIRST}</SoftButton>
          </FadeIn>
        ) : (
          <AnimatePresence mode="wait">
            <PhotoRater
              key={photo.id}
              photo={photo}
              index={idx}
              total={PRATIK_PHOTOS.length}
              mode="pratik"
              onSubmit={(beauty, funny) => {
                setPratikScore(photo.id, { beauty, funny })
                if (idx + 1 >= PRATIK_PHOTOS.length) onNext()
                else setIdx((i) => i + 1)
              }}
            />
          </AnimatePresence>
        )}
      </div>
    </PageLayout>
  )
}
