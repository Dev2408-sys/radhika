import { AnimatePresence, motion } from 'framer-motion'
import { useRef, useState } from 'react'
import { SoftButton } from './SoftButton'
import { HeartFullIcon, HeartLeftHalf, HeartRightHalf } from './icons'
import { BOY_FIRST, GIRL_NAME } from '../config'

type HeartPuzzleProps = {
  onComplete: () => void
}

type Side = 'left' | 'right'

/**
 * Tap-to-pick + drop puzzle: join two heart halves into one full heart.
 * Works great on mobile (no drag required).
 */
export function HeartPuzzle({ onComplete }: HeartPuzzleProps) {
  const [holding, setHolding] = useState<Side | null>(null)
  const [placed, setPlaced] = useState<{ left: boolean; right: boolean }>({
    left: false,
    right: false,
  })
  const [done, setDone] = useState(false)
  const [hint, setHint] = useState('Tap a heart half, then tap the center to place it 💕')
  const boardRef = useRef<HTMLDivElement>(null)

  const tryPlace = (side: Side) => {
    if (done) return
    if (holding !== side) {
      setHolding(side)
      setHint(side === 'left' ? `Holding ${GIRL_NAME}'s half 💗 — tap the center!` : `Holding ${BOY_FIRST}'s half 💘 — tap the center!`)
      return
    }
    // second tap on same = cancel
    setHolding(null)
    setHint('Cancelled. Pick a half again!')
  }

  const placeOnBoard = () => {
    if (!holding || done) return
    const next = { ...placed, [holding]: true }
    setPlaced(next)
    setHolding(null)

    if (next.left && next.right) {
      setHint('WAIT... look at that 🥹')
      window.setTimeout(() => {
        setDone(true)
        setHint('Perfect. Two halves. One heart. Forever. ❤️')
      }, 450)
    } else if (next.left) {
      setHint(`Nice! ${GIRL_NAME}'s half is home. Now bring the other 👀`)
    } else {
      setHint(`Nice! ${BOY_FIRST}'s half is home. Now the other one 😂`)
    }
  }

  return (
    <div className="flex w-full flex-col items-center gap-4">
      <p className="min-h-[2.5rem] text-center text-sm text-burgundy/75 px-2 leading-relaxed">{hint}</p>

      {/* Drop zone */}
      <motion.button
        type="button"
        ref={boardRef as never}
        onClick={placeOnBoard}
        whileTap={{ scale: 0.98 }}
        className={[
          'relative flex h-44 w-44 items-center justify-center rounded-full border-2 border-dashed touch-manipulation',
          holding ? 'border-rose bg-pink-soft/40' : 'border-pink-mid/50 bg-white/50',
          done ? 'border-solid border-rose bg-white/80 shadow-[0_0_40px_rgba(196,92,122,0.25)]' : '',
        ].join(' ')}
        aria-label="Heart puzzle board"
      >
        <AnimatePresence mode="wait">
          {done ? (
            <motion.div
              key="full"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 260, damping: 16 }}
            >
              <HeartFullIcon size={110} />
            </motion.div>
          ) : (
            <motion.div key="halves" className="relative h-28 w-28">
              {placed.left && (
                <motion.div
                  initial={{ x: -40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  className="absolute left-0 top-0"
                >
                  <HeartLeftHalf size={112} />
                </motion.div>
              )}
              {placed.right && (
                <motion.div
                  initial={{ x: 40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  className="absolute left-0 top-0"
                >
                  <HeartRightHalf size={112} />
                </motion.div>
              )}
              {!placed.left && !placed.right && (
                <span className="absolute inset-0 flex items-center justify-center text-xs text-burgundy/40 text-center px-4">
                  Drop zone
                </span>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Pieces */}
      {!done && (
        <div className="flex w-full items-end justify-around gap-2 px-2">
          {!placed.left && (
            <motion.button
              type="button"
              whileTap={{ scale: 0.94 }}
              onClick={() => tryPlace('left')}
              className={[
                'flex flex-col items-center gap-1 rounded-2xl p-2 touch-manipulation',
                holding === 'left' ? 'ring-2 ring-rose bg-blush scale-105' : 'bg-white/40',
              ].join(' ')}
            >
              <HeartLeftHalf size={88} />
              <span className="text-[0.65rem] font-medium text-burgundy/70">{GIRL_NAME}</span>
            </motion.button>
          )}
          {!placed.right && (
            <motion.button
              type="button"
              whileTap={{ scale: 0.94 }}
              onClick={() => tryPlace('right')}
              className={[
                'flex flex-col items-center gap-1 rounded-2xl p-2 touch-manipulation',
                holding === 'right' ? 'ring-2 ring-rose bg-blush scale-105' : 'bg-white/40',
              ].join(' ')}
            >
              <HeartRightHalf size={88} />
              <span className="text-[0.65rem] font-medium text-burgundy/70">{BOY_FIRST}</span>
            </motion.button>
          )}
        </div>
      )}

      {done && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full space-y-3 text-center"
        >
          <p className="font-serif text-lg text-burgundy leading-snug">
            See? You two just fit. 🥹❤️
          </p>
          <p className="text-sm text-burgundy/65">
            That&apos;s what ardhang means — incomplete alone, perfect together.
          </p>
          <SoftButton onClick={onComplete}>We&apos;re a full heart now 💕</SoftButton>
        </motion.div>
      )}
    </div>
  )
}
