'use client'

import { useState, useEffect } from 'react'
import { Globe, Languages } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const languages = [
  { code: 'en', name: 'English', dir: 'ltr' },
  { code: 'ar', name: 'العربية', dir: 'rtl' }
]

export function LanguageToggle() {
  const [currentLang, setCurrentLang] = useState('en')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedLang = localStorage.getItem('language') || 'en'
    setCurrentLang(savedLang)
    updatePageDirection(savedLang)
  }, [])

  const updatePageDirection = (langCode) => {
    const lang = languages.find(l => l.code === langCode)
    // Don't change the document direction to avoid layout issues
    // document.documentElement.dir = lang?.dir || 'ltr'
    document.documentElement.lang = langCode
    
    // Instead, just store the language preference for content
    document.documentElement.setAttribute('data-lang', langCode)
  }

  const handleLanguageChange = (langCode) => {
    setCurrentLang(langCode)
    localStorage.setItem('language', langCode)
    updatePageDirection(langCode)
  }

  if (!mounted) {
    return (
      <Button variant="ghost" size="sm" className="w-9 px-0">
        <Globe className="h-4 w-4" />
      </Button>
    )
  }

  const currentLanguage = languages.find(l => l.code === currentLang)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="w-9 px-0">
          <Languages className="h-4 w-4" />
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className={currentLang === lang.code ? 'bg-accent' : ''}
          >
            <span className="text-sm">{lang.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
