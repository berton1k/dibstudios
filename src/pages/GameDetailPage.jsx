import { motion as Motion } from 'framer-motion'
import { Link, Navigate, useParams } from 'react-router-dom'
import AnimatedCounter from '../components/AnimatedCounter'
import { studioGames } from '../data/games'

function GameDetailPage() {
  const { id } = useParams()
  const game = studioGames.find((item) => item.id === id)

  if (!game) {
    return <Navigate to="/" replace />
  }

  return (
    <main className="min-h-screen bg-studio-base px-4 pb-20 pt-10 text-studio-text md:px-8">
      <Motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto w-[min(100%,1080px)]"
      >
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-zinc-200 transition duration-300 hover:-translate-x-0.5 hover:border-studio-accent/60 hover:text-white"
        >
          <span aria-hidden="true">←</span>
          Back to Home
        </Link>

        <section className="mt-7 overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/70">
          <div className="relative h-72 md:h-96">
            <img src={game.thumbnail} alt={game.title} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 md:p-10">
              <img src={game.logo} alt={`${game.title} logo`} className="h-16 w-auto md:h-20" />
              <h1 className="mt-3 text-3xl font-semibold text-white md:text-5xl">{game.title}</h1>
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
          <article className="rounded-2xl border border-white/10 bg-zinc-900/55 p-6 md:p-8">
            <h2 className="text-xl font-semibold text-white">Overview</h2>
            <p className="mt-4 text-sm leading-relaxed text-zinc-300 md:text-base">{game.description}</p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={game.robloxUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-studio-accent/65 bg-studio-accent px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-white transition duration-300 hover:bg-studio-accentSoft"
              >
                Play on Roblox
              </a>
              <a
                href={game.discordUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/20 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-zinc-200 transition duration-300 hover:border-white/45 hover:text-white"
              >
                Join Discord
              </a>
            </div>
          </article>

          <aside className="rounded-2xl border border-white/10 bg-zinc-900/55 p-6 md:p-8">
            <h2 className="text-xl font-semibold text-white">Stats</h2>

            <div className="mt-5 space-y-4">
              <div className="rounded-xl border border-white/10 bg-black/25 p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-zinc-400">Peak Players</p>
                <p className="mt-2 text-2xl font-semibold text-white">
                  <AnimatedCounter value={game.peakPlayers} />
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/25 p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-zinc-400">Visits</p>
                <p className="mt-2 text-2xl font-semibold text-white">
                  <AnimatedCounter value={game.visits} />
                </p>
              </div>
            </div>
          </aside>
        </section>

        <section className="mt-8 rounded-2xl border border-white/10 bg-zinc-900/55 p-6 md:p-8">
          <h2 className="text-xl font-semibold text-white">Gallery</h2>
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {game.gallery.map((item, index) => (
              <Motion.div
                key={item}
                className="overflow-hidden rounded-xl border border-white/10"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <img src={item} alt={`${game.title} screenshot ${index + 1}`} className="h-44 w-full object-cover" />
              </Motion.div>
            ))}
          </div>
        </section>
      </Motion.div>
    </main>
  )
}

export default GameDetailPage
