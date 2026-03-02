import { motion as Motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const links = [
  { label: 'Home', type: 'section', id: 'home' },
  { label: 'Projects', type: 'section', id: 'projects' },
  { label: 'Games', type: 'route', path: '/games' },
  { label: 'About', type: 'section', id: 'about' },
  { label: 'Contact', type: 'section', id: 'contact' },
]

function GlassNavbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (link) => {
    setMobileOpen(false)

    if (link.type === 'route') {
      navigate(link.path)
      return
    }

    if (location.pathname !== '/') {
      navigate(`/#${link.id}`)
      return
    }

    const target = document.getElementById(link.id)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <Motion.header
      initial={{ y: -22, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <nav
        className={`mx-auto mt-4 flex w-[min(95%,1100px)] items-center justify-between rounded-full px-4 py-3 transition-all duration-300 md:px-6 ${
          scrolled ? 'glass shadow-glow' : 'bg-transparent'
        }`}
      >
        <button
          type="button"
          onClick={() => navigate('/')}
          className="flex items-center"
          aria-label="DiBStudios home"
        >
          <img src="/assets/logo-BS0Jtj_a.png" alt="DiBStudios" className="h-8 w-auto md:h-9" />
        </button>

        <div className="hidden items-center gap-1 md:flex md:gap-3">
          {links.map((link) => (
            <button
              key={link.label}
              type="button"
              onClick={() => handleNav(link)}
              className="rounded-full px-3 py-1.5 text-xs font-medium text-zinc-200 transition duration-300 hover:bg-white/10 hover:text-white md:px-4 md:text-sm"
            >
              {link.label}
            </button>
          ))}
        </div>

        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setMobileOpen((previous) => !previous)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition duration-300 hover:border-studio-accent/60 md:hidden"
        >
          <span className="text-lg leading-none">{mobileOpen ? '×' : '☰'}</span>
        </button>
      </nav>

      {mobileOpen && (
        <Motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="glass mx-auto mt-3 w-[min(95%,1100px)] rounded-2xl p-2 md:hidden"
        >
          {links.map((link) => (
            <button
              key={link.label}
              type="button"
              onClick={() => handleNav(link)}
              className="block w-full rounded-xl px-4 py-3 text-left text-sm text-zinc-100 transition duration-300 hover:bg-white/10"
            >
              {link.label}
            </button>
          ))}
        </Motion.div>
      )}
    </Motion.header>
  )
}

export default GlassNavbar
