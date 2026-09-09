import { AnimatePresence, motion } from 'framer-motion'
import { useCallback, useState } from 'react'
import { SoftButton } from './SoftButton'

const NO_MESSAGES = [
  'Are you sure? 🥺',
  'Think again... 👀',
  'That button looks suspicious.',
  'Nice try 😂',
  'Wrong answer detected.',
  'Please reconsider. ❤️',
  'System says NO is not available.',
  'Hmm... try the other one.',
  'Bold of you to click that.',
]

type YesNoQuestionProps = {
  onYes: () => void
}

export function YesNoQuestion({ onYes }: YesNoQuestionProps) {
  const [noClicks, setNoClicks] = useState(0)
  const [message, setMessage] = useState<string | null>(null)
  const [noPos, setNoPos] = useState({ x: 0, y: 0 })
  const [noGone, setNoGone] = useState(false)

  const yesScale = Math.min(1.55, 1 + noClicks * 0.12)
  const noScale = Math.max(0.35, 1 - noClicks * 0.12)

  const handleNo = useCallback(() => {
    const next = noClicks + 1
    setNoClicks(next)
    setMessage(NO_MESSAGES[Math.floor(Math.random() * NO_MESSAGES.length)])

    const angle = Math.random() * Math.PI * 2
    const dist = 28 + Math.random() * 48
    setNoPos({
      x: Math.cos(angle) * dist,
      y: Math.sin(angle) * dist,
    })

    if (next >= 6) {
      window.setTimeout(() => setNoGone(true), 700)
    }
  }, [noClicks])

  return (
    <div className="relative flex w-full flex-col items-center gap-5 pt-2">
      <AnimatePresence mode="wait">
        {message && (
          <motion.p
            key={message + noClicks}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="min-h-[1.5rem] text-center text-sm text-rose font-medium"
          >
            {message}
          </motion.p>
        )}
      </AnimatePresence>

      {noClicks >= 5 && !noGone && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-sm text-burgundy/70 px-2"
        >
          Okay okay... I think we've established that NO is not an option. 😂❤️
        </motion.p>
      )}

      <div className="relative flex w-full flex-col items-center gap-3 min-h-[140px]">
        <motion.div
          animate={{ scale: yesScale }}
          transition={{ type: 'spring', stiffness: 280, damping: 18 }}
          className="w-full origin-center"
          style={{ maxWidth: noGone ? '100%' : undefined }}
        >
          <SoftButton
            size={noGone ? 'xl' : 'lg'}
            onClick={onYes}
            className={noGone ? 'shadow-[0_12px_36px_rgba(196,92,122,0.35)]' : ''}
          >
            YES ❤️
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
              transition={{ type: 'spring', stiffness: 320, damping: 20 }}
              className="w-full origin-center"
              style={{ maxWidth: `${Math.max(28, 100 - noClicks * 10)}%` }}
            >
              <SoftButton variant="danger" size="md" onClick={handleNo}>
                NO 🙈
              </SoftButton>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
