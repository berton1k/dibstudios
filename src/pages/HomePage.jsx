import { motion as Motion } from 'framer-motion'
import { useEffect } from 'react'
import AnimatedCounter from '../components/AnimatedCounter'
import BackgroundParticles from '../components/BackgroundParticles'
import CinematicHero from '../components/CinematicHero'
import GlassNavbar from '../components/GlassNavbar'
import ProjectCard from '../components/ProjectCard'
import SectionHeading from '../components/SectionHeading'
import { studioGames, studioStats } from '../data/games'

function HomePage() {
  useEffect(() => {
    if (!window.location.hash) {
      return
    }

    const id = window.location.hash.replace('#', '')
    const target = document.getElementById(id)

    if (target) {
      window.setTimeout(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }), 120)
    }
  }, [])

  return (
    <main className="relative bg-studio-base text-studio-text">
      <GlassNavbar />
      <CinematicHero />

      <section className="section-divider relative overflow-hidden py-20">
        <BackgroundParticles />
        <div className="mx-auto grid w-[min(92%,1100px)] grid-cols-1 gap-4 md:grid-cols-3">
          {studioStats.map((stat) => (
            <Motion.div
              key={stat.label}
              className="glass rounded-2xl px-6 py-7 text-center"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs uppercase tracking-[0.18em] text-zinc-400">{stat.label}</p>
              <p className="mt-3 text-3xl font-semibold text-white md:text-4xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
            </Motion.div>
          ))}
        </div>
      </section>

      <section id="projects" className="section-divider py-24">
        <div className="mx-auto w-[min(92%,1100px)]">
          <SectionHeading
            eyebrow="Projects"
            title="Flagship Experiences"
            description="Each title is developed for retention, replayability, and visual clarity at scale. We balance creative direction with live game metrics to ship competitive Roblox products."
          />

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {studioGames.map((game) => (
              <ProjectCard key={game.id} game={game} />
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section-divider py-24">
        <div className="mx-auto grid w-[min(92%,1100px)] gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-studio-accent">About</p>
            <h2 className="mt-4 text-3xl font-semibold text-white md:text-5xl">A studio focused on long-term game ecosystems.</h2>
            <p className="mt-6 text-sm leading-relaxed text-zinc-300 md:text-base">
              DiBStudios is a Roblox-focused team of designers, engineers, and live-ops specialists. We create
              premium multiplayer experiences with clean systems architecture, cinematic art direction, and measurable
              gameplay outcomes.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-zinc-400 md:text-base">
              From concept to post-launch, we ship with clarity, test with intent, and iterate using community and data
              signals.
            </p>
          </div>

          <div className="glass rounded-3xl border border-studio-accent/20 bg-black/30 p-7">
            <h3 className="text-lg font-semibold text-white">Studio Principles</h3>
            <ul className="mt-5 space-y-3 text-sm text-zinc-300">
              <li>Design for clarity before complexity.</li>
              <li>Balance game feel with system integrity.</li>
              <li>Build community-first live updates.</li>
              <li>Ship quality, then scale performance.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="section-divider pb-24 pt-24">
        <div className="mx-auto w-[min(92%,900px)]">
          <div className="glass rounded-3xl border border-studio-accent/20 bg-zinc-950/60 px-6 py-10 text-center md:px-12">
            <p className="text-xs uppercase tracking-[0.28em] text-studio-accent">Contact</p>
            <h2 className="mt-4 text-3xl font-semibold text-white md:text-5xl">Let’s build your next Roblox hit.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-zinc-300 md:text-base">
              For publishing, co-development, and studio partnerships, reach out to our team. We reply with timelines,
              production scope, and strategic recommendations.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="mailto:contact@dibstudios.gg"
                className="rounded-full border border-studio-accent/60 bg-studio-accent px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition duration-300 hover:bg-studio-accentSoft"
              >
                contact@dibstudios.gg
              </a>
              <a
                href="https://discord.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/20 px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-zinc-200 transition duration-300 hover:border-white/45 hover:text-white"
              >
                Join Discord
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default HomePage
