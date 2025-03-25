import Footer from '@/components/Footer'
import Greatings from '@/components/Greatings'
import Header from '@/components/Header'
import Projects from '@/components/Projects'
import TechStack from '@/components/TechStack'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="flex justify-center items-center h-[calc(100vh-64px)]">
        <Greatings />
      </div>
      <TechStack />
      <Projects />
      <Footer />
    </main>
  )
}
