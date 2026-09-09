import { Music2, Pause } from 'lucide-react'
import { useMusic } from '../hooks/useMusic'

export function MusicToggle() {
  const { isPlaying, toggle } = useMusic()

  return (
    <button
      type="button"
      onClick={toggle}
      className="absolute bottom-[max(1rem,env(safe-area-inset-bottom))] right-3 z-40 flex items-center gap-1.5 rounded-full border border-white/70 bg-white/70 px-3 py-2 text-[0.7rem] font-medium text-burgundy/80 shadow-sm backdrop-blur-md touch-manipulation"
      aria-label={isPlaying ? 'Pause birthday tune' : 'Play birthday tune'}
    >
      {isPlaying ? <Pause size={14} /> : <Music2 size={14} />}
      <span className="hidden min-[360px]:inline">
        {isPlaying ? 'Pause tune' : 'Play birthday tune'}
      </span>
      <span className="min-[360px]:hidden">🎵</span>
    </button>
  )
}
