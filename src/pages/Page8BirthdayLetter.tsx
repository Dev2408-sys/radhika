import { motion } from 'framer-motion'
import { SoftButton } from '../components/SoftButton'
import { PageLayout } from '../components/PageLayout'
import { FadeIn } from '../components/ui'
import { BOY_NAME, GIRL_NAME } from '../config'

type Props = { onNext: () => void }

const paragraphs = [
  `Dear ${GIRL_NAME},`,
  `Happy Birthday to the person who makes life a little happier, a little softer, and definitely a lot more beautiful.`,
  `I hope this new year of your life brings you everything your heart deserves.`,
  `I hope you smile more.`,
  `I hope you achieve everything you're dreaming about.`,
  `I hope you always know how special you are.`,
  `And selfishly...`,
  `I hope I get to be there for a lot of those smiles — as your boyfriend today, and as your husband someday.`,
  `In every good time and every hard time, I want to stay.`,
  `You are my ardhang — my better half. Without you, this story feels incomplete.`,
  `Thank you for being you.`,
  `Never change the beautiful person you are.`,
  `Happy Birthday, my favourite human. My future wife. ❤️`,
  `— ${BOY_NAME}`,
]

export function Page8BirthdayLetter({ onNext }: Props) {
  return (
    <PageLayout>
      <div className="flex flex-1 flex-col gap-4">
        <FadeIn>
          <h1 className="font-serif text-center text-[1.65rem] text-burgundy">
            A Little Letter For You
          </h1>
        </FadeIn>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="letter-paper rounded-3xl px-5 py-5 flex-1"
        >
          <div className="space-y-2.5">
            {paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 + i * 0.14, duration: 0.4 }}
                className={[
                  'leading-relaxed text-burgundy/90',
                  i === 0 ? 'font-script text-2xl text-rose' : 'text-sm',
                  i === paragraphs.length - 1 ? 'font-script text-xl text-rose pt-2' : '',
                  p.startsWith('And selfishly') || p.includes('ardhang') ? 'italic text-rose' : '',
                ].join(' ')}
              >
                {p}
              </motion.p>
            ))}
          </div>
        </motion.div>

        <FadeIn delay={2.4} className="pt-1">
          <SoftButton onClick={onNext}>Okay... soft mode off 😂</SoftButton>
        </FadeIn>
      </div>
    </PageLayout>
  )
}
