"use client";

import Link from 'next/link'
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { useProfilStore } from '@/store/profilStore';

const Footer = () => {
  const { profil } = useProfilStore();
  return (
    <footer className="container mx-auto px-8 py-8 border-t">
      <div className="flex flex-col gap-6">
        {/* Top row with logo and contact info */}
        <div className="flex justify-between items-center">
          <Link href="/" className="font-bold">
            <span className="text-xl bg-gradient-to-r from-[#DC18AE] to-[#1AACF3] text-transparent bg-clip-text">
              {'{fabricehh}'}
            </span>
            <span className="block text-sm font-normal text-slate-600">{profil.prenom} {profil.nom}</span>
          </Link>
          
          <div className="flex items-center gap-8">
            <span className="text-sm text-slate-600">{profil.telephone}</span>
            <span className="text-sm text-slate-600">{profil.email}</span>
            <div className="flex items-center gap-4">
              <Link href="https://github.com" target="_blank" className="hover:text-blue-500">
                <FaGithub size={20} />
              </Link>
              <Link href="https://twitter.com" target="_blank" className="hover:text-blue-500">
                <FaTwitter size={20} />
              </Link>
              <Link href="https://linkedin.com" target="_blank" className="hover:text-blue-500">
                <FaLinkedin size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom row with navigation and credit */}
        <div className="flex justify-between items-center pt-4">
          <div className="flex space-x-8">
            <Link href="/" className="text-sm hover:text-blue-500">Home</Link>
            <Link href="/about" className="text-sm hover:text-blue-500">About</Link>
            <Link href="/technologies" className="text-sm hover:text-blue-500">Technologies</Link>
            <Link href="/projects" className="text-sm hover:text-blue-500">Projects</Link>
            <Link href="/contact" className="text-sm hover:text-blue-500">Contact</Link>
          </div>

          <div className="text-sm text-slate-600">
            <Link href="https://www.figma.com" target="_blank" className="text-purple-600 hover:underline">Figma UI template</Link>, 
            Developed with <Link href="https://nextjs.org" target="_blank" className="text-purple-600 hover:underline">Next.js</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 