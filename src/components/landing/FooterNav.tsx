export default function FooterNav() {
    return (
      <footer className="flex gap-4 justify-center border-t pt-6 mt-6 text-sm sm:text-base text-[var(--foreground)]">
        <button className="px-6 py-2 rounded-full bg-[var(--accent)] text-[var(--background)]">
          Home
        </button>
        <button className="px-6 py-2 rounded-full bg-[#e6e6e6] hover:bg-[#d8d8d8] transition">
          Work
        </button>
        <button className="px-6 py-2 rounded-full bg-[#e6e6e6] hover:bg-[#d8d8d8] transition">
          About
        </button>
      </footer>
    )
  }
  