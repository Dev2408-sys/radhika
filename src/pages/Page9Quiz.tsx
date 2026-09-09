import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { SoftButton } from '../components/SoftButton'
import { PageLayout } from '../components/PageLayout'
import { FadeIn } from '../components/ui'
import { RunawayNoGame } from '../components/YesNoQuestion'
import { Laugh, Sparkles } from 'lucide-react'

type Props = { onNext: () => void }

type Step = 'intro' | 'q1' | 'q2' | 'q3' | 'q4' | 'q5' | 'done'

const runawayQs: {
  id: Step
  question: string
  yesLabel: string
  noLabel: string
  after: string
  next: Step
  minNo: number
}[] = [
  {
    id: 'q1',
    question: 'Is Pratik the luckiest boyfriend alive?',
    yesLabel: 'YES obviously 😌',
    noLabel: 'NO 🙈',
    after: 'Correct. He put it on his resume. 😂',
    next: 'q2',
    minNo: 2,
  },
  {
    id: 'q2',
    question: 'Will you ever get bored of him?',
    yesLabel: 'Never ❤️',
    noLabel: 'Maybe 👀',
    after: 'Good. "Maybe" has been banned from this relationship. 😂',
    next: 'q3',
    minNo: 3,
  },
  {
    id: 'q3',
    question: 'Do you forgive all his future nonsense in advance?',
    yesLabel: 'Fine... YES 💕',
    noLabel: 'NO way',
    after: 'Birthday contract signed. Lawyer = vibes. 📝😂',
    next: 'q4',
    minNo: 3,
  },
  {
    id: 'q4',
    question: 'Are you his favourite human in the whole world?',
    yesLabel: 'YES ❤️',
    noLabel: 'NO',
    after: 'Scientific fact. Peer-reviewed by his smile. 🥹',
    next: 'q5',
    minNo: 2,
  },
  {
    id: 'q5',
    question: 'Promise to stay — girlfriend now, wife someday?',
    yesLabel: 'I promise 💍',
    noLabel: 'NO 🙈',
    after: 'THAT\'S MY GIRL. Forever loading... 100% ❤️',
    next: 'done',
    minNo: 4,
  },
]

export function Page9Quiz({ onNext }: Props) {
  const [step, setStep] = useState<Step>('intro')
  const [flash, setFlash] = useState<string | null>(null)

  const current = runawayQs.find((q) => q.id === step)

  const finishQuestion = (after: string, next: Step) => {
    setFlash(after)
    window.setTimeout(() => {
      setFlash(null)
      setStep(next)
    }, 1600)
  }

  return (
    <PageLayout>
      <div className="flex flex-1 flex-col justify-center gap-4">
        <FadeIn>
          <div className="flex flex-col items-center gap-1 text-center">
            <Laugh className="text-rose" size={26} strokeWidth={1.75} />
            <h1 className="font-serif text-[1.55rem] text-burgundy">
              Chaos Round 😂
            </h1>
            <p className="text-xs text-burgundy/55">Warning: the NO button will try to escape</p>
          </div>
        </FadeIn>

        <AnimatePresence mode="wait">
          {step === 'intro' && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="space-y-4 text-center"
            >
              <p className="text-burgundy/80 text-sm leading-relaxed px-1">
                Enough soft emotions.
                <br />
                Time for questions where <span className="font-medium text-rose">NO is a trap</span>.
              </p>
              <p className="text-sm text-burgundy/60">
                You&apos;ll want to tap NO... and then regret it immediately. 😈
              </p>
              <SoftButton onClick={() => setStep('q1')}>
                <span className="inline-flex items-center gap-2">
                  <Sparkles size={16} /> Let the chaos begin
                </span>
              </SoftButton>
            </motion.div>
          )}

          {current && !flash && (
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="space-y-3"
            >
              <p className="text-center text-[0.7rem] font-medium tracking-wide text-burgundy/45 uppercase">
                Question {runawayQs.findIndex((q) => q.id === current.id) + 1} / {runawayQs.length}
              </p>
              <p className="text-center font-serif text-[1.2rem] leading-snug text-burgundy px-1">
                {current.question}
              </p>
              <RunawayNoGame
                key={current.id}
                yesLabel={current.yesLabel}
                noLabel={current.noLabel}
                minNoClicks={current.minNo}
                onYes={() => finishQuestion(current.after, current.next)}
              />
            </motion.div>
          )}

          {flash && (
            <motion.div
              key={flash}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="glass-card rounded-3xl px-5 py-8 text-center"
            >
              <p className="font-medium text-burgundy leading-relaxed">{flash}</p>
            </motion.div>
          )}

          {step === 'done' && !flash && (
            <motion.div
              key="done"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-5 text-center"
            >
              <p className="font-serif text-xl text-burgundy leading-snug">
                Chaos Round: SURVIVED 😂❤️
              </p>
              <p className="text-sm text-burgundy/65">
                You chased NO like it owed you money.
                <br />
                Certified girlfriend energy unlocked.
              </p>
              <SoftButton onClick={onNext}>Next: heart puzzle 🧩</SoftButton>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageLayout>
  )
}
