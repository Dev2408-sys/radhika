import type { ReactNode } from 'react'

type PageLayoutProps = {
  children: ReactNode
  className?: string
  glow?: boolean
}

export function PageLayout({ children, className = '', glow = true }: PageLayoutProps) {
  return (
    <div
      className={[
        'relative flex h-full w-full flex-col safe-pad',
        glow ? 'soft-glow' : '',
        className,
      ].join(' ')}
    >
      <div className="scroll-y relative z-10 flex flex-1 flex-col pt-12 pb-4">{children}</div>
    </div>
  )
}
