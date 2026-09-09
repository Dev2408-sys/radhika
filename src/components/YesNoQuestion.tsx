import { AnimatePresence, motion } from 'framer-motion'
import { useCallback, useState } from 'react'
import { SoftButton } from './SoftButton'

const DEFAULT_NO_MESSAGES = [
  'Are you sure? 🥺',
  'Think again... 👀',
  'That button looks suspicious.',
  'Nice try 😂',
  'Wrong answer detected.',
  'Please reconsider. ❤️',
  'System says NO is not available.',
  'Hmm... try the other one.',
  'Bold of you to click that.',
  'NO is doing cardio right now 🏃',
  'Catch me if you can 😏',
  'Still clicking NO? Respect. 😂',
]

type RunawayNoProps = {
  onYes: () => void
  yesLabel?: string
  noLabel?: string
  /** Must tap NO this many times before YES unlocks (forces the chase!) */
  minNoClicks?: number
  messages?: string[]
}

export function RunawayNoGame({
  onYes,
  yesLabel = 'YES ❤️',
  noLabel = 'NO 🙈',
  minNoClicks = 3,
  messages = DEFAULT_NO_MESSAGES,
}: RunawayNoProps) {
  const [noClicks, setNoClicks] = useState(0)
  const [message, setMessage] = useState<string | null>(null)
  const [noPos, setNoPos] = useState({ x: 0, y: 0 })
  const [noGone, setNoGone] = useState(false)

  const yesUnlocked = noClicks >= minNoClicks
  const yesScale = Math.min(1.65, 1 + noClicks * 0.1)
  const noScale = Math.max(0.28, 1 - noClicks * 0.1)

  const handleNo = useCallback(() => {
    const next = noClicks + 1
    setNoClicks(next)
    setMessage(messages[Math.floor(Math.random() * messages.length)])

    // Bigger runaway jumps — harder to catch on mobile
    const angle = Math.random() * Math.PI * 2
    const dist = 40 + Math.random() * 70
    setNoPos({
      x: Math.max(-110, Math.min(110, Math.cos(angle) * dist)),
      y: Math.max(-90, Math.min(70, Math.sin(angle) * dist)),
    })

    if (next >= minNoClicks + 4) {
      window.setTimeout(() => setNoGone(true), 500)
    }
  }, [noClicks, messages, minNoClicks])

  const handleYes = () => {
    if (!yesUnlocked && !noGone) {
      setMessage(`Tap NO at least ${minNoClicks} times first... trust me 😂`)
      return
    }
    onYes()
  }

  return (
    <div className="relative flex w-full flex-col items-center gap-4 pt-1">
      <AnimatePresence mode="wait">
        {message && (
          <motion.p
            key={message + noClicks}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="min-h-[1.5rem] text-center text-sm text-rose font-medium px-2"
          >
            {message}
          </motion.p>
        )}
      </AnimatePresence>

      {!yesUnlocked && !noGone && (
        <p className="text-center text-[0.7rem] text-burgundy/50">
          Hint: the NO button is lying. Chase it {minNoClicks} times 😈
        </p>
      )}

      {noClicks >= minNoClicks + 3 && !noGone && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-sm text-burgundy/70 px-2"
        >
          Okay okay... NO has filed for retirement. 😂❤️
        </motion.p>
      )}

      <div className="relative flex w-full flex-col items-center gap-3 min-h-[160px] overflow-visible">
        <motion.div
          animate={{ scale: yesScale, opacity: yesUnlocked || noGone ? 1 : 0.55 }}
          transition={{ type: 'spring', stiffness: 280, damping: 18 }}
          className="w-full origin-center z-10"
        >
          <SoftButton
            size={noGone ? 'xl' : 'lg'}
            onClick={handleYes}
            className={
              yesUnlocked || noGone
                ? 'shadow-[0_12px_36px_rgba(196,92,122,0.35)]'
                : 'grayscale-[0.2]'
            }
          >
            {yesLabel}
          </SoftButton>
        </motion.div>

        <AnimatePresence>
          {!noGone && (
            <motion.div
              exit={{ opacity: 0, scale: 0, transition: { duration: 0.35 } }}
              animate={{
                scale: noScale,
                x: noPos.x,
                y: noPos.y,
              }}
              transition={{ type: 'spring', stiffness: 380, damping: 16 }}
              className="absolute top-16 z-20 origin-center"
              style={{ width: `${Math.max(22, 72 - noClicks * 7)}%` }}
            >
              <SoftButton variant="danger" size="md" onClick={handleNo} fullWidth>
                {noLabel}
              </SoftButton>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <p className="text-[0.65rem] text-burgundy/40">NO taps: {noClicks}</p>
    </div>
  )
}

/** Backwards-compatible alias */
export function YesNoQuestion({ onYes }: { onYes: () => void }) {
  return <RunawayNoGame onYes={onYes} minNoClicks={3} />
}
