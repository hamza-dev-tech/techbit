'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Activity, Users, MessageCircle, TrendingUp, Zap, Clock } from 'lucide-react'

const stats = [
  {
    id: 'questions',
    label: 'Questions Today',
    value: 247,
    change: '+18',
    icon: MessageCircle,
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50 dark:bg-blue-950/30',
    textColor: 'text-blue-600 dark:text-blue-400',
    trend: 'up'
  },
  {
    id: 'active',
    label: 'Active Now',
    value: 1284,
    change: '+42',
    icon: Users,
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50 dark:bg-green-950/30',
    textColor: 'text-green-600 dark:text-green-400',
    trend: 'up'
  },
  {
    id: 'answers',
    label: 'Answers/Hour',
    value: 142,
    change: '+8',
    icon: Zap,
    color: 'from-orange-500 to-red-500',
    bgColor: 'bg-orange-50 dark:bg-orange-950/30',
    textColor: 'text-orange-600 dark:text-orange-400',
    trend: 'up'
  },
  {
    id: 'response',
    label: 'Avg Response',
    value: '23m',
    change: '-5m',
    icon: Clock,
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50 dark:bg-purple-950/30',
    textColor: 'text-purple-600 dark:text-purple-400',
    trend: 'down'
  }
]

const highlights = [
  { icon: '🔥', text: '142 questions answered in the last hour', type: 'hot' },
  { icon: '⚡', text: 'Response time improved by 35% today', type: 'improvement' },
  { icon: '🎉', text: '5 new expert contributors joined', type: 'celebration' },
  { icon: '🚀', text: 'TypeScript questions trending +45%', type: 'trending' }
]

export function CommunityPulse() {
  const [currentHighlight, setCurrentHighlight] = useState(0)
  const [animatingStats, setAnimatingStats] = useState({})

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHighlight((prev) => (prev + 1) % highlights.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    // Simulate real-time stat updates
    const interval = setInterval(() => {
      const randomStat = stats[Math.floor(Math.random() * stats.length)]
      setAnimatingStats(prev => ({ ...prev, [randomStat.id]: Date.now() }))
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  const StatCard = ({ stat, index }) => {
    const Icon = stat.icon
    const isAnimating = animatingStats[stat.id]
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="relative group"
      >
        <Card className={`${stat.bgColor} border border-border/50 hover:border-primary/20 transition-all duration-300 overflow-hidden group-hover:shadow-lg`}>
          {/* Animated background gradient */}
          <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
          
          <CardContent className="p-4 sm:p-5 relative z-10">
            <div className="flex items-center justify-between mb-3">
              <div className={`p-2 rounded-lg ${stat.bgColor} ring-1 ring-border/20`}>
                <Icon className={`h-4 w-4 ${stat.textColor}`} />
              </div>
              <Badge 
                variant={stat.trend === 'up' ? 'default' : 'secondary'}
                className={`text-xs font-medium ${
                  stat.trend === 'up' 
                    ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' 
                    : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
                }`}
              >
                {stat.change}
              </Badge>
            </div>
            
            <div className="space-y-2">
              <motion.div
                key={isAnimating}
                animate={isAnimating ? { scale: [1, 1.1, 1] } : {}}
                transition={{ duration: 0.6 }}
                className={`text-2xl font-bold ${stat.textColor}`}
              >
                {stat.value}
              </motion.div>
              <p className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    )
  }

  return (
    <section className="w-full max-w-7xl mx-auto px-2 sm:px-3 lg:px-6 py-6 sm:py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Activity className="h-5 w-5 text-primary animate-pulse" />
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Community Pulse
            </h2>
          </div>
          <p className="text-sm sm:text-base text-muted-foreground">
            Real-time community activity and engagement metrics
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {stats.map((stat, index) => (
            <StatCard key={stat.id} stat={stat} index={index} />
          ))}
        </div>

        {/* Live Highlights */}
        <Card className="glass-subtle border border-border/50 shadow-sm overflow-hidden">
          <CardHeader className="pb-3 px-4 sm:px-6 pt-4 sm:pt-5">
            <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
              <TrendingUp className="h-4 w-4 text-primary" />
              Live Highlights
            </CardTitle>
          </CardHeader>
          <CardContent className="px-4 sm:px-6 pb-4 sm:pb-5">
            <div className="relative h-12 sm:h-14 overflow-hidden rounded-lg bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border border-primary/10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentHighlight}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex items-center justify-center px-4 text-center"
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="text-lg sm:text-xl flex-shrink-0">
                      {highlights[currentHighlight].icon}
                    </span>
                    <span className="text-sm sm:text-base font-medium text-foreground">
                      {highlights[currentHighlight].text}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              {/* Progress indicator */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary/20">
                <motion.div
                  className="h-full bg-primary"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 4, ease: 'linear', repeat: Infinity }}
                  key={currentHighlight}
                />
              </div>
            </div>
            
            {/* Highlight indicators */}
            <div className="flex justify-center gap-2 mt-3">
              {highlights.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentHighlight(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentHighlight 
                      ? 'bg-primary w-6' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}
