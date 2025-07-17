import Header from '@/components/landing/Header'
import Gallery from '@/components/landing/Gallery'
import About from '@/components/landing/About'
import FooterNav from '@/components/landing/FooterNav'

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-10 sm:px-20 sm:py-16 font-sans flex flex-col gap-16">
      <Header />
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <Gallery />
        <About />
      </section>
      <FooterNav />
    </main>
  )
}
