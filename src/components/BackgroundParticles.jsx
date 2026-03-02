import { motion as Motion } from 'framer-motion'
import { useMemo } from 'react'

function BackgroundParticles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 18 }, (_, index) => ({
        id: index,
        left: `${(index * 17.5) % 100}%`,
        top: `${(index * 31.2) % 100}%`,
        duration: 6 + (index % 5),
        delay: (index % 7) * 0.45,
        size: 2 + (index % 3),
      })),
    [],
  )

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {particles.map((particle) => (
        <Motion.span
          key={particle.id}
          className="absolute rounded-full bg-studio-accent/35 blur-[1px]"
          style={{ left: particle.left, top: particle.top, width: particle.size, height: particle.size }}
          animate={{
            y: [0, -24, 0],
            opacity: [0.15, 0.4, 0.15],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

export default BackgroundParticles
