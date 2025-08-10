import React, { useState } from 'react'

const items = [
  { id: 1, title: 'Staircase in SS', img: `${import.meta.env.BASE_URL}portfolio1.jpg` },
  { id: 2, title: 'Industrial Platform', img: `${import.meta.env.BASE_URL}portfolio2.jpg` },
  { id: 3, title: 'Custom Gate', img: `${import.meta.env.BASE_URL}portfolio3.jpg` },
  { id: 4, title: 'Railing & Balcony', img: `${import.meta.env.BASE_URL}portfolio4.jpg` },
];


export default function Portfolio({ whatsapp }) {
  const [open, setOpen] = useState(null)
  return (
    <section id="portfolio" className="py-12">
      <h2 className="text-2xl font-bold mb-6">Portfolio</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        {items.map(it => (
          <div key={it.id} className="rounded-xl overflow-hidden shadow cursor-pointer" onClick={() => setOpen(it)}>
            <img src={it.img} alt={it.title} className="w-full h-48 object-cover" />
            <div className="p-3 bg-black/40">
              <div className="font-semibold">{it.title}</div>
            </div>
          </div>
        ))}
      </div>

      {open && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-6" onClick={() => setOpen(null)}>
          <div className="bg-black/80 rounded-2xl overflow-hidden max-w-3xl w-full border border-white/6">
            <img src={open.img} alt={open.title} className="w-full h-96 object-cover" />
            <div className="p-6 flex justify-between items-center">
              <div>
                <div className="font-bold text-lg">{open.title}</div>
                <div className="text-sm text-gray-300 mt-1">Detailed project description goes here.</div>
              </div>
              <div>
                <a href={whatsapp} className="bg-accent text-black px-4 py-2 rounded-lg">Get Quote</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
