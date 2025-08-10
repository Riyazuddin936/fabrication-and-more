import React from 'react'
import { motion } from 'framer-motion'

export default function Hero({ whatsapp }) {
  return (
    <section className="grid md:grid-cols-2 gap-8 items-center py-12">
      <div>
        <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="text-4xl md:text-5xl font-extrabold leading-tight">
          Premium Fabrication <span className="text-accent">Services</span>
        </motion.h1>
        <p className="mt-4 text-gray-300 max-w-lg">Custom metal fabrication, welding, structural steel, staircases, railings and bespoke industrial solutions. From drawing to delivery — precision you can trust.</p>

        <div className="mt-6 flex gap-4">
          <a href={whatsapp} className="bg-accent text-black px-5 py-3 rounded-lg font-medium shadow">Buy Now (WhatsApp)</a>
          <a href="#portfolio" className="px-5 py-3 rounded-lg border border-white/6">View Portfolio</a>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-3">
          <div className="card text-center">
            <div className="font-bold">5+ Years</div>
            <div className="text-sm text-gray-300">Experience</div>
          </div>
          <div className="card text-center">
            <div className="font-bold">200+</div>
            <div className="text-sm text-gray-300">Projects</div>
          </div>
          <div className="card text-center">
            <div className="font-bold">24/7</div>
            <div className="text-sm text-gray-300">Support</div>
          </div>
        </div>
      </div>

      <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg">
        <div className="absolute inset-0 bg-hero-gradient"></div>
        <video autoPlay muted loop className="w-full h-full object-cover mix-blend-overlay">
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute bottom-4 left-4 bg-black/60 rounded-lg px-4 py-2">
          <div className="text-sm font-semibold">Precision cutting & welding</div>
        </div>
      </div>
    </section>
  )
}
