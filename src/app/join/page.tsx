'use client'

import { useState } from 'react'

const phrases = [
  "Build boldly, break carefully.",
  "Design is intelligence made visible.",
  "You don’t need permission to make cool stuff.",
  "Complexity is easy. Simplicity is hard.",
  "Don’t ship code. Ship confidence.",
  "Write code like poetry. Then refactor like an engineer.",
  "Make it work. Make it right. Make it fast.",
  "Creativity is a wild mind and a disciplined eye.",
  "Done is better than perfect.",
  "Shipping is the ultimate test.",
  "Small teams. Big impact.",
  "Code is craft, not just function.",
  "The best UI is invisible.",
  "Ideas are cheap. Execution is rare.",
  "Think visually. Act logically.",
  "Tools matter. But mindset matters more.",
  "Art + Logic = Magic.",
  "Be curious, not judgmental.",
  "Side projects build careers.",
  "Use the force... of clean code.",
]

export default function JoinPage() {
  const [quote, setQuote] = useState("Click the button to get inspired.")

  const getRandomPhrase = () => {
    const index = Math.floor(Math.random() * phrases.length)
    setQuote(phrases[index])
  }

  return (
    <main className="min-h-screen px-6 py-20 sm:px-24 text-[var(--foreground)]">
      <h1 className="text-4xl sm:text-5xl font-bold mb-8">Join the collective 🌱</h1>

      <p className="text-lg max-w-xl mb-12 text-[var(--muted)]">
        I’m always looking for passionate designers, developers, and thinkers to collaborate with on
        creative projects. Let’s build something meaningful together.
      </p>

      <ul className="list-disc pl-6 space-y-3 text-base sm:text-lg mb-12">
        <li>Work on cutting-edge frontend experiments</li>
        <li>Co-create visual identities and web ecosystems</li>
        <li>Push boundaries with interactive design and motion</li>
        <li>Share process, insights, and build in public</li>
      </ul>

      <div className="mb-16">
        <a
          href="/contact"
          className="inline-block border border-[var(--accent)] text-[var(--foreground)] px-6 py-3 rounded-full hover:bg-[var(--accent)] hover:text-[var(--background)] transition"
        >
          Reach out to collaborate →
        </a>
      </div>

      {/* Generador de frases */}
      <section className="border-t pt-12">
        <h2 className="text-2xl font-semibold mb-4">Need some inspiration?</h2>
        <p className="text-xl italic text-[var(--muted)] mb-6 max-w-xl">{quote}</p>
        <button
          onClick={getRandomPhrase}
          className="px-6 py-3 rounded-full bg-[var(--accent)] text-[var(--background)] hover:bg-black transition"
        >
          Generate Phrase
        </button>
      </section>
    </main>
  )
}
