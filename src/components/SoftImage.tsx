import { motion } from 'framer-motion'

type SoftImageProps = {
  src: string
  alt: string
  className?: string
  delay?: number
}

export function SoftImage({ src, alt, className = '', delay = 0 }: SoftImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={['relative overflow-hidden rounded-[1.75rem] shadow-[0_12px_36px_rgba(107,45,66,0.1)]', className].join(' ')}
    >
      <div className="pointer-events-none absolute inset-0 z-10 ring-1 ring-inset ring-white/50 rounded-[1.75rem]" />
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-burgundy/10 via-transparent to-white/20" />
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover"
      />
    </motion.div>
  )
}
