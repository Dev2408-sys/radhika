import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type SoftButtonProps = {
  children: ReactNode
  onClick?: () => void
  disabled?: boolean
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger'
  size?: 'md' | 'lg' | 'xl'
  fullWidth?: boolean
  className?: string
  type?: 'button' | 'submit'
}

const variants = {
  primary:
    'bg-rose text-white shadow-[0_8px_24px_rgba(196,92,122,0.28)] active:bg-rose-deep',
  secondary:
    'bg-white/85 text-burgundy border border-pink-soft/60 shadow-[0_6px_20px_rgba(107,45,66,0.06)]',
  ghost: 'bg-transparent text-rose border border-rose/25',
  danger: 'bg-blush-deep/80 text-burgundy border border-pink-mid/40',
}

const sizes = {
  md: 'min-h-12 px-6 text-[0.95rem]',
  lg: 'min-h-14 px-7 text-base',
  xl: 'min-h-16 px-8 text-lg',
}

export function SoftButton({
  children,
  variant = 'primary',
  size = 'lg',
  fullWidth = true,
  className = '',
  disabled,
  onClick,
  type = 'button',
}: SoftButtonProps) {
  return (
    <motion.button
      type={type}
      whileTap={disabled ? undefined : { scale: 0.97 }}
      whileHover={disabled ? undefined : { scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 420, damping: 24 }}
      disabled={disabled}
      onClick={onClick}
      className={[
        'inline-flex items-center justify-center rounded-2xl font-medium tracking-wide',
        'transition-colors duration-200 select-none touch-manipulation',
        'disabled:opacity-50 disabled:pointer-events-none',
        variants[variant],
        sizes[size],
        fullWidth ? 'w-full' : 'w-auto',
        className,
      ].join(' ')}
    >
      {children}
    </motion.button>
  )
}
