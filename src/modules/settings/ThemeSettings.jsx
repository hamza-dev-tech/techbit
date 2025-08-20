'use client'

import { motion } from 'framer-motion'
import { Monitor, Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useDarkMode } from '@/hooks/useDarkMode'

export function ThemeSettings() {
  const { theme, setTheme, mounted } = useDarkMode()

  const themes = [
    {
      value: 'light',
      label: 'Light',
      icon: Sun,
      description: 'Light mode for bright environments'
    },
    {
      value: 'dark',
      label: 'Dark',
      icon: Moon,
      description: 'Dark mode for low-light environments'
    },
    {
      value: 'system',
      label: 'System',
      icon: Monitor,
      description: 'Follows your system preference'
    }
  ]

  if (!mounted) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Theme Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="animate-pulse space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-12 bg-muted rounded"></div>
            ))}
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Card>
        <CardHeader>
          <CardTitle>Theme Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {themes.map((themeOption, index) => {
            const Icon = themeOption.icon
            const isSelected = theme === themeOption.value
            
            return (
              <motion.div
                key={themeOption.value}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Button
                  variant={isSelected ? "default" : "outline"}
                  onClick={() => setTheme(themeOption.value)}
                  className="w-full justify-start h-auto p-4"
                >
                  <Icon className="h-5 w-5 mr-3" />
                  <div className="text-left">
                    <div className="font-medium">{themeOption.label}</div>
                    <div className="text-xs opacity-70">{themeOption.description}</div>
                  </div>
                </Button>
              </motion.div>
            )
          })}
        </CardContent>
      </Card>
    </motion.div>
  )
}
