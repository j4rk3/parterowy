import { withoutGarage } from '@/lib/projects'
import ProjectCard from '@/components/ProjectCard'
import ProjectGrid from '@/components/ProjectGrid'

export const metadata = {
  title: 'Domy parterowe bez garażu — S-BUD Wodzisław Śląski',
  description:
    'Sprawdź nasze domy parterowe bez garażu. Maksymalna przestrzeń użytkowa dla rodziny.',
}

export default function WithoutGaragePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 pt-32 pb-16">
        <div className="mb-12 text-center">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">
            Oferta
          </p>
          <h1 className="text-3xl font-medium text-gray-900 mb-3">
            Domy parterowe bez garażu
          </h1>
          <p className="text-gray-500 text-sm max-w-xl leading-relaxed mx-auto">
            Maksymalna przestrzeń użytkowa dla rodziny. Idealne rozwiązanie dla
            par, rodzin i seniorów.
          </p>
        </div>
        <ProjectGrid projects={withoutGarage} />
      </div>
    </div>
  )
}
