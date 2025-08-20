'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  TrendingUp, 
  Hash, 
  ArrowUp, 
  ArrowDown, 
  Minus,
  Zap,
  Flame,
  Sparkles,
  ChevronRight
} from 'lucide-react'

const trendingTopics = [
  {
    id: 1,
    tag: 'Next.js 15',
    count: 342,
    change: 23,
    trend: 'up',
    category: 'Frontend',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50 dark:bg-blue-950/30',
    textColor: 'text-blue-600 dark:text-blue-400',
    growth: '+45%',
    description: 'Latest features and updates'
  },
  {
    id: 2,
    tag: 'TypeScript 5.5',
    count: 298,
    change: 18,
    trend: 'up',
    category: 'Language',
    color: 'from-indigo-500 to-purple-500',
    bgColor: 'bg-indigo-50 dark:bg-indigo-950/30',
    textColor: 'text-indigo-600 dark:text-indigo-400',
    growth: '+38%',
    description: 'Type system improvements'
  },
  {
    id: 3,
    tag: 'AI Integration',
    count: 276,
    change: 31,
    trend: 'up',
    category: 'AI/ML',
    color: 'from-pink-500 to-red-500',
    bgColor: 'bg-pink-50 dark:bg-pink-950/30',
    textColor: 'text-pink-600 dark:text-pink-400',
    growth: '+67%',
    description: 'LLMs and APIs'
  },
  {
    id: 4,
    tag: 'Docker',
    count: 234,
    change: 12,
    trend: 'up',
    category: 'DevOps',
    color: 'from-blue-600 to-blue-700',
    bgColor: 'bg-blue-50 dark:bg-blue-950/30',
    textColor: 'text-blue-700 dark:text-blue-300',
    growth: '+22%',
    description: 'Containerization best practices'
  },
  {
    id: 5,
    tag: 'React 19',
    count: 189,
    change: -5,
    trend: 'down',
    category: 'Frontend',
    color: 'from-cyan-500 to-blue-500',
    bgColor: 'bg-cyan-50 dark:bg-cyan-950/30',
    textColor: 'text-cyan-600 dark:text-cyan-400',
    growth: '-3%',
    description: 'Concurrent features'
  },
  {
    id: 6,
    tag: 'Web3',
    count: 156,
    change: 0,
    trend: 'stable',
    category: 'Blockchain',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50 dark:bg-purple-950/30',
    textColor: 'text-purple-600 dark:text-purple-400',
    growth: '0%',
    description: 'Decentralized applications'
  }
]

const risingTechnologies = [
  { name: 'Bun', growth: '+145%', category: 'Runtime' },
  { name: 'Astro', growth: '+89%', category: 'Framework' },
  { name: 'Tauri', growth: '+76%', category: 'Desktop' },
  { name: 'Vite 5', growth: '+54%', category: 'Build Tool' },
  { name: 'Drizzle ORM', growth: '+43%', category: 'Database' }
]

const hotTopics = [
  { tag: 'performance', questions: 89, icon: '⚡' },
  { tag: 'security', questions: 67, icon: '🔒' },
  { tag: 'optimization', questions: 54, icon: '🚀' },
  { tag: 'deployment', questions: 43, icon: '📦' },
  { tag: 'testing', questions: 38, icon: '🧪' }
]

export function TrendingTopicsWidget() {
  const [activeTab, setActiveTab] = useState('trending')
  const [hoveredTopic, setHoveredTopic] = useState(null)
  const [animatingItems, setAnimatingItems] = useState({})

  useEffect(() => {
    const interval = setInterval(() => {
      const randomTopic = trendingTopics[Math.floor(Math.random() * trendingTopics.length)]
      setAnimatingItems(prev => ({ ...prev, [randomTopic.id]: Date.now() }))
      setTimeout(() => {
        setAnimatingItems(prev => {
          const newState = { ...prev }
          delete newState[randomTopic.id]
          return newState
        })
      }, 1000)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [])

    const getIcon = (trend) => {
    switch(trend) {
      case 'up': return <ArrowUp className="w-3 h-3 text-green-500" />
      case 'down': return <ArrowDown className="w-3 h-3 text-red-500" />
      case 'hot': return <Flame className="w-3 h-3 text-orange-500" />
      case 'new': return <Sparkles className="w-3 h-3 text-blue-500" />
      default: return <Minus className="w-3 h-3 text-gray-500" />
    }
  }

  const tabs = [
    { id: 'trending', label: 'Trending', icon: TrendingUp, color: 'text-blue-600' },
    { id: 'rising', label: 'Rising', icon: Zap, color: 'text-orange-600' },
    { id: 'hot', label: 'Hot Topics', icon: Flame, color: 'text-red-600' }
  ]

  const renderContent = () => {
    switch (activeTab) {
      case 'trending':
        return (
          <div className="space-y-3">
            {trendingTopics.map((topic, index) => {
              const isAnimating = animatingItems[topic.id]
              return (
                <motion.div
                  key={topic.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  onHoverStart={() => setHoveredTopic(topic.id)}
                  onHoverEnd={() => setHoveredTopic(null)}
                  className={`p-3 rounded-lg border transition-all duration-300 cursor-pointer group ${
                    hoveredTopic === topic.id 
                      ? 'border-primary/30 shadow-md' 
                      : 'border-border/50 hover:border-border'
                  } ${topic.bgColor}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${topic.color} text-white shadow-sm`}>
                        <Hash className="h-3 w-3" />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className={`font-semibold text-sm ${topic.textColor} truncate`}>
                            {topic.tag}
                          </h4>
                          <Badge variant="outline" className="text-xs px-1.5 py-0">
                            {topic.category}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground truncate">
                          {topic.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <div className="text-right">
                        <motion.div
                          key={isAnimating}
                          animate={isAnimating ? { scale: [1, 1.1, 1] } : {}}
                          className="font-semibold text-sm text-foreground"
                        >
                          {topic.count}
                        </motion.div>
                        <div className="flex items-center gap-1 text-xs">
                          {getIcon(topic.trend)}
                          <span className={`font-medium ${
                            topic.trend === 'up' ? 'text-green-600' : 
                            topic.trend === 'down' ? 'text-red-600' : 
                            'text-muted-foreground'
                          }`}>
                            {topic.growth}
                          </span>
                        </div>
                      </div>
                      
                      <motion.div
                        animate={{ x: hoveredTopic === topic.id ? 2 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        )
      
      case 'rising':
        return (
          <div className="space-y-3">
            {risingTechnologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-orange-50/50 to-red-50/30 dark:from-orange-950/20 dark:to-red-950/10 border border-orange-200/50 dark:border-orange-800/30 hover:border-orange-300 dark:hover:border-orange-700 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 text-white shadow-sm">
                    <Sparkles className="h-3 w-3" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-foreground group-hover:text-orange-600 transition-colors">
                      {tech.name}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {tech.category}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300 text-xs">
                    {tech.growth}
                  </Badge>
                  <ArrowUp className="h-3 w-3 text-orange-500" />
                </div>
              </motion.div>
            ))}
          </div>
        )
      
      case 'hot':
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {hotTopics.map((topic, index) => (
              <motion.div
                key={topic.tag}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="p-3 rounded-lg bg-gradient-to-br from-red-50/50 to-pink-50/30 dark:from-red-950/20 dark:to-pink-950/10 border border-red-200/50 dark:border-red-800/30 hover:border-red-300 dark:hover:border-red-700 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg">{topic.icon}</span>
                  <Badge variant="outline" className="text-xs border-red-300 text-red-700 dark:border-red-700 dark:text-red-300">
                    {topic.questions}
                  </Badge>
                </div>
                <h4 className="font-semibold text-sm text-foreground group-hover:text-red-600 transition-colors">
                  #{topic.tag}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {topic.questions} active questions
                </p>
              </motion.div>
            ))}
          </div>
        )
    }
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
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 bg-clip-text text-transparent">
            Trending Topics
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Discover what's hot in the developer community
          </p>
        </div>

        <Card className="glass-subtle border border-border/50 shadow-lg">
          <CardHeader className="pb-3 px-4 sm:px-6 pt-4 sm:pt-5">
            <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
              {tabs.map((tab) => {
                const Icon = tab.icon
                const isActive = activeTab === tab.id
                return (
                  <motion.button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? 'bg-primary text-primary-foreground shadow-lg'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/60'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className={`h-4 w-4 ${isActive ? 'text-primary-foreground' : tab.color}`} />
                    <span className="hidden sm:inline">{tab.label}</span>
                    <span className="sm:hidden">
                      {tab.id === 'trending' ? 'Trend' : tab.id === 'rising' ? 'Rise' : 'Hot'}
                    </span>
                  </motion.button>
                )
              })}
            </div>
          </CardHeader>

          <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {renderContent()}
              </motion.div>
            </AnimatePresence>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}
