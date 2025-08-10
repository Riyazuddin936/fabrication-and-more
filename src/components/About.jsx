import React from 'react'

export default function About() {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-6">About Us</h2>
      <div className="grid md:grid-cols-2 gap-6 items-center">
        <div className="card">
          <p>We are a team of skilled fabricators with experience across residential, commercial and industrial projects. We handle design, material sourcing, fabrication, surface treatments and installation.</p>

          <ul className="mt-4 text-sm text-gray-300 space-y-2">
            <li>• Quality materials & certified welding</li>
            <li>• Timely deliveries & installation</li>
            <li>• Custom design & CAD support</li>
          </ul>
        </div>
        <div>
          <img src="/about-hero.jpg" alt="about" className="w-full h-64 object-cover rounded-2xl shadow" />
        </div>
      </div>
    </section>
  )
}
