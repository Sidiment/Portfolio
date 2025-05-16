import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const projects = [
  {
    title: 'StarRealm',
    description: 'A web-based card game platform',
    image: '/images/starrealm.jpg',
    link: '/work/starrealm'
  },
  {
    title: 'Neon City',
    description: 'An interactive 3D city visualization',
    image: '/images/neon-city.jpg',
    link: '/work/neon-city'
  },
  {
    title: 'S2GEM && Sign Weng',
    description: 'A collaborative project showcasing innovative solutions',
    image: '/images/s2gem.jpg',
    link: '/work/s2gem'
  }
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold mb-12">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link href={project.link} key={index} className="group">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                  <p className="text-sm opacity-90">{project.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
} 