import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

export type PhotoScore = {
  beauty: number
  funny: number
}

type RatingsContextValue = {
  pratikScores: Record<string, PhotoScore>
  radhikaScores: Record<string, PhotoScore>
  setPratikScore: (id: string, score: PhotoScore) => void
  setRadhikaScore: (id: string, score: PhotoScore) => void
  resetRatings: () => void
  pratikAvg: { beauty: number; funny: number }
  radhikaAvg: { beauty: number; funny: number }
}

const RatingsContext = createContext<RatingsContextValue | null>(null)

function avg(scores: Record<string, PhotoScore>) {
  const list = Object.values(scores)
  if (!list.length) return { beauty: 0, funny: 0 }
  const beauty = list.reduce((s, x) => s + x.beauty, 0) / list.length
  const funny = list.reduce((s, x) => s + x.funny, 0) / list.length
  return { beauty, funny }
}

export function RatingsProvider({ children }: { children: ReactNode }) {
  const [pratikScores, setPratikScores] = useState<Record<string, PhotoScore>>({})
  const [radhikaScores, setRadhikaScores] = useState<Record<string, PhotoScore>>({})

  const setPratikScore = useCallback((id: string, score: PhotoScore) => {
    setPratikScores((prev) => ({ ...prev, [id]: score }))
  }, [])

  const setRadhikaScore = useCallback((id: string, score: PhotoScore) => {
    setRadhikaScores((prev) => ({ ...prev, [id]: score }))
  }, [])

  const resetRatings = useCallback(() => {
    setPratikScores({})
    setRadhikaScores({})
  }, [])

  const value = useMemo(
    () => ({
      pratikScores,
      radhikaScores,
      setPratikScore,
      setRadhikaScore,
      resetRatings,
      pratikAvg: avg(pratikScores),
      radhikaAvg: avg(radhikaScores),
    }),
    [pratikScores, radhikaScores, setPratikScore, setRadhikaScore, resetRatings],
  )

  return <RatingsContext.Provider value={value}>{children}</RatingsContext.Provider>
}

export function useRatings() {
  const ctx = useContext(RatingsContext)
  if (!ctx) throw new Error('useRatings must be used within RatingsProvider')
  return ctx
}
