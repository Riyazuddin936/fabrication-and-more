import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { FiPhone, FiMail } from 'react-icons/fi'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Contact from './components/Contact'

const WHATSAPP_NUMBER = '919594827928'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi, I am interested in your fabrication services. Please call/WhatsApp me.')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-black text-white">
      <header className="backdrop-blur-md sticky top-0 z-40 bg-black border-b border-white/6">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
          <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center text-black font-bold">RMS</div>
            <div>
              <div className="font-semibold">RM Services.</div>
              <div className="text-xs text-gray-300">Crafted with Precision. Built to Last.</div>
            </div>
          </Link>

          <nav className="hidden md:flex gap-6 items-center">
            <Link to="/services" className="hover:text-accent">Services</Link>
            <Link to="/portfolio" className="hover:text-accent">Portfolio</Link>
            <Link to="/about" className="hover:text-accent">About</Link>
            <Link to="/contact" className="hover:text-accent">Contact</Link>
            <a href={WHATSAPP_LINK} className="ml-4 bg-accent text-black px-4 py-2 rounded-lg shadow">Buy Now</a>
          </nav>

          <div className="md:hidden">
            <a href={WHATSAPP_LINK} className="bg-accent text-black px-3 py-2 rounded-lg">Buy</a>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10">
        <Routes>
          <Route path="/" element={
            <>
              <Hero whatsapp={WHATSAPP_LINK} />
              <Services />
              <Portfolio whatsapp={WHATSAPP_LINK} />
              <About />
              <Contact whatsapp={WHATSAPP_LINK} />
            </>
          } />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio whatsapp={WHATSAPP_LINK} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact whatsapp={WHATSAPP_LINK} />} />
        </Routes>
      </main>

      <footer className="border-t mt-10 py-6 border-white/6">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm">© {new Date().getFullYear()} Fabrication Co. — All rights reserved</div>
          <div className="flex items-center gap-4 text-sm">
            <a href={WHATSAPP_LINK} className="flex items-center gap-2"><FiPhone /> WhatsApp</a>
            <a href="mailto:contact@fabrication.co" className="flex items-center gap-2"><FiMail /> contact@fabrication.co</a>
          </div>
        </div>
      </footer>
    </div>
  )
}