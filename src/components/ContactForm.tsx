'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const REQUEST_TYPES = [
  { value: 'general', label: 'Vetëm mesazh' },
  { value: 'meeting', label: 'Takim në zyrë' },
  { value: 'phone_call', label: 'Telefonatë' },
] as const

const TIME_SLOTS = [
  '08:00 - 09:00',
  '09:00 - 10:00',
  '10:00 - 11:00',
  '11:00 - 12:00',
  '14:00 - 15:00',
  '15:00 - 16:00',
  '16:00 - 17:00',
]

function getMinDate() {
  const d = new Date()
  d.setDate(d.getDate() + 1)
  return d.toISOString().split('T')[0]
}

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')
  const [requestType, setRequestType] = useState<string>('general')
  const [errorMsg, setErrorMsg] = useState('')

  const needsDateTime = requestType === 'meeting' || requestType === 'phone_call'

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)

    setStatus('sending')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          phone: formData.get('phone') || null,
          message: formData.get('message'),
          requestType: formData.get('requestType') || 'general',
          preferredDate: needsDateTime ? formData.get('preferredDate') || null : null,
          preferredTime: needsDateTime ? formData.get('preferredTime') || null : null,
        }),
      })

      const data = await res.json()

      if (res.ok && data.success) {
        setStatus('done')
        setErrorMsg('')
        form.reset()
        setRequestType('general')
      } else {
        setStatus('error')
        setErrorMsg(data.error || 'Diçka shkoi keq.')
      }
    } catch {
      setStatus('error')
      setErrorMsg('Diçka shkoi keq. Provoni përsëri.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" aria-label="Forma e kontaktit">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300">
            Emri
          </label>
          <Input id="name" name="name" placeholder="Emri juaj" required />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">
            Email
          </label>
          <Input id="email" name="email" type="email" placeholder="Email juaj" required />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="phone" className="text-sm font-medium text-slate-700 dark:text-slate-300">
          Telefon
        </label>
        <Input id="phone" name="phone" type="tel" placeholder="+383 44 000 000" />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium text-slate-700 dark:text-slate-300 block">
          A dëshironi takim ose telefonatë?
        </label>
        <div className="flex flex-wrap gap-2 sm:gap-4">
          {REQUEST_TYPES.map(({ value, label }) => (
            <label
              key={value}
              className="flex items-center gap-2 cursor-pointer text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 py-2 pr-2 min-h-[44px] touch-manipulation"
            >
              <input
                type="radio"
                name="requestType"
                value={value}
                checked={requestType === value}
                onChange={(e) => setRequestType(e.target.value)}
                className="h-4 w-4 rounded-full border-slate-300 text-amber-600 focus:ring-amber-500"
              />
              <span className="text-sm">{label}</span>
            </label>
          ))}
        </div>
      </div>
      {needsDateTime && (
        <div className="grid gap-4 sm:grid-cols-2 rounded-xl border border-amber-500/30 bg-amber-50/50 dark:bg-amber-950/20 dark:border-amber-500/20 p-4">
          <div className="space-y-2">
            <label
              htmlFor="preferredDate"
              className="text-sm font-medium text-slate-700 dark:text-slate-300"
            >
              Data e preferuar
            </label>
            <Input
              id="preferredDate"
              name="preferredDate"
              type="date"
              min={getMinDate()}
              required={needsDateTime}
              className="bg-white dark:bg-slate-900"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="preferredTime"
              className="text-sm font-medium text-slate-700 dark:text-slate-300"
            >
              Ora e preferuar
            </label>
            <select
              id="preferredTime"
              name="preferredTime"
              required={needsDateTime}
              className="flex h-10 min-h-[44px] w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-base text-slate-900 dark:text-slate-100 shadow-sm outline-none transition-colors focus-visible:ring-2 focus-visible:ring-amber-500/50"
            >
              <option value="">Zgjidhni orën</option>
              {TIME_SLOTS.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300">
          Mesazhi
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="Mesazhi juaj..."
          rows={5}
          required
        />
      </div>
      {status === 'done' && (
        <p className="text-sm text-green-600 dark:text-green-400">
          Mesazhi u dërgua. Do të ju kontaktojmë së shpejti.
        </p>
      )}
      {status === 'error' && (
        <p className="text-sm text-red-600 dark:text-red-400">{errorMsg}</p>
      )}
      <Button type="submit" variant="amber" size="lg" className="w-full sm:w-auto min-h-[44px] touch-manipulation" disabled={status === 'sending'}>
        {status === 'sending' ? 'Duke dërguar…' : 'Dërgo mesazhin'}
      </Button>
    </form>
  )
}
