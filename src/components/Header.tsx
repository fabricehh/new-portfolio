import Link from 'next/link'
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'

const Header = () => {
  return (
    <nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-[#DC18AE] to-[#1AACF3] text-transparent bg-clip-text">
            {'{fabriceh}'}
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-blue-500">Home</Link>
            <Link href="/about-me" className="hover:text-blue-500">About</Link>
            <Link href="/tech-stack" className="hover:text-blue-500">Tech Stack</Link>
            <Link href="/projects" className="hover:text-blue-500">Projects</Link>
            <Link href="/certifications" className="hover:text-blue-500">
              Certifications
            </Link>
            <Link href="/contact" className="hover:text-blue-500">Contact</Link>
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
    </nav>
  )
}

export default Header 