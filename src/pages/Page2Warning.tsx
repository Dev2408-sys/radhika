import { useState } from 'react'
import { SoftButton } from '../components/SoftButton'
import { PageLayout } from '../components/PageLayout'
import { FadeIn, GlassCard } from '../components/ui'
import { Toast } from '../components/Toast'
import { Heart, PartyPopper } from 'lucide-react'

type Props = { onNext: () => void }

const lines = [
  { icon: '❤️', text: 'Too much love (dangerous levels)' },
  { icon: '😂', text: 'Unnecessary teasing & boyfriend comedy' },
  { icon: '🥹', text: 'Slight emotional damage (cute edition)' },
  { icon: '🏃', text: 'A NO button that WILL run away from you' },
  { icon: '🧩', text: 'One heart puzzle you must solve' },
  { icon: '💍', text: 'Future husband & wife energy' },
  { icon: '🎂', text: 'And one very special birthday girl.' },
]

export function Page2Warning({ onNext }: Props) {
  const [toast, setToast] = useState<string | null>(null)

  const handleClick = () => {
    setToast('Good decision. You were always my favourite person anyway. 😂❤️')
  }

  return (
    <PageLayout>
      <div className="flex flex-1 flex-col justify-center gap-5">
        <FadeIn>
          <div className="flex flex-col items-center gap-2">
            <PartyPopper className="text-rose" size={28} strokeWidth={1.75} />
            <h1 className="font-serif text-center text-[1.55rem] leading-snug text-burgundy">
              ⚠️ IMPORTANT WARNING ⚠️
            </h1>
          </div>
        </FadeIn>

        <GlassCard delay={0.12}>
          <p className="mb-3 text-sm font-medium text-burgundy/60 flex items-center gap-1.5">
            <Heart size={14} className="text-rose" /> This website contains:
          </p>
          <ul className="space-y-2.5">
            {lines.map((line, i) => (
              <FadeIn key={line.text} delay={0.15 + i * 0.06}>
                <li className="flex items-start gap-2.5 text-[0.92rem] text-burgundy">
                  <span className="shrink-0">{line.icon}</span>
                  <span>{line.text}</span>
                </li>
              </FadeIn>
            ))}
          </ul>
        </GlassCard>

        <FadeIn delay={0.55}>
          <p className="text-center font-script text-2xl text-rose">Continue at your own risk.</p>
        </FadeIn>

        <FadeIn delay={0.65}>
          <SoftButton onClick={handleClick} disabled={!!toast}>
            Obviously 😌
          </SoftButton>
        </FadeIn>
      </div>

      <Toast
        message={toast}
        onDone={() => {
          setToast(null)
          onNext()
        }}
      />
    </PageLayout>
  )
}
