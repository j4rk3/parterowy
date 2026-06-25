import { withGarage } from '@/lib/projects'
import ProjectCard from '@/components/ProjectCard'

export const metadata = {
  title: 'Domy parterowe z garażem — S-BUD Wodzisław Śląski',
  description: 'Sprawdź nasze domy parterowe z garażem. Budujemy od fundamentów po stan deweloperski na Śląsku.',
}

export default function WithGaragePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 pt-32 pb-16">
        <div className="mb-12 text-center">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">Oferta</p>
          <h1 className="text-3xl font-medium text-gray-900 mb-3">Domy parterowe z garażem</h1>
          <p className="text-gray-500 text-sm max-w-xl leading-relaxed mx-auto">
            Wygodne miejsce dla auta zintegrowane z bryłą domu. Wybierz projekt dopasowany do swoich potrzeb.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {withGarage.map(project => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}
