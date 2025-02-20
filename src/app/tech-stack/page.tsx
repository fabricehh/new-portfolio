import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TechStack from '@/components/TechStack'

export default function TechStackPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <Header />
      <div className="flex justify-center">
        <TechStack position="left" />
      </div>
      <Footer />
    </main>
  )
} 