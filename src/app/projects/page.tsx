import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Projects from '@/components/Projects'

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <Header />
      <div className="flex justify-center">
        <Projects position="left" />
      </div>
      <Footer />
    </main>
  )
} 