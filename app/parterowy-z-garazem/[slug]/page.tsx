import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { withGarage } from '@/lib/projects'
import ProjectGallery from '@/components/ProjectGallery'
import PlanViewer from '@/components/PlanViewer'

export function generateStaticParams() {
  return withGarage.map((p) => ({ slug: p.slug }))
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = withGarage.find((p) => p.slug === slug)
  if (!project) notFound()

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 pt-28 pb-20">
        <Link
          href="/parterowy-z-garazem"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-900 transition-colors mb-8"
        >
          ← Powrót do listy
        </Link>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <ProjectGallery images={project.images} name={project.name} />
          </div>
          <div className="lg:col-span-1">
            <div className="border border-gray-100 rounded-2xl p-6 sticky top-24">
              <div className="inline-flex items-center gap-2 bg-gray-50 text-gray-500 text-xs px-3 py-1.5 rounded-lg mb-4">
                Z garażem
              </div>
              <h1 className="text-2xl font-medium text-gray-900 mb-1">
                {project.name}
              </h1>
              <div className="text-3xl font-medium text-gray-900 mb-1">
                {project.price.toLocaleString('pl-PL')} zł
              </div>
              <p className="text-sm text-gray-400 mb-6">cena brutto</p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-gray-50 rounded-xl p-3">
                  <div className="text-sm font-medium text-gray-900">
                    {project.general.usableArea}
                  </div>
                  <div className="text-xs text-gray-400">Pow. użytkowa</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-3">
                  <div className="text-sm font-medium text-gray-900">
                    {project.general.buildingArea}
                  </div>
                  <div className="text-xs text-gray-400">Pow. zabudowy</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-3">
                  <div className="text-sm font-medium text-gray-900">
                    {project.general.rooms} pokoje
                  </div>
                  <div className="text-xs text-gray-400">Ilość pokoi</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-3">
                  <div className="text-sm font-medium text-gray-900">
                    {project.general.type}
                  </div>
                  <div className="text-xs text-gray-400">Typ domu</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-3">
                  <div className="text-sm font-medium text-gray-900">
                    {project.plotDimensions.width}
                  </div>
                  <div className="text-xs text-gray-400">Min. szerokość</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-3">
                  <div className="text-sm font-medium text-gray-900">
                    {project.plotDimensions.length}
                  </div>
                  <div className="text-xs text-gray-400">Min. długość</div>
                </div>
              </div>
              <a
                href="tel:577282100"
                className="block w-full bg-gray-900 text-white text-sm text-center py-3.5 rounded-xl hover:bg-gray-700 transition-colors mb-3"
              >
                Zadzwoń: 577-282-100
              </a>
              <a
                href="mailto:s_bud@onet.pl"
                className="block w-full border border-gray-200 text-gray-900 text-sm text-center py-3.5 rounded-xl hover:bg-gray-50 transition-colors"
              >
                Napisz: s_bud@onet.pl
              </a>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">
              Opis
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              {project.description}
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              {project.zones}
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">
              Dane ogólne
            </p>
            <div className="space-y-1">
              {[
                {
                  label: 'Powierzchnia zabudowy',
                  value: project.general.buildingArea,
                },
                {
                  label: 'Powierzchnia użytkowa',
                  value: project.general.usableArea,
                },
                { label: 'Kubatura', value: project.general.volume },
                {
                  label: 'Kąt nachylenia dachu',
                  value: project.general.roofAngle,
                },
                { label: 'Ilość pokoi', value: String(project.general.rooms) },
                { label: 'Typ domu', value: project.general.type },
                {
                  label: 'Min. szerokość działki',
                  value: project.plotDimensions.width,
                },
                {
                  label: 'Min. długość działki',
                  value: project.plotDimensions.length,
                },
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex justify-between items-center py-2 border-b border-gray-50 text-sm"
                >
                  <span className="text-gray-400">{row.label}</span>
                  <span className="text-gray-900 font-medium">{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">
              Powierzchnia użytkowa
            </p>
            <div className="space-y-1">
              {project.rooms.map((room, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center py-2 border-b border-gray-50 text-sm"
                >
                  <span className="text-gray-400">{room.name}</span>
                  <span className="text-gray-900 font-medium">{room.area}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">
              Co składa się na cenę
            </p>
            <div className="space-y-1">
              {project.construction.map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-start py-2 border-b border-gray-50 text-sm gap-4"
                >
                  <span className="text-gray-400 shrink-0">{item.name}</span>
                  <span className="text-gray-900 text-right">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mb-16">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-6">
            Rzut i sytuacja działki
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PlanViewer
              src={project.floorPlan}
              alt="Rzut parteru"
              label="Rzut parteru"
            />
            <PlanViewer
              src={project.sitePlan}
              alt="Sytuacja działki"
              label="Sytuacja działki"
            />
          </div>
        </div>
        {project.kulaUrl && (
          <div className="mb-16">
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-6">
              Spacer wirtualny
            </p>
            <div className="rounded-2xl overflow-hidden border border-gray-100">
              <iframe
                src={project.kulaUrl}
                frameBorder={0}
                scrolling="no"
                allow="xr-spatial-tracking;gyroscope;accelerometer;autoplay;microphone;camera"
                allowFullScreen
                style={{ width: '100%', height: '500px', background: '#000' }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
