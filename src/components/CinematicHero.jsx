import { motion as Motion } from 'framer-motion'

function CinematicHero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <Motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/assets/bgg-DvljgOdy.jpg)' }}
        animate={{ scale: [1.02, 1.06, 1.02], y: [0, -8, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="absolute inset-0 bg-black/65" />
      <Motion.div
        className="absolute inset-0 bg-radial-accent"
        animate={{ opacity: 0.85 }}
        transition={{ duration: 1.1, ease: 'easeOut' }}
      />

      <Motion.div
        className="relative z-20 mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center justify-center px-6 text-center"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      >
        <img src="/assets/logo-BS0Jtj_a.png" alt="Studio logo" className="mb-8 h-20 w-auto md:h-24" />
        <p className="mb-4 text-sm uppercase tracking-[0.28em] text-studio-muted md:text-base">
          DiBStudios · Roblox Game Studio
        </p>
        <h1 className="text-gradient max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
          Building Competitive Worlds That Players Remember
        </h1>
        <p className="mt-6 max-w-2xl text-sm text-zinc-200 md:text-lg">
          We craft premium Roblox experiences with polished systems, cinematic visuals, and live operations that scale
          with global communities.
        </p>
        <a
          href="#projects"
          className="mt-10 rounded-full border border-studio-accent/60 bg-studio-accent px-7 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white shadow-glow transition duration-300 hover:-translate-y-0.5 hover:bg-studio-accentSoft"
        >
          Explore Projects
        </a>
      </Motion.div>
    </section>
  )
}

export default CinematicHero
