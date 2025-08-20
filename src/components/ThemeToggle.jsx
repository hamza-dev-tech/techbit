'use client'

import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useDarkMode } from '@/hooks/useDarkMode'

export function ThemeToggle() {
  const { isDark, toggleTheme, mounted } = useDarkMode()

  if (!mounted) {
    return (
      <Button variant="ghost" size="sm" className="w-9 px-0">
        <Sun className="h-4 w-4" />
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="w-9 px-0 transition-all duration-200 hover:bg-accent"
    >
      {isDark ? (
        <Sun className="h-4 w-4 transition-all duration-200 rotate-0 scale-100" />
      ) : (
        <Moon className="h-4 w-4 transition-all duration-200 rotate-0 scale-100" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
