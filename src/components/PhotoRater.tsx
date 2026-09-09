import { motion } from 'framer-motion'
import { useState } from 'react'
import type { PhotoItem } from '../data/photos'
import { SoftButton } from './SoftButton'

type PhotoRaterProps = {
  photo: PhotoItem
  index: number
  total: number
  mode: 'pratik' | 'radhika'
  onSubmit: (beauty: number, funny: number) => void
}

const BEAUTY_OPTS = [7, 8, 9, 10, 11]
const FUNNY_OPTS = [6, 7, 8, 9, 10]

export function PhotoRater({ photo, index, total, mode, onSubmit }: PhotoRaterProps) {
  const [beauty, setBeauty] = useState<number | null>(null)
  const [funny, setFunny] = useState<number | null>(null)
  const [rejectMsg, setRejectMsg] = useState<string | null>(null)

  const pickBeauty = (n: number) => {
    if (mode === 'radhika' && n < 9) {
      const msgs = [
        'Nope. Too low. Try again. 😌',
        'The judges (Pratik) rejected that score. 😂',
        'Beauty police says: minimum 9 required.',
        'That rating hurt the butterfly filter. Try higher.',
      ]
      setRejectMsg(msgs[Math.floor(Math.random() * msgs.length)])
      return
    }
    setRejectMsg(null)
    setBeauty(n)
  }

  const canSubmit = beauty !== null && funny !== null

  return (
    <motion.div
      key={photo.id}
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="flex flex-col gap-3"
    >
      <p className="text-center text-[0.7rem] font-medium tracking-wide text-burgundy/45 uppercase">
        Photo {index + 1} / {total}
      </p>

      <div className="relative mx-auto w-full max-w-[280px] overflow-hidden rounded-[1.5rem] shadow-[0_12px_32px_rgba(107,45,66,0.12)] ring-1 ring-white/60">
        <img
          src={photo.src}
          alt={photo.title}
          className="aspect-[3/4] w-full object-cover object-top bg-blush"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-burgundy/55 to-transparent p-3 pt-10">
          <p className="font-serif text-base text-white leading-tight">{photo.title}</p>
        </div>
      </div>

      <p className="text-center text-sm leading-relaxed text-burgundy/70 px-1">{photo.caption}</p>

      {rejectMsg && (
        <p className="text-center text-sm font-medium text-rose animate-pulse">{rejectMsg}</p>
      )}

      <div className="glass-card rounded-2xl p-3 space-y-3">
        <div>
          <p className="mb-2 text-xs font-medium text-burgundy/60">
            Beauty rating {mode === 'radhika' ? '(be generous… or else 👀)' : ''}
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {BEAUTY_OPTS.map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => pickBeauty(n)}
                className={[
                  'min-h-10 min-w-12 rounded-xl px-3 text-sm font-semibold touch-manipulation transition',
                  beauty === n
                    ? 'bg-rose text-white shadow-md'
                    : 'bg-white/80 text-burgundy border border-pink-soft/70',
                ].join(' ')}
              >
                {n === 11 ? '∞' : n}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-2 text-xs font-medium text-burgundy/60">Hasi-majak / vibe rating 😂</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {FUNNY_OPTS.map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => setFunny(n)}
                className={[
                  'min-h-10 min-w-12 rounded-xl px-3 text-sm font-semibold touch-manipulation transition',
                  funny === n
                    ? 'bg-burgundy text-white shadow-md'
                    : 'bg-white/80 text-burgundy border border-pink-soft/70',
                ].join(' ')}
              >
                {n}
              </button>
            ))}
          </div>
        </div>
      </div>

      <SoftButton
        disabled={!canSubmit}
        onClick={() => {
          if (beauty === null || funny === null) return
          onSubmit(beauty, funny)
          setBeauty(null)
          setFunny(null)
          setRejectMsg(null)
        }}
      >
        {index + 1 < total ? 'Next photo 👀' : 'Finish ratings ✨'}
      </SoftButton>
    </motion.div>
  )
}
