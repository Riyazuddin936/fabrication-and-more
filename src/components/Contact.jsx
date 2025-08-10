import React from 'react'

export default function Contact({ whatsapp }) {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-6">Contact</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="card">
          <div className="font-semibold">Visit Us</div>
          <div className="text-sm text-gray-300 mt-2">123 Industrial Estate, Pune, Maharashtra</div>
          <div className="mt-4">
            <a href={whatsapp} className="bg-accent text-black px-4 py-2 rounded-lg">Message on WhatsApp</a>
          </div>
        </div>
        <div className="card">
          <div className="font-semibold">Quick Enquiry</div>
          <form action="#" onSubmit={(e) => { e.preventDefault(); window.location.href = whatsapp; }} className="mt-4 space-y-3">
            <input className="w-full p-3 rounded-lg border border-white/6 bg-black/20" placeholder="Your name" />
            <input className="w-full p-3 rounded-lg border border-white/6 bg-black/20" placeholder="Phone number" />
            <textarea className="w-full p-3 rounded-lg border border-white/6 bg-black/20" rows="4" placeholder="Project details..."></textarea>
            <button type="submit" className="bg-accent text-black px-4 py-2 rounded-lg">Send on WhatsApp</button>
          </form>
        </div>
      </div>
    </section>
  )
}
