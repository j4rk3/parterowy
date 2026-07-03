import Link from 'next/link'
import Image from 'next/image'
import { Project } from '@/lib/projects'
import { supabase } from '@/lib/supabase'

export default function ProjectCard({
  project,
  onImageLoad,
  overridePrice,
}: {
  project: Project
  onImageLoad?: () => void
  overridePrice?: number
}) {
  const price = overridePrice ?? project.price
  return (
    <Link
      href={`/${project.hasGarage ? 'parterowy-z-garazem' : 'parterowy-bez-garazu'}/${project.slug}`}
      className="group overflow-hidden rounded-2xl border border-gray-100 bg-white hover:shadow-md transition-all duration-300"
    >
      <div className="relative h-56 overflow-hidden">
        <Image
          src={project.images[0]}
          alt={project.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          onLoad={onImageLoad}
        />
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-base font-medium text-gray-900">
            {project.name}
          </h3>
          <span className="text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded-lg">
            {project.general.usableArea}
          </span>
        </div>
        <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-base font-medium text-gray-900">
            {price.toLocaleString('pl-PL')} zł
          </span>
          <span className="text-sm text-gray-400 group-hover:text-gray-900 transition-colors">
            →
          </span>
        </div>
      </div>
    </Link>
  )
}
