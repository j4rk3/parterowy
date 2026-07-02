'use client'

import { useState } from 'react'
import ProjectCard from '@/components/ProjectCard'
import { Project } from '@/lib/projects'

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  const [loaded, setLoaded] = useState(0)
  const total = projects.length
  const ready = loaded >= 1

  return (
    <div className={`transition-opacity duration-700 ${ready ? 'opacity-100' : 'opacity-0'}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map(project => (
          <ProjectCard
            key={project.slug}
            project={project}
            onImageLoad={() => setLoaded(l => l + 1)}
          />
        ))}
      </div>
    </div>
  )
}
