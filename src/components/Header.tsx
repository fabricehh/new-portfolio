"use client";
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import { FaGithub, FaTwitter, FaLinkedin, FaChevronDown } from 'react-icons/fa'
import { GB, FR } from 'country-flag-icons/react/3x2'
import { HiMenu, HiX } from 'react-icons/hi';
import { useProfilStore } from '@/store/profilStore';

const Header = () => {
  const { profil } = useProfilStore();
  const [language, setLanguage] = useState('en')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false)
  const langMenuRef = useRef<HTMLDivElement>(null)

  // Ferme le menu si on clique en dehors
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setIsLangMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const languages = [
    { code: 'en', label: 'English', flag: GB },
    { code: 'fr', label: 'Français', flag: FR },
  ]

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-[#DC18AE] to-[#1AACF3] text-transparent bg-clip-text">
            {`{${profil.alias}}`}
          </Link>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-600 hover:text-gray-900"
          >
            {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-blue-500">Home</Link>
            <Link href="/tech-stack" className="hover:text-blue-500">Tech Stack</Link>
            <Link href="/projects" className="hover:text-blue-500">Projects</Link>
            <Link href="/certifications" className="hover:text-blue-500">Certifications</Link>
            <Link href="/contact" className="hover:text-blue-500">Contact</Link>
            <Link href="/about-me" className="hover:text-blue-500">About Me</Link>
          </div>

          {/* Language and Social Icons - Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Language Dropdown */}
            <div className="relative" ref={langMenuRef}>
              <button 
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100"
              >
                {language === 'en' ? <GB className="w-5 h-5" /> : <FR className="w-5 h-5" />}
                <span className="text-sm font-medium">{language === 'en' ? 'EN' : 'FR'}</span>
                <FaChevronDown className={`transition-transform ${isLangMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              <div className={`
                absolute top-full right-0 mt-2 w-48 
                bg-white rounded-lg shadow-lg border border-gray-100
                transition-all duration-200 origin-top-right
                ${isLangMenuOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}
              `}>
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code)
                      setIsLangMenuOpen(false)
                    }}
                    className={`
                      flex items-center space-x-3 w-full px-4 py-2 text-left
                      ${language === lang.code ? 'bg-gray-50 text-blue-500' : 'hover:bg-gray-50'}
                      ${lang.code === 'fr' ? 'rounded-b-lg' : 'rounded-t-lg'}
                    `}
                  >
                    <lang.flag className="w-5 h-5" />
                    <span className="text-sm font-medium">{lang.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Link href={profil.urlGithub} target="_blank" className="hover:text-blue-500">
                <FaGithub size={20} />
              </Link>
              <Link href={profil.urlTwitter} target="_blank" className="hover:text-blue-500">
                <FaTwitter size={20} />
              </Link>
              <Link href={profil.urlLinkedin} target="_blank" className="hover:text-blue-500">
                <FaLinkedin size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} pt-4`}>
          <div className="flex flex-col space-y-4 pb-4">
            <Link href="/" className="hover:text-blue-500">Home</Link>
            <Link href="/about-me" className="hover:text-blue-500">About</Link>
            <Link href="/tech-stack" className="hover:text-blue-500">Tech Stack</Link>
            <Link href="/projects" className="hover:text-blue-500">Projects</Link>
            <Link href="/certifications" className="hover:text-blue-500">Certifications</Link>
            <Link href="/contact" className="hover:text-blue-500">Contact</Link>
          </div>

          <div className="flex items-center justify-between pt-4 border-t">
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => setLanguage('en')}
                className={`w-8 h-6 transition-opacity ${language === 'en' ? 'opacity-100' : 'opacity-50 hover:opacity-75'}`}
              >
                <GB title="English" />
              </button>
              <button 
                onClick={() => setLanguage('fr')}
                className={`w-8 h-6 transition-opacity ${language === 'fr' ? 'opacity-100' : 'opacity-50 hover:opacity-75'}`}
              >
                <FR title="Français" />
              </button>
            </div>

            <div className="flex items-center space-x-4">
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
      </div>
    </nav>
  )
}

export default Header 