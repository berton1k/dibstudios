import { motion as Motion } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedCounter from './AnimatedCounter'

function ProjectCard({ game }) {
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 })

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    const rotateY = ((x / rect.width) - 0.5) * 10
    const rotateX = ((0.5 - y / rect.height)) * 10

    setTilt({ rotateX, rotateY })
  }

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 })
  }

  return (
    <Motion.article
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/60 p-4 transition-colors duration-300 hover:border-studio-accent/60"
      style={{ transformStyle: 'preserve-3d' }}
      animate={{ rotateX: tilt.rotateX, rotateY: tilt.rotateY }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 210, damping: 18, mass: 0.6 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 rounded-2xl border border-studio-accent/70 shadow-glow" />
      </div>

      <div className="relative overflow-hidden rounded-xl">
        <img src={game.thumbnail} alt={game.title} className="h-52 w-full object-cover transition duration-500 group-hover:scale-105" />
      </div>

      <div className="mt-4">
        <h3 className="text-xl font-semibold text-white">{game.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-zinc-300">{game.shortDescription}</p>

        <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
          <div className="rounded-lg border border-white/10 bg-black/25 p-3">
            <p className="text-[11px] uppercase tracking-[0.14em] text-zinc-400">Peak Players</p>
            <p className="mt-1 text-base font-semibold text-white">
              <AnimatedCounter value={game.peakPlayers} />
            </p>
          </div>
          <div className="rounded-lg border border-white/10 bg-black/25 p-3">
            <p className="text-[11px] uppercase tracking-[0.14em] text-zinc-400">Visits</p>
            <p className="mt-1 text-base font-semibold text-white">
              <AnimatedCounter value={game.visits} />
            </p>
          </div>
        </div>

        <div className="mt-5 flex justify-end">
          <Link
            to={`/game/${game.id}`}
            className="translate-y-2 rounded-full border border-studio-accent/60 bg-studio-accent/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-studio-accent"
          >
            View Game
          </Link>
        </div>
      </div>
    </Motion.article>
  )
}

export default ProjectCard
