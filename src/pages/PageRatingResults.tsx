import { Trophy, Laugh } from 'lucide-react'
import { SoftButton } from '../components/SoftButton'
import { PageLayout } from '../components/PageLayout'
import { FadeIn, GlassCard } from '../components/ui'
import { useRatings } from '../hooks/useRatings'
import { BOY_FIRST, GIRL_NAME } from '../config'
import { HeartFullIcon } from '../components/icons'

type Props = { onNext: () => void }

function labelBeauty(n: number) {
  if (n >= 10.5) return 'Illegal levels of pretty 😳'
  if (n >= 9.5) return 'Certified heart-stealer'
  if (n >= 8.5) return 'Dangerously cute'
  if (n >= 7.5) return 'Soft launch approved'
  return 'Still winning somehow'
}

function labelFunny(n: number) {
  if (n >= 9.5) return 'Comedy + cuteness DLC unlocked'
  if (n >= 8.5) return 'Professional vibe distributor'
  if (n >= 7.5) return 'Smile tax collector'
  return 'Quietly chaotic energy'
}

export function PageRatingResults({ onNext }: Props) {
  const { pratikAvg, radhikaAvg } = useRatings()

  const pB = pratikAvg.beauty || 0
  const pF = pratikAvg.funny || 0
  const rB = radhikaAvg.beauty || 0
  const rF = radhikaAvg.funny || 0

  const winner =
    rB + rF >= pB + pF
      ? `${GIRL_NAME} wins the scoreboard (obviously).`
      : `${BOY_FIRST} scored high… but ${GIRL_NAME} still owns his heart.`

  const roast =
    rB >= 10
      ? `Verdict: ${GIRL_NAME}'s beauty ratings broke the calculator. ${BOY_FIRST} is not surprised.`
      : rB >= 9
        ? `Verdict: Even when she rates herself, the universe forces high scores. Fair.`
        : `Verdict: The scoreboard is cute. The couple is cuter.`

  const coupleScore = Math.min(11, (pB + rB + pF + rF) / 4)

  return (
    <PageLayout>
      <div className="flex flex-1 flex-col justify-center gap-4">
        <FadeIn>
          <div className="flex flex-col items-center gap-2 text-center">
            <Trophy className="text-rose" size={28} strokeWidth={1.75} />
            <h1 className="font-serif text-[1.55rem] text-burgundy">Official Rating Results 😂</h1>
            <p className="text-sm text-burgundy/60">Based on YOUR very scientific votes™</p>
          </div>
        </FadeIn>

        <GlassCard delay={0.1} className="space-y-3">
          <p className="font-script text-xl text-rose">{BOY_FIRST}&apos;s report card</p>
          <div className="flex justify-between text-sm text-burgundy">
            <span>Beauty avg</span>
            <span className="font-semibold text-rose">{pB.toFixed(1)} / 10</span>
          </div>
          <p className="text-xs text-burgundy/55">{labelBeauty(pB)}</p>
          <div className="flex justify-between text-sm text-burgundy">
            <span>Hasi-majak avg</span>
            <span className="font-semibold text-rose">{pF.toFixed(1)} / 10</span>
          </div>
          <p className="text-xs text-burgundy/55">{labelFunny(pF)}</p>
        </GlassCard>

        <GlassCard delay={0.2} className="space-y-3">
          <p className="font-script text-xl text-rose">{GIRL_NAME}&apos;s report card</p>
          <div className="flex justify-between text-sm text-burgundy">
            <span>Beauty avg</span>
            <span className="font-semibold text-rose">
              {rB >= 11 ? '∞' : rB.toFixed(1)} / 10
            </span>
          </div>
          <p className="text-xs text-burgundy/55">{labelBeauty(rB)}</p>
          <div className="flex justify-between text-sm text-burgundy">
            <span>Hasi-majak avg</span>
            <span className="font-semibold text-rose">{rF.toFixed(1)} / 10</span>
          </div>
          <p className="text-xs text-burgundy/55">{labelFunny(rF)}</p>
        </GlassCard>

        <FadeIn delay={0.35}>
          <div className="glass-card rounded-3xl p-4 text-center space-y-2">
            <div className="flex justify-center">
              <HeartFullIcon size={44} />
            </div>
            <p className="flex items-center justify-center gap-1.5 text-sm font-medium text-burgundy">
              <Laugh size={16} className="text-rose" /> Couple chaos score
            </p>
            <p className="font-serif text-3xl text-rose">
              {coupleScore >= 11 ? '∞' : coupleScore.toFixed(1)}
            </p>
            <p className="text-sm text-burgundy/80 leading-relaxed">{winner}</p>
            <p className="text-sm text-burgundy/65 leading-relaxed italic">{roast}</p>
            <p className="pt-1 text-xs text-burgundy/50">
              Final note: ratings expire never. Love expires never. Teasing expires never. ❤️
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.45} className="pt-1">
          <SoftButton onClick={onNext}>Continue the story 💕</SoftButton>
        </FadeIn>
      </div>
    </PageLayout>
  )
}
