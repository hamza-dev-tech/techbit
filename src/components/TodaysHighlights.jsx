'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { 
  Award, 
  Heart, 
  MessageSquare, 
  TrendingUp, 
  Star, 
  Users, 
  ExternalLink,
  Crown,
  Sparkles,
  Trophy
} from 'lucide-react'

const highlightsData = {
  mostHelpful: {
    id: 1,
    title: 'How to optimize React rendering performance with useMemo and useCallback?',
    author: {
      name: 'Sarah Chen',
      avatar: '/avatars/sarah.jpg',
      role: 'Senior Frontend Developer',
      reputation: 15420
    },
    stats: {
      upvotes: 142,
      views: 8934,
      bookmarks: 89
    },
    excerpt: 'Comprehensive guide covering memo, useMemo, useCallback, and React DevTools profiling...',
    tags: ['react', 'performance', 'optimization', 'hooks'],
    timeAgo: '4 hours ago',
    badge: 'Most Helpful Today'
  },
  topEngagement: {
    id: 2,
    title: 'Why does TypeScript strict mode break my existing JavaScript codebase?',
    author: {
      name: 'Alex Rodriguez',
      avatar: '/avatars/alex.jpg',
      role: 'Full Stack Engineer',
      reputation: 8932
    },
    stats: {
      answers: 28,
      views: 12547,
      comments: 67
    },
    excerpt: 'Exploring TypeScript strict mode implications and migration strategies...',
    tags: ['typescript', 'javascript', 'migration', 'strict-mode'],
    timeAgo: '6 hours ago',
    badge: 'Highest Engagement'
  },
  newMember: {
    id: 3,
    name: 'Emma Thompson',
    avatar: '/avatars/emma.jpg',
    role: 'AI/ML Engineer',
    company: 'OpenAI',
    expertise: ['Python', 'TensorFlow', 'PyTorch', 'MLOps'],
    joinedDays: 2,
    firstAnswer: {
      title: 'Best practices for training large language models efficiently?',
      upvotes: 89,
      timeAgo: '2 hours ago'
    },
    badge: 'Rising Star'
  }
}

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5 }
  }
}

export function TodaysHighlights() {
  const [activeTab, setActiveTab] = useState('helpful')
  const [isAnimating, setIsAnimating] = useState({})

  useEffect(() => {
    const interval = setInterval(() => {
      const randomKey = Math.random().toString()
      setIsAnimating(prev => ({ ...prev, [randomKey]: true }))
      setTimeout(() => {
        setIsAnimating(prev => {
          const newState = { ...prev }
          delete newState[randomKey]
          return newState
        })
      }, 600)
    }, 8000)
    
    return () => clearInterval(interval)
  }, [])

  const tabs = [
    { id: 'helpful', label: 'Most Helpful', icon: Award, color: 'text-yellow-600' },
    { id: 'engagement', label: 'Top Engagement', icon: TrendingUp, color: 'text-blue-600' },
    { id: 'member', label: 'New Member', icon: Star, color: 'text-purple-600' }
  ]

  const renderContent = () => {
    switch (activeTab) {
      case 'helpful':
        return (
          <motion.div
            key="helpful"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            <Card className="border border-yellow-200 dark:border-yellow-800/30 bg-gradient-to-br from-yellow-50/50 to-orange-50/30 dark:from-yellow-950/20 dark:to-orange-950/10">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <Avatar className="h-12 w-12 ring-2 ring-yellow-500/30">
                        <AvatarImage src={highlightsData.mostHelpful.author.avatar} />
                        <AvatarFallback className="bg-gradient-to-br from-yellow-500 to-orange-500 text-white font-semibold">
                          {highlightsData.mostHelpful.author.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="absolute -top-1 -right-1 bg-yellow-500 rounded-full p-1">
                        <Crown className="h-3 w-3 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300 text-xs">
                        <Trophy className="h-3 w-3 mr-1" />
                        {highlightsData.mostHelpful.badge}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {highlightsData.mostHelpful.timeAgo}
                      </span>
                    </div>
                    
                    <h3 className="font-semibold text-sm sm:text-base mb-2 line-clamp-2 text-foreground hover:text-primary transition-colors cursor-pointer">
                      {highlightsData.mostHelpful.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {highlightsData.mostHelpful.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Heart className="h-3 w-3 text-red-500" />
                          <span>{highlightsData.mostHelpful.stats.upvotes}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          <span>{highlightsData.mostHelpful.stats.views}</span>
                        </div>
                      </div>
                      
                      <Button variant="outline" size="sm" className="text-xs">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        View Answer
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )
      
      case 'engagement':
        return (
          <motion.div
            key="engagement"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            <Card className="border border-blue-200 dark:border-blue-800/30 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-blue-950/20 dark:to-indigo-950/10">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <Avatar className="h-12 w-12 ring-2 ring-blue-500/30">
                        <AvatarImage src={highlightsData.topEngagement.author.avatar} />
                        <AvatarFallback className="bg-gradient-to-br from-blue-500 to-indigo-500 text-white font-semibold">
                          {highlightsData.topEngagement.author.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="absolute -top-1 -right-1 bg-blue-500 rounded-full p-1">
                        <TrendingUp className="h-3 w-3 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 text-xs">
                        <Sparkles className="h-3 w-3 mr-1" />
                        {highlightsData.topEngagement.badge}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {highlightsData.topEngagement.timeAgo}
                      </span>
                    </div>
                    
                    <h3 className="font-semibold text-sm sm:text-base mb-2 line-clamp-2 text-foreground hover:text-primary transition-colors cursor-pointer">
                      {highlightsData.topEngagement.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {highlightsData.topEngagement.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MessageSquare className="h-3 w-3 text-blue-500" />
                          <span>{highlightsData.topEngagement.stats.answers}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          <span>{highlightsData.topEngagement.stats.views}</span>
                        </div>
                      </div>
                      
                      <Button variant="outline" size="sm" className="text-xs">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Join Discussion
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )
      
      case 'member':
        return (
          <motion.div
            key="member"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            <Card className="border border-purple-200 dark:border-purple-800/30 bg-gradient-to-br from-purple-50/50 to-pink-50/30 dark:from-purple-950/20 dark:to-pink-950/10">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <Avatar className="h-12 w-12 ring-2 ring-purple-500/30">
                        <AvatarImage src={highlightsData.newMember.avatar} />
                        <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 text-white font-semibold">
                          {highlightsData.newMember.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="absolute -top-1 -right-1 bg-purple-500 rounded-full p-1">
                        <Star className="h-3 w-3 text-white fill-current" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 text-xs">
                        <Sparkles className="h-3 w-3 mr-1" />
                        {highlightsData.newMember.badge}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        Joined {highlightsData.newMember.joinedDays} days ago
                      </span>
                    </div>
                    
                    <div className="mb-3">
                      <h3 className="font-semibold text-sm sm:text-base mb-1 text-foreground">
                        {highlightsData.newMember.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {highlightsData.newMember.role} at {highlightsData.newMember.company}
                      </p>
                    </div>
                    
                    <div className="mb-3">
                      <p className="text-xs text-muted-foreground mb-2">First impactful answer:</p>
                      <p className="text-sm font-medium text-foreground line-clamp-2">
                        {highlightsData.newMember.firstAnswer.title}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Heart className="h-3 w-3 text-red-500" />
                        <span>{highlightsData.newMember.firstAnswer.upvotes} upvotes</span>
                      </div>
                      
                      <Button variant="outline" size="sm" className="text-xs">
                        <Users className="h-3 w-3 mr-1" />
                        Follow
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )
    }
  }

  return (
    <section className="w-full max-w-7xl mx-auto px-2 sm:px-3 lg:px-6 py-6 sm:py-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6"
      >
        {/* Header */}
        <div className="text-center space-y-2">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
            Today's Highlights
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Celebrating exceptional contributions and community moments
          </p>
        </div>

        {/* Tab Navigation */}
        <Card className="glass-subtle border border-border/50">
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
                      {tab.id === 'helpful' ? 'Helpful' : tab.id === 'engagement' ? 'Top' : 'New'}
                    </span>
                  </motion.button>
                )
              })}
            </div>
          </CardHeader>

          <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6">
            <AnimatePresence mode="wait">
              {renderContent()}
            </AnimatePresence>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}
