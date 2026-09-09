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
  const [isAvailable, setIsAvailable] = useState(true)

  useEffect(() => {
    const audio = new Audio(MUSIC_SRC)
    audio.loop = true
    audio.volume = 0.4
    audio.preload = 'auto'
    audioRef.current = audio

    // Backup loop: if native loop fails on some browsers, restart from start
    const onEnded = () => {
      audio.currentTime = 0
      void audio.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false))
    }

    const onPlay = () => setIsPlaying(true)
    const onPause = () => setIsPlaying(false)

    audio.addEventListener('ended', onEnded)
    audio.addEventListener('play', onPlay)
    audio.addEventListener('pause', onPause)

    const check = async () => {
      try {
        const res = await fetch(MUSIC_SRC, { method: 'HEAD' })
        setIsAvailable(res.ok)
      } catch {
        // Still allow play attempt — file may exist even if HEAD fails
        setIsAvailable(true)
      }
    }
    void check()

    return () => {
      audio.removeEventListener('ended', onEnded)
      audio.removeEventListener('play', onPlay)
      audio.removeEventListener('pause', onPause)
      audio.pause()
      audioRef.current = null
    }
  }, [])

  const toggle = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return

    if (!audio.paused) {
      audio.pause()
      return
    }

    // Always ensure loop is on when starting
    audio.loop = true
    void audio
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => setIsPlaying(false))
  }, [])

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
