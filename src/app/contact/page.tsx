'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Ici vous pourrez ajouter la logique de soumission plus tard
  }

  return (
    <main className="min-h-screen bg-white pt-24">
      <Header />
      <section className="container mx-auto px-4 py-8">
        <h1 className="text-5xl font-bold text-slate-800 mb-12 text-center">Get In Touch</h1>
        <div className="flex flex-col md:flex-row gap-24">
          <div className="md:w-1/3">
            <h2 className="text-4xl font-bold mb-12">
              Let's Work <span className="text-orange-500">Together</span>
            </h2>
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <span className="text-blue-500 text-xl">📧</span>
                <p className="text-slate-600 hover:text-blue-500 cursor-pointer text-lg">
                  njauprince@gmail.com
                </p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-blue-500 text-xl">📍</span>
                <p className="text-slate-600 text-lg">
                  Nairobi, Kenya
                </p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-blue-500 text-xl">📞</span>
                <p className="text-slate-600 hover:text-blue-500 cursor-pointer text-lg">
                  +254706338454
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="md:w-2/3 space-y-8">
            <div className="flex gap-8">
              <div className="flex-1">
                <label htmlFor="email" className="block text-sm uppercase font-medium text-slate-600 mb-3">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full border border-slate-200 rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                />
              </div>
              <div className="flex-1">
                <label htmlFor="subject" className="block text-sm uppercase font-medium text-slate-600 mb-3">Subject (Optional)</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full border border-slate-200 rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm uppercase font-medium text-slate-600 mb-3">Message</label>
              <textarea 
                id="message" 
                rows={4}
                className="w-full border border-slate-200 rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button 
                type="submit" 
                className="px-8 w-[150px] py-4 rounded-md text-lg text-white bg-gradient-to-r from-[#DC18AE] to-[#1AACF3] hover:opacity-90 transition-opacity"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </main>
  )
} 