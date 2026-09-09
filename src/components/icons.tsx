/** Inline SVG assets — crisp, no broken-heart vibes */

export function HeartFullIcon({ className = '', size = 64 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient id="heartGrad" x1="8" y1="10" x2="56" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F5A3B5" />
          <stop offset="0.55" stopColor="#C45C7A" />
          <stop offset="1" stopColor="#A34460" />
        </linearGradient>
        <filter id="heartGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="#C45C7A" floodOpacity="0.35" />
        </filter>
      </defs>
      <path
        filter="url(#heartGlow)"
        fill="url(#heartGrad)"
        d="M32 54C32 54 8 40 8 24.5C8 16.5 14 11 21.5 11C26.2 11 29.8 13.4 32 16.8C34.2 13.4 37.8 11 42.5 11C50 11 56 16.5 56 24.5C56 40 32 54 32 54Z"
      />
      <path
        fill="white"
        fillOpacity="0.28"
        d="M21.5 15.5C17 15.5 13.5 18.8 13.5 23.8C13.5 25.2 13.8 26.5 14.3 27.7C15.8 21.5 20.2 17.2 26 16.2C24.6 15.7 23.1 15.5 21.5 15.5Z"
      />
    </svg>
  )
}

export function HeartLeftHalf({ className = '', size = 120 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient id="leftGrad" x1="8" y1="12" x2="32" y2="54" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F7B8C6" />
          <stop offset="1" stopColor="#C45C7A" />
        </linearGradient>
      </defs>
      <path
        fill="url(#leftGrad)"
        d="M32 54C32 54 8 40 8 24.5C8 16.5 14 11 21.5 11C26.2 11 29.8 13.4 32 16.8V54Z"
      />
      <path stroke="#fff" strokeOpacity="0.45" strokeWidth="1.2" d="M32 17 V53.2" />
    </svg>
  )
}

export function HeartRightHalf({ className = '', size = 120 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient id="rightGrad" x1="32" y1="12" x2="56" y2="54" gradientUnits="userSpaceOnUse">
          <stop stopColor="#E88FA5" />
          <stop offset="1" stopColor="#A34460" />
        </linearGradient>
      </defs>
      <path
        fill="url(#rightGrad)"
        d="M32 16.8C34.2 13.4 37.8 11 42.5 11C50 11 56 16.5 56 24.5C56 40 32 54 32 54V16.8Z"
      />
      <path stroke="#fff" strokeOpacity="0.45" strokeWidth="1.2" d="M32 17 V53.2" />
    </svg>
  )
}

export function SparkleIcon({ className = '', size = 20 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M12 2L13.8 8.2L20 10L13.8 11.8L12 18L10.2 11.8L4 10L10.2 8.2L12 2Z"
        fill="#C45C7A"
        fillOpacity="0.85"
      />
    </svg>
  )
}

export function RingIcon({ className = '', size = 48 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" className={className} aria-hidden>
      <ellipse cx="26" cy="36" rx="14" ry="14" fill="none" stroke="#D4A017" strokeWidth="4" />
      <ellipse cx="38" cy="36" rx="14" ry="14" fill="none" stroke="#E8C547" strokeWidth="4" />
      <path d="M30 18 L32 12 L34 18 L40 19 L35.5 23 L37 29 L32 26 L27 29 L28.5 23 L24 19 Z" fill="#C45C7A" />
    </svg>
  )
}
