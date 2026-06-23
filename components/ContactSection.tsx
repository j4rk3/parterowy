'use client'

import { useState } from 'react'

export default function ContactSection() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [status, setStatus] = useState<
    'idle' | 'sending' | 'success' | 'error'
  >('idle')
  const [rodo, setRodo] = useState(false)

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault()
    if (!rodo) return alert('Proszę zaakceptować klauzulę RODO.')
    setStatus('sending')
    try {
      const res = await fetch('https://formspree.io/f/TWOJ_KOD', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) setStatus('success')
      else setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="bg-white py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">
            Kontakt
          </p>
          <h2 className="text-3xl font-medium text-gray-900">
            Skontaktuj się z nami
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Lewa kolumna — formularz */}
          <div className="flex flex-col">
            {status === 'success' ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center py-16">
                <div className="text-4xl mb-4">✓</div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Wiadomość wysłana
                </h3>
                <p className="text-sm text-gray-500">
                  Odezwiemy się najszybciej jak to możliwe.
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-4 flex-1">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-gray-500 uppercase tracking-wider">
                      Imię i nazwisko
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      placeholder="Jan Kowalski"
                      className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-gray-400 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-gray-500 uppercase tracking-wider">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                      placeholder="500 000 000"
                      className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-gray-400 transition-colors"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-gray-500 uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    placeholder="jan@kowalski.pl"
                    className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-gray-400 transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5 flex-1">
                  <label className="text-xs text-gray-500 uppercase tracking-wider">
                    Wiadomość
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    placeholder="Interesuje mnie dom parterowy z garażem..."
                    className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-gray-400 transition-colors resize-none flex-1 min-h-[120px]"
                  />
                </div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rodo}
                    onChange={(e) => setRodo(e.target.checked)}
                    className="mt-0.5 accent-gray-900"
                  />
                  <span className="text-xs text-gray-400 leading-relaxed">
                    Akceptuję{' '}
                    <a
                      href="/rodo"
                      target="_blank"
                      className="underline hover:text-gray-600 transition-colors"
                    >
                      klauzulę informacyjną RODO
                    </a>{' '}
                    i wyrażam zgodę na przetwarzanie moich danych osobowych w
                    celu odpowiedzi na zapytanie.
                  </span>
                </label>
                <button
                  onClick={handleSubmit}
                  disabled={status === 'sending'}
                  className="bg-gray-900 text-white text-sm px-6 py-3.5 rounded-xl hover:bg-gray-700 transition-colors disabled:opacity-50"
                >
                  {status === 'sending' ? 'Wysyłanie...' : 'Wyślij wiadomość'}
                </button>
                {status === 'error' && (
                  <p className="text-xs text-red-500">
                    Coś poszło nie tak. Spróbuj ponownie lub zadzwoń.
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Prawa kolumna — mapa + dane */}
          <div className="flex flex-col gap-4">
            <div className="rounded-2xl overflow-hidden border border-gray-100 flex-1 min-h-[360px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5128!2d18.452868338642503!3d50.002102146055755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4711504f862db415%3A0x2eebe3a8b4f9b41d!2zUnluZWsgNiwgNDQtMjg2IFdvZHppc8WCYXcgxZpsxIVza2k!5e0!3m2!1spl!2spl!4v1782255082814!5m2!1spl!2spl"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '360px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
