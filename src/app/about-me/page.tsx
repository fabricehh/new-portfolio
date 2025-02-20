import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Curriculum from '@/components/Curriculum'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <Header />
      <div className="container mx-auto px-4">
        <div className="flex">
          <div className="w-1/2">
            <Curriculum />
          </div>
          <div className="w-1/2">
            {/* Espace réservé pour un futur contenu */}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
} 