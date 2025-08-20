'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function useDarkMode() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  return {
    theme: mounted ? resolvedTheme : 'light', // Fallback to light theme during SSR
    setTheme,
    toggleTheme,
    isDark: mounted ? resolvedTheme === 'dark' : false,
    isLight: mounted ? resolvedTheme === 'light' : true,
    mounted
  }
}
