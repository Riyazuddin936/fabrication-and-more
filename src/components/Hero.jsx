import React from 'react';
import { motion } from 'framer-motion';

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
          <a href="#portfolio" className="px-5 py-3 rounded-lg border border-white/60">View Portfolio</a>
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
        {/* The gradient overlay div has been removed */}
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"  // Replace with your YouTube video's embed URL
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          // The mix-blend-overlay class has been removed
          className="absolute inset-0 w-full h-full object-cover"
        ></iframe>
      </div>
    </section>
  );
}