import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { withGarage } from '@/lib/projects'
import { supabase } from '@/lib/supabase'
import ProjectGallery from '@/components/ProjectGallery'
import PlanViewer from '@/components/PlanViewer'
export const revalidate = 0

export function generateStaticParams() {
  return withGarage.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = withGarage.find((p) => p.slug === slug)
  if (!project) return {}

  const title = `${project.name} — dom parterowy z garażem ${project.general.usableArea} | S-BUD Wodzisław Śląski`
  const description = `${project.name}: dom parterowy z garażem, ${project.general.usableArea} powierzchni użytkowej, ${project.general.rooms} pokoje. Cena od ${project.price.toLocaleString('pl-PL')} zł brutto. ${project.description}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: project.images[0] }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [project.images[0]],
    },
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = withGarage.find((p) => p.slug === slug)
  if (!project) notFound()

  const { data: priceData } = await supabase
    .from('prices')
    .select('price')
    .eq('slug', slug)
    .single()

  const price = priceData?.price ?? project.price

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 pt-24 pb-20">
        <Link
          href="/parterowy-z-garazem"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-900 transition-colors mb-4"
        >
          ← Powrót do listy
        </Link>

        {/* Mobile */}
        <div className="lg:hidden">
          {/* 1. Nazwa + cena */}
          <div className="mb-4">
            <div className="inline-flex items-center gap-2 bg-gray-50 text-gray-500 text-xs px-3 py-1.5 rounded-lg mb-2">
              Z garażem
            </div>
            <h1 className="text-2xl font-medium text-gray-900 mb-1">
              {project.name}
            </h1>
            <div className="text-3xl font-medium text-gray-900 mb-1">
              {price.toLocaleString('pl-PL')} zł
            </div>
            <p className="text-xs text-gray-400">cena brutto</p>
          </div>

          {/* 2. Zdjęcia */}
          <div className="mb-4">
            <ProjectGallery images={project.images} name={project.name} />
          </div>

          {/* 3. Podstawowe info */}
          <div className="grid grid-cols-2 gap-2 mb-4">
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
          </div>

          {/* 5. Opis */}
          <div className="mb-6">
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">
              Opis
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* 6. Strefy */}
          <div className="mb-6">
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">
              Strefy
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              {project.zones}
            </p>
          </div>

          {/* 4. Kula */}
          {project.kulaUrls && project.kulaUrls.length > 0 ? (
            <div className="mb-6 flex flex-col gap-6">
              {project.kulaUrls.map((kula) => (
                <div key={kula.url}>
                  <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">
                    Spacer wirtualny — {kula.label}
                  </p>
                  <div className="rounded-2xl overflow-hidden border border-gray-100">
                    <iframe
                      src={kula.url}
                      frameBorder={0}
                      scrolling="no"
                      allow="xr-spatial-tracking;gyroscope;accelerometer;autoplay;microphone;camera"
                      allowFullScreen
                      style={{
                        width: '100%',
                        height: '260px',
                        background: '#000',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            project.kulaUrl && (
              <div className="mb-6">
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">
                  Spacer wirtualny
                </p>
                <div className="rounded-2xl overflow-hidden border border-gray-100">
                  <iframe
                    src={project.kulaUrl}
                    frameBorder={0}
                    scrolling="no"
                    allow="xr-spatial-tracking;gyroscope;accelerometer;autoplay;microphone;camera"
                    allowFullScreen
                    style={{
                      width: '100%',
                      height: '260px',
                      background: '#000',
                    }}
                  />
                </div>
              </div>
            )
          )}

          {/* 7. Dane ogólne */}
          <div className="mb-6">
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

          {/* 8. Minimalne wymiary działki */}
          <div className="mb-6">
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">
              Minimalne wymiary działki
            </p>
            <div className="space-y-1">
              {[
                { label: 'Szerokość', value: project.plotDimensions.width },
                { label: 'Długość', value: project.plotDimensions.length },
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

          {/* 9. Sytuacja */}
          <div className="mb-6">
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">
              Sytuacja działki
            </p>
            <PlanViewer
              src={project.sitePlan}
              alt="Sytuacja działki"
              label="Sytuacja działki"
            />
          </div>

          {/* 10. Powierzchnia użytkowa */}
          <div className="mb-6">
            {project.roomGroups && project.roomGroups.length > 0 ? (
              project.roomGroups.map((group, gi) => {
                const nextStart =
                  project.roomGroups![gi + 1]?.startIndex ??
                  project.rooms.length
                return (
                  <div key={group.label} className={gi > 0 ? 'mt-6' : ''}>
                    <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">
                      {group.label}
                    </p>
                    <div className="space-y-1">
                      {project.rooms
                        .slice(group.startIndex, nextStart)
                        .map((room, ri) => {
                          const i = group.startIndex + ri
                          return (
                            <div
                              key={i}
                              className="flex justify-between items-center py-2 border-b border-gray-50 text-sm"
                            >
                              <span className="text-gray-400">
                                {i + 1}. {room.name}
                              </span>
                              <span className="text-gray-900 font-medium">
                                {room.area}
                              </span>
                            </div>
                          )
                        })}
                    </div>
                  </div>
                )
              })
            ) : (
              <>
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">
                  Powierzchnia użytkowa
                </p>
                <div className="space-y-1">
                  {project.rooms.map((room, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center py-2 border-b border-gray-50 text-sm"
                    >
                      <span className="text-gray-400">
                        {i + 1}. {room.name}
                      </span>
                      <span className="text-gray-900 font-medium">
                        {room.area}
                      </span>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* 11. Rzut */}
          <div className="mb-6">
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">
              Rzut parteru
            </p>
            <PlanViewer
              src={project.floorPlan}
              alt="Rzut parteru"
              label="Rzut parteru"
            />
          </div>

          {/* 12. Co składa się na cenę */}
          <div className="mb-6">
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

          {/* 13. Kontakt */}
          <div className="flex gap-3">
            <a
              href="tel:577282100"
              className="flex-1 bg-gray-900 text-white text-sm text-center py-3 rounded-xl hover:bg-gray-700 transition-colors"
            >
              Zadzwoń
            </a>
            <a
              href="mailto:s_bud@onet.pl"
              className="flex-1 border border-gray-200 text-gray-900 text-sm text-center py-3 rounded-xl hover:bg-gray-50 transition-colors"
            >
              Napisz
            </a>
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-3 gap-8 mb-16">
            <div className="col-span-2">
              <ProjectGallery images={project.images} name={project.name} />
            </div>
            <div className="col-span-1">
              <div className="border border-gray-100 rounded-2xl p-6 sticky top-24">
                <div className="inline-flex items-center gap-2 bg-gray-50 text-gray-500 text-xs px-3 py-1.5 rounded-lg mb-4">
                  Z garażem
                </div>
                <h1 className="text-2xl font-medium text-gray-900 mb-1">
                  {project.name}
                </h1>
                <div className="text-3xl font-medium text-gray-900 mb-1">
                  {price.toLocaleString('pl-PL')} zł
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

          <div className="mb-10">
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">
              Opis
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              {project.description}
            </p>
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">
              Strefy
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              {project.zones}
            </p>
          </div>

          {project.kulaUrls && project.kulaUrls.length > 0 ? (
            <div className="mb-16 flex flex-col gap-10">
              {project.kulaUrls.map((kula) => (
                <div key={kula.url}>
                  <p className="text-xs uppercase tracking-widest text-gray-400 mb-6">
                    Spacer wirtualny — {kula.label}
                  </p>
                  <div className="rounded-2xl overflow-hidden border border-gray-100">
                    <iframe
                      src={kula.url}
                      frameBorder={0}
                      scrolling="no"
                      allow="xr-spatial-tracking;gyroscope;accelerometer;autoplay;microphone;camera"
                      allowFullScreen
                      style={{
                        width: '100%',
                        height: '500px',
                        background: '#000',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            project.kulaUrl && (
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
                    style={{
                      width: '100%',
                      height: '500px',
                      background: '#000',
                    }}
                  />
                </div>
              </div>
            )
          )}

          <div className="grid grid-cols-2 gap-8 mb-10">
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
                  {
                    label: 'Ilość pokoi',
                    value: String(project.general.rooms),
                  },
                  { label: 'Typ domu', value: project.general.type },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="flex justify-between items-center py-2 border-b border-gray-50 text-sm"
                  >
                    <span className="text-gray-400">{row.label}</span>
                    <span className="text-gray-900 font-medium">
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">
                Minimalne wymiary działki
              </p>
              <div className="space-y-1">
                {[
                  { label: 'Szerokość', value: project.plotDimensions.width },
                  { label: 'Długość', value: project.plotDimensions.length },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="flex justify-between items-center py-2 border-b border-gray-50 text-sm"
                  >
                    <span className="text-gray-400">{row.label}</span>
                    <span className="text-gray-900 font-medium">
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-10">
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-6">
              Sytuacja działki
            </p>
            <PlanViewer
              src={project.sitePlan}
              alt="Sytuacja działki"
              label="Sytuacja działki"
            />
          </div>

          <div className="mb-10">
            {project.roomGroups && project.roomGroups.length > 0 ? (
              project.roomGroups.map((group, gi) => {
                const nextStart =
                  project.roomGroups![gi + 1]?.startIndex ??
                  project.rooms.length
                return (
                  <div key={group.label} className={gi > 0 ? 'mt-6' : ''}>
                    <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">
                      {group.label}
                    </p>
                    <div className="space-y-1">
                      {project.rooms
                        .slice(group.startIndex, nextStart)
                        .map((room, ri) => {
                          const i = group.startIndex + ri
                          return (
                            <div
                              key={i}
                              className="flex justify-between items-center py-2 border-b border-gray-50 text-sm"
                            >
                              <span className="text-gray-400">
                                {i + 1}. {room.name}
                              </span>
                              <span className="text-gray-900 font-medium">
                                {room.area}
                              </span>
                            </div>
                          )
                        })}
                    </div>
                  </div>
                )
              })
            ) : (
              <>
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">
                  Powierzchnia użytkowa
                </p>
                <div className="space-y-1">
                  {project.rooms.map((room, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center py-2 border-b border-gray-50 text-sm"
                    >
                      <span className="text-gray-400">
                        {i + 1}. {room.name}
                      </span>
                      <span className="text-gray-900 font-medium">
                        {room.area}
                      </span>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="mb-10">
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-6">
              Rzut parteru
            </p>
            <PlanViewer
              src={project.floorPlan}
              alt="Rzut parteru"
              label="Rzut parteru"
            />
          </div>

          <div className="mb-10">
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
      </div>
    </div>
  )
}
