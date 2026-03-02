function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-xs uppercase tracking-[0.28em] text-studio-accent md:text-sm">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold text-white md:text-5xl">{title}</h2>
      <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-zinc-300 md:text-base">{description}</p>
    </div>
  )
}

export default SectionHeading
