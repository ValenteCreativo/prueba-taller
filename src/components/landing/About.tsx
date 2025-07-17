export default function About() {
    return (
      <div className="flex flex-col justify-between gap-8 text-[var(--foreground)]">
        <p className="text-base sm:text-lg leading-relaxed text-[var(--muted)]">
          I&apos;m a 32-year-old French front-end developer who cares about design. My focus is on precise
          integration and crafting innovative interactions.
        </p>
  
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="border border-[var(--accent)] rounded-full px-6 py-2 hover:bg-[var(--accent)] hover:text-[var(--background)] transition text-sm sm:text-base">
            See my projects
          </button>
          <button className="px-6 py-2 rounded-full bg-transparent text-[var(--foreground)] hover:underline transition text-sm sm:text-base">
            Quick overview
          </button>
        </div>
      </div>
    )
  }
  