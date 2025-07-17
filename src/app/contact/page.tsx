export default function ContactPage() {
    return (
      <main className="min-h-screen px-6 py-20 sm:px-24 text-[var(--foreground)]">
        <h1 className="text-4xl sm:text-5xl font-bold mb-8">Let's get in touch 👋</h1>
  
        <p className="text-lg max-w-xl mb-12 text-[var(--muted)]">
          Whether you have an idea, a collaboration, or just want to say hello — feel free to reach
          out. I usually reply within 24 hours.
        </p>
  
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl">
          <input
            type="text"
            placeholder="Your name"
            className="border border-[var(--muted)] bg-transparent px-4 py-3 rounded-md"
          />
          <input
            type="email"
            placeholder="Your email"
            className="border border-[var(--muted)] bg-transparent px-4 py-3 rounded-md"
          />
          <textarea
            placeholder="Your message"
            className="border border-[var(--muted)] bg-transparent px-4 py-3 rounded-md sm:col-span-2 min-h-[150px]"
          />
          <button
            type="submit"
            className="sm:col-span-2 bg-[var(--accent)] text-[var(--background)] px-6 py-3 rounded-full hover:bg-black transition"
          >
            Send Message
          </button>
        </form>
      </main>
    )
  }
  