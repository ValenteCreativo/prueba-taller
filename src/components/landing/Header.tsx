import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-12">
      <h1 className="text-[10vw] sm:text-[7vw] font-bold tracking-tight leading-none">
        Saludos a la bandera!
      </h1>

      <nav className="flex gap-4 text-sm sm:text-base font-medium">
        <Link
          href="/about"
          className="hover:underline hover:underline-offset-4 text-[var(--foreground)]"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="hover:underline hover:underline-offset-4 text-[var(--foreground)]"
        >
          Contact
        </Link>
        <Link
          href="/join"
          className="hover:underline hover:underline-offset-4 text-[var(--foreground)]"
        >
          Join
        </Link>
      </nav>
    </header>
  )
}
