import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProjectGrid from '@/components/ProjectGrid'
import { PROJECTS } from '@/constants/content'

export const metadata = {
  title: 'Portfolio - The Guild',
  description: 'Explore our portfolio of futuristic web and mobile projects. See what The Guild has built.',
}

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
              <span className="text-white">Our</span>{' '}
              <span className="guild-gradient">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {PROJECTS.heading.subtitle}
            </p>
          </div>
          <ProjectGrid allProjects={true} />
        </div>
      </section>
      <Footer />
    </main>
  )
}

