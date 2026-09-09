import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import { MUSIC_SRC } from '../config'

type MusicContextValue = {
  isPlaying: boolean
  isAvailable: boolean
  toggle: () => void
}

const MusicContext = createContext<MusicContextValue | null>(null)

export function MusicProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isAvailable, setIsAvailable] = useState(false)

  useEffect(() => {
    const audio = new Audio(MUSIC_SRC)
    audio.loop = true
    audio.volume = 0.35
    audio.preload = 'none'
    audioRef.current = audio

    const check = async () => {
      try {
        const res = await fetch(MUSIC_SRC, { method: 'HEAD' })
        setIsAvailable(res.ok)
      } catch {
        setIsAvailable(false)
      }
    }
    void check()

    return () => {
      audio.pause()
      audioRef.current = null
    }
  }, [])

  const toggle = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
      return
    }

    void audio
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => setIsPlaying(false))
  }, [isPlaying])

  const value = useMemo(
    () => ({ isPlaying, isAvailable, toggle }),
    [isPlaying, isAvailable, toggle],
  )

  return <MusicContext.Provider value={value}>{children}</MusicContext.Provider>
}

export function useMusic() {
  const ctx = useContext(MusicContext)
  if (!ctx) throw new Error('useMusic must be used within MusicProvider')
  return ctx
}
