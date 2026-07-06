'use client'

import { useState } from 'react'

export function Accordion({
  title,
  content,
}: {
  title: string
  content: string
}) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-gray-100">
      <button
        className="w-full flex items-center justify-between py-4 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="text-sm font-medium text-gray-900">{title}</span>
        <span
          className={`text-gray-400 transition-transform duration-200 ${open ? 'rotate-45' : ''}`}
        >
          +
        </span>
      </button>
      {open && (
        <p className="text-sm text-gray-500 leading-relaxed pb-4">{content}</p>
      )}
    </div>
  )
}
