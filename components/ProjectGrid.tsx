'use client'

import { useState, useEffect } from 'react'
import ProjectCard from '@/components/ProjectCard'
import { Project } from '@/lib/projects'
import { supabase } from '@/lib/supabase'

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  const [loaded, setLoaded] = useState(0)
  const [prices, setPrices] = useState<Record<string, number>>({})
  const ready = loaded >= 1

  useEffect(() => {
    supabase
      .from('prices')
      .select('slug, price')
      .then(({ data }) => {
        if (data) {
          const map: Record<string, number> = {}
          data.forEach((p) => {
            map[p.slug] = p.price
          })
          setPrices(map)
        }
      })
  }, [])

  return (
    <div
      className={`transition-opacity duration-700 ${ready ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
            overridePrice={prices[project.slug]}
            onImageLoad={() => setLoaded((l) => l + 1)}
          />
        ))}
      </div>
    </div>
  )
}
