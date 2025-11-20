import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import GuildStory from '@/components/GuildStory'
import TeamSection from '@/components/TeamSection'
import ValuesSection from '@/components/ValuesSection'

export const metadata = {
  title: 'About - The Guild',
  description: 'Learn about The Guild - our story, team, and values. Craftsmanship, precision, and innovation.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <GuildStory />
      <TeamSection />
      <ValuesSection />
      <Footer />
    </main>
  )
}

