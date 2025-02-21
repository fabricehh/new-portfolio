import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Curriculum from '@/components/Curriculum'
import Image from 'next/image'
import { FaEye } from 'react-icons/fa'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <Header />
      <div className="container mx-auto px-10">
        <div className="flex gap-4 pb-10">
          <div className="w-1/2">
            <Curriculum />
          </div>
          <div className="w-1/2 flex items-start justify-center flex-col ">
            <div className="w-full max-w-3xl border-2 border-blue-500 rounded-lg p-2 bg-white shadow-lg">
              <h2 className="text-2xl font-bold text-slate-800 mb-4 text-center">My Resume</h2>
              
              {/* Preview image of CV */}
              <div className="relative w-full h-[600px] mb-4 group">
                <Image 
                  src="/assets/CV-HOUESSOU FABRICE-Version DEC 2024.png" 
                  alt="CV Preview" 
                  fill 
                  className="object-scale-down blur-sm transition-all duration-300"
                />
                <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors z-10">
                  <FaEye className="text-xl" />
                  View my Resume
                </button>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
} 