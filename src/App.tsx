import { useCallback, useState } from 'react'
import { PageTransition } from './components/PageTransition'
import { ProgressIndicator } from './components/ProgressIndicator'
import { LoadingScreen } from './components/LoadingScreen'
import { MusicToggle } from './components/MusicToggle'
import { HeartCursor } from './components/HeartCursor'
import { MusicProvider } from './hooks/useMusic'
import { Page1SecretEntry } from './pages/Page1SecretEntry'
import { Page2Warning } from './pages/Page2Warning'
import { Page3BirthdayReveal } from './pages/Page3BirthdayReveal'
import { Page4Confession } from './pages/Page4Confession'
import { Page5LoveStats } from './pages/Page5LoveStats'
import { Page6ThingsILove } from './pages/Page6ThingsILove'
import { Page7LoveStory } from './pages/Page7LoveStory'
import { Page8BirthdayLetter } from './pages/Page8BirthdayLetter'
import { Page9Quiz } from './pages/Page9Quiz'
import { Page10BirthdayWish } from './pages/Page10BirthdayWish'
import { Page11FinalQuestion } from './pages/Page11FinalQuestion'
import { Page12YesMoment } from './pages/Page12YesMoment'
import { FinalScreen } from './pages/FinalScreen'
import { GIRL_NAME } from './config'

type Stage = 'loading' | 'story' | 'final'

export default function App() {
  const [stage, setStage] = useState<Stage>('loading')
  const [page, setPage] = useState(1)
  const [direction, setDirection] = useState(1)

  const goTo = useCallback((next: number) => {
    setDirection(next >= page ? 1 : -1)
    setPage(next)
  }, [page])

  const next = useCallback(() => goTo(page + 1), [goTo, page])

  const replay = useCallback(() => {
    setDirection(-1)
    setStage('loading')
    setPage(1)
  }, [])

  const finishLoading = useCallback(() => setStage('story'), [])

  const chapter = stage === 'story' ? page : 0

  return (
    <MusicProvider>
      <div className="h-[100dvh] w-full overflow-hidden bg-cream">
        <HeartCursor />
        <div className="page-shell h-full">
          {stage !== 'loading' && <MusicToggle />}
          <ProgressIndicator chapter={chapter} visible={stage === 'story' && page <= 12} />

          <div className="relative h-full w-full">
            {stage === 'loading' && (
              <LoadingScreen onComplete={finishLoading} />
            )}

            {stage === 'story' && (
              <PageTransition pageKey={page} direction={direction}>
                {page === 1 && <Page1SecretEntry onNext={next} />}
                {page === 2 && <Page2Warning onNext={next} />}
                {page === 3 && <Page3BirthdayReveal onNext={next} />}
                {page === 4 && <Page4Confession onNext={next} />}
                {page === 5 && <Page5LoveStats onNext={next} />}
                {page === 6 && <Page6ThingsILove onNext={next} />}
                {page === 7 && <Page7LoveStory onNext={next} />}
                {page === 8 && <Page8BirthdayLetter onNext={next} />}
                {page === 9 && <Page9Quiz onNext={next} />}
                {page === 10 && <Page10BirthdayWish onNext={next} />}
                {page === 11 && (
                  <Page11FinalQuestion
                    onYes={() => {
                      setDirection(1)
                      setPage(12)
                    }}
                  />
                )}
                {page === 12 && (
                  <Page12YesMoment
                    onNext={() => {
                      setDirection(1)
                      setStage('final')
                    }}
                  />
                )}
              </PageTransition>
            )}

            {stage === 'final' && (
              <PageTransition pageKey="final" direction={1}>
                <FinalScreen onReplay={replay} />
              </PageTransition>
            )}
          </div>
        </div>
        <span className="sr-only">A birthday surprise for {GIRL_NAME}</span>
      </div>
    </MusicProvider>
  )
}
