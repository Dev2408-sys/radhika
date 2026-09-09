import { useState } from 'react'
import { SoftButton } from '../components/SoftButton'
import { PageLayout } from '../components/PageLayout'
import { FadeIn, GlassCard } from '../components/ui'
import { Toast } from '../components/Toast'

type Props = { onNext: () => void }

const lines = [
  { icon: '❤️', text: 'Too much love' },
  { icon: '😂', text: 'Unnecessary amounts of bakchodi' },
  { icon: '🥹', text: 'Slight emotional damage' },
  { icon: '😌', text: 'Unlimited boyfriend nonsense' },
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
          <h1 className="font-serif text-center text-[1.55rem] leading-snug text-burgundy">
            ⚠️ IMPORTANT WARNING ⚠️
          </h1>
        </FadeIn>

        <GlassCard delay={0.12}>
          <p className="mb-3 text-sm font-medium text-burgundy/60">This website contains:</p>
          <ul className="space-y-2.5">
            {lines.map((line, i) => (
              <FadeIn key={line.text} delay={0.18 + i * 0.07}>
                <li className="flex items-start gap-2.5 text-[0.95rem] text-burgundy">
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
