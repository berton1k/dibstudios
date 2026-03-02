import { motion as Motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import GlassNavbar from '../components/GlassNavbar'
import { studioGames } from '../data/games'

function AllGames() {
  return (
    <main className="min-h-screen bg-studio-base pb-20 text-studio-text">
      <GlassNavbar />

      <section className="mx-auto w-[min(94%,1180px)] px-2 pb-10 pt-28 md:pt-32">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.28em] text-studio-accent">DiBStudios</p>
          <h1 className="mt-4 text-4xl font-semibold text-white md:text-6xl">All Games</h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm text-zinc-300 md:text-base">
            Explore the full DiB portfolio. Every title is crafted for standout gameplay loops and polished visual style.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {studioGames.map((game, index) => (
            <Motion.div
              key={game.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: (index % 4) * 0.08 }}
            >
              <Link
                to={`/game/${game.id}`}
                className="group block overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/50 transition duration-300 hover:scale-[1.02] hover:border-studio-accent/60 hover:shadow-glow"
              >
                <div className="relative">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                </div>
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-white">{game.title}</h2>
                  <p className="mt-1 text-xs uppercase tracking-[0.15em] text-zinc-400">Open Game Profile</p>
                </div>
              </Link>
            </Motion.div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default AllGames
