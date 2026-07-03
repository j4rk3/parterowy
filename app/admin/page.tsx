'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'

type Price = {
  id: number
  slug: string
  name: string
  price: number
}

export default function AdminPage() {
  const [prices, setPrices] = useState<Price[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState<string | null>(null)
  const [saved, setSaved] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    const checkAuth = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession()
      if (!session) {
        router.push('/login')
        return
      }
      fetchPrices()
    }
    checkAuth()
  }, [router])

  const fetchPrices = async () => {
    const { data } = await supabase.from('prices').select('*').order('id')
    if (data) setPrices(data)
    setLoading(false)
  }

  const handlePriceChange = (slug: string, value: string) => {
    setPrices((prev) =>
      prev.map((p) =>
        p.slug === slug ? { ...p, price: parseInt(value) || 0 } : p
      )
    )
  }

  const handleSave = async (slug: string, price: number) => {
    setSaving(slug)
    await supabase
      .from('prices')
      .update({ price, updated_at: new Date().toISOString() })
      .eq('slug', slug)
    setSaving(null)
    setSaved(slug)
    setTimeout(() => setSaved(null), 2000)
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/login')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-sm text-gray-400">Ładowanie...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 pt-28 pb-12">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-xl font-medium text-gray-900">
              Panel administracyjny
            </h1>
            <p className="text-sm text-gray-400">Zmiana cen projektów</p>
          </div>
          <button
            onClick={handleLogout}
            className="text-sm text-gray-400 hover:text-gray-900 transition-colors"
          >
            Wyloguj
          </button>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          {prices.map((item, i) => (
            <div
              key={item.slug}
              className={`flex items-center gap-4 px-6 py-4 ${i < prices.length - 1 ? 'border-b border-gray-50' : ''}`}
            >
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">{item.name}</p>
                <p className="text-xs text-gray-400">{item.slug}</p>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  value={item.price}
                  onChange={(e) => handlePriceChange(item.slug, e.target.value)}
                  className="border border-gray-200 rounded-xl px-3 py-2 text-sm text-gray-900 w-32 focus:outline-none focus:border-gray-400 transition-colors text-right"
                />
                <span className="text-sm text-gray-400">zł</span>
                <button
                  onClick={() => handleSave(item.slug, item.price)}
                  disabled={saving === item.slug}
                  className="bg-gray-900 text-white text-xs px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors disabled:opacity-50 min-w-[70px]"
                >
                  {saving === item.slug
                    ? '...'
                    : saved === item.slug
                      ? '✓'
                      : 'Zapisz'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
