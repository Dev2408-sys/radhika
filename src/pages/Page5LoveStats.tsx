import { motion } from 'framer-motion'
import { SoftButton } from '../components/SoftButton'
import { PageLayout } from '../components/PageLayout'
import { FadeIn, GlassCard } from '../components/ui'
import { BOY_NAME } from '../config'

type Props = { onNext: () => void }

const stats = [
  { label: 'Love for you', width: '100%', value: '100%' },
  { label: 'Thinking about you', width: '100%', value: '999%' },
  { label: 'Missing you', width: '100%', value: '∞' },
  { label: 'Wanting to tease you', width: '100%', value: '200%' },
  { label: 'Ready to marry you someday', width: '100%', value: 'FOREVER' },
]

export function Page5LoveStats({ onNext }: Props) {
  return (
    <PageLayout>
      <div className="flex flex-1 flex-col gap-4">
        <FadeIn>
          <h1 className="font-serif text-center text-[1.5rem] leading-snug text-burgundy">
            According to Very Serious Research™
          </h1>
        </FadeIn>

        <GlassCard delay={0.12} className="space-y-4">
          {stats.map((s, i) => (
            <div key={s.label}>
              <div className="mb-1.5 flex items-baseline justify-between gap-2">
                <span className="text-sm font-medium text-burgundy">{s.label}</span>
                <span className="text-xs font-semibold text-rose">{s.value}</span>
              </div>
              <div className="h-2.5 overflow-hidden rounded-full bg-blush">
                <motion.div
                  className="stat-bar h-full"
                  initial={{ width: 0 }}
                  animate={{ width: s.width }}
                  transition={{ duration: 0.9, delay: 0.25 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </div>
          ))}
        </GlassCard>

        <FadeIn delay={0.7}>
          <p className="text-center text-sm leading-relaxed text-burgundy/65">
            Research conducted by:
            <br />
            <span className="font-medium text-burgundy">{BOY_NAME}</span>
            <br />
            <br />
            Peer reviewed by:
            <br />
            Absolutely nobody. <span className="text-base">😂</span>
          </p>
        </FadeIn>

        <FadeIn delay={0.8} className="mt-auto pt-2">
          <SoftButton onClick={onNext}>Next chapter ❤️</SoftButton>
        </FadeIn>
      </div>
    </PageLayout>
  )
}
