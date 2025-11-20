import Hero from '@/components/Hero'
import ServicesPreview from '@/components/ServicesPreview'
import PortfolioPreview from '@/components/PortfolioPreview'
import Stats from '@/components/Stats'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ServicesPreview />
      <PortfolioPreview />
      <Stats />
      <Footer />
    </main>
  )
}

