import React from 'react'
import { FiTrendingUp, FiTool, FiPackage } from 'react-icons/fi'

const services = [
  { title: 'Structural Steel', desc: 'Beams, frames & installations', icon: <FiTrendingUp /> },
  { title: 'Custom Railings & Stairs', desc: 'Indoor & outdoor railings', icon: <FiTool /> },
  { title: 'Industrial Fabrication', desc: 'Skids, platforms, enclosures', icon: <FiPackage /> },
]

export default function Services() {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-6">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <div key={i} className="card">
            <div className="text-3xl mb-3">{s.icon}</div>
            <div className="font-semibold text-lg">{s.title}</div>
            <div className="text-sm text-gray-300 mt-2">{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
