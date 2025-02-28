'use client'

import { useRouter, usePathname } from 'next/navigation'
import { useLocale } from 'next-intl'

export default function LanguageSwitcher() {
  const pathname = usePathname()
  const router = useRouter()
  const locale = useLocale()

  const handleChange = (newLocale: string) => {
    router.push(`/${newLocale}${pathname}`)
  }

  return (
    <div>
      <select value={locale} onChange={(e) => handleChange(e.target.value)}>
        <option value="en">English</option>
        <option value="ru">Русский</option>
      </select>
    </div>
  )
}
