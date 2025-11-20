import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ServicesGrid from '@/components/ServicesGrid'
import { SERVICES } from '@/constants/content'

export const metadata = {
  title: 'Services - The Guild',
  description: 'Comprehensive tech services: Web Development, App Development, Branding, AI & Automation, and more.',
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
              <span className="text-white">Our</span>{' '}
              <span className="guild-gradient">Services</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {SERVICES.heading.subtitle}
            </p>
          </div>
          <ServicesGrid />
        </div>
      </section>
      <Footer />
    </main>
  )
}

