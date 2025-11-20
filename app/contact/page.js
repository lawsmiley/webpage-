import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import ContactInfo from '@/components/ContactInfo'

export const metadata = {
  title: 'Contact - The Guild',
  description: 'Get in touch with The Guild. Let\'s build something futuristic together.',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
              <span className="text-white">Get In</span>{' '}
              <span className="guild-gradient">Touch</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Have a project in mind? Let's work together to create something amazing.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

