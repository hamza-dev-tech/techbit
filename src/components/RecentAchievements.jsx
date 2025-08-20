'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { 
  Trophy, 
  Star, 
  Award, 
  Users, 
  TrendingUp, 
  Crown, 
  Zap, 
  Heart,
  MessageSquare,
  Target,
  Sparkles,
  Calendar,
  PartyPopper
} from 'lucide-react'

const recentAchievements = [
  {
    id: 1,
    type: 'badge',
    user: {
      name: 'Sarah Chen',
      avatar: '/avatars/sarah.jpg',
      role: 'Frontend Developer'
    },
    badge: {
      name: 'React Expert',
      description: 'Earned 50+ upvotes on React answers',
      icon: Star,
      color: 'from-blue-500 to-cyan-500',
      rarity: 'Expert'
    },
    timeAgo: '2 hours ago',
    stats: { answers: 127, upvotes: 834 }
  },
  {
    id: 2,
    type: 'reputation',
    user: {
      name: 'Mike Rodriguez',
      avatar: '/avatars/mike.jpg',
      role: 'Full Stack Engineer'
    },
    milestone: {
      value: 1000,
      type: 'reputation',
      description: 'Reached 1,000 reputation points',
      icon: Trophy,
      color: 'from-yellow-500 to-orange-500'
    },
    timeAgo: '4 hours ago',
    stats: { questions: 23, answers: 89 }
  },
  {
    id: 3,
    type: 'badge',
    user: {
      name: 'Alex Kim',
      avatar: '/avatars/alex.jpg',
      role: 'DevOps Engineer'
    },
    badge: {
      name: 'Helpful',
      description: 'First answer marked as solution',
      icon: Heart,
      color: 'from-pink-500 to-red-500',
      rarity: 'Bronze'
    },
    timeAgo: '6 hours ago',
    stats: { answers: 15, accepted: 8 }
  },
  {
    id: 4,
    type: 'milestone',
    user: {
      name: 'Emma Davis',
      avatar: '/avatars/emma.jpg',
      role: 'AI/ML Engineer'
    },
    milestone: {
      value: 50,
      type: 'answers',
      description: 'Provided 50 helpful answers',
      icon: MessageSquare,
      color: 'from-green-500 to-emerald-500'
    },
    timeAgo: '8 hours ago',
    stats: { reputation: 756, accepted: 23 }
  }
]

const communityMilestones = [
  {
    id: 1,
    title: '10K Questions Milestone',
    description: 'Community reached 10,000 total questions',
    icon: Target,
    value: '10,000',
    category: 'questions',
    color: 'from-purple-500 to-pink-500',
    achievedAt: '1 day ago',
    celebration: true
  },
  {
    id: 2,
    title: 'Response Time Record',
    description: 'Average response time: 18 minutes',
    icon: Zap,
    value: '18m',
    category: 'response',
    color: 'from-yellow-500 to-orange-500',
    achievedAt: '2 days ago',
    celebration: false
  },
  {
    id: 3,
    title: '500 Active Contributors',
    description: 'Monthly active contributors milestone',
    icon: Users,
    value: '500+',
    category: 'users',
    color: 'from-green-500 to-teal-500',
    achievedAt: '3 days ago',
    celebration: false
  }
]

const badges = [
  { name: 'Expert', color: 'from-purple-500 to-pink-500', rarity: 'Expert' },
  { name: 'Bronze', color: 'from-orange-400 to-yellow-500', rarity: 'Bronze' },
  { name: 'Silver', color: 'from-gray-400 to-gray-600', rarity: 'Silver' },
  { name: 'Gold', color: 'from-yellow-500 to-yellow-600', rarity: 'Gold' }
]

export function RecentAchievements() {
  const [activeTab, setActiveTab] = useState('achievements')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [celebrationMode, setCelebrationMode] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      if (activeTab === 'achievements') {
        setCurrentIndex((prev) => (prev + 1) % recentAchievements.length)
      } else {
        setCurrentIndex((prev) => (prev + 1) % communityMilestones.length)
      }
    }, 4000)
    
    return () => clearInterval(interval)
  }, [activeTab])

  useEffect(() => {
    // Trigger celebration for community milestones
    if (activeTab === 'milestones') {
      const milestone = communityMilestones[currentIndex]
      if (milestone.celebration) {
        setCelebrationMode(true)
        setTimeout(() => setCelebrationMode(false), 2000)
      }
    }
  }, [activeTab, currentIndex])

  const tabs = [
    { id: 'achievements', label: 'User Achievements', icon: Award },
    { id: 'milestones', label: 'Community Milestones', icon: Trophy }
  ]

  const renderAchievement = (achievement) => {
    const Icon = achievement.badge?.icon || achievement.milestone?.icon
    const color = achievement.badge?.color || achievement.milestone?.color
    
    return (
      <motion.div
        key={achievement.id}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <Card className="glass-subtle border border-border/50 shadow-lg overflow-hidden">
          {/* Celebration confetti effect */}
          {achievement.type === 'badge' && (
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0, y: 0 }}
                  animate={{ 
                    opacity: [0, 1, 0], 
                    scale: [0, 1, 0],
                    y: [-20, -60, -100],
                    x: [0, Math.random() * 40 - 20, Math.random() * 80 - 40]
                  }}
                  transition={{ 
                    duration: 2,
                    delay: i * 0.2,
                    repeat: Infinity,
                    repeatDelay: 3
                  }}
                  className={`absolute top-4 left-1/2 w-2 h-2 rounded-full bg-gradient-to-r ${color}`}
                />
              ))}
            </div>
          )}
          
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-start gap-4">
              {/* User Avatar */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <Avatar className="h-12 w-12 ring-2 ring-primary/20">
                    <AvatarImage src={achievement.user.avatar} />
                    <AvatarFallback className={`bg-gradient-to-br ${color} text-white font-semibold`}>
                      {achievement.user.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  {/* Achievement icon overlay */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: "spring", bounce: 0.5 }}
                    className={`absolute -bottom-1 -right-1 p-1.5 rounded-full bg-gradient-to-br ${color} text-white shadow-lg`}
                  >
                    <Icon className="h-3 w-3" />
                  </motion.div>
                </div>
              </div>
              
              {/* Achievement Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base text-foreground">
                      {achievement.user.name}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {achievement.user.role}
                    </p>
                  </div>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">
                    {achievement.timeAgo}
                  </span>
                </div>
                
                {/* Achievement Details */}
                <div className="mb-3">
                  {achievement.badge && (
                    <div className="flex items-center gap-2 mb-1">
                      <Badge className={`${achievement.badge.rarity === 'Expert' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300' : 
                        achievement.badge.rarity === 'Gold' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300' :
                        achievement.badge.rarity === 'Silver' ? 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300' :
                        'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300'} text-xs`}>
                        <Crown className="h-3 w-3 mr-1" />
                        {achievement.badge.name}
                      </Badge>
                      <span className="text-xs text-muted-foreground">badge earned</span>
                    </div>
                  )}
                  
                  {achievement.milestone && (
                    <div className="flex items-center gap-2 mb-1">
                      <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 text-xs">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        {achievement.milestone.value} {achievement.milestone.type}
                      </Badge>
                      <span className="text-xs text-muted-foreground">milestone</span>
                    </div>
                  )}
                  
                  <p className="text-sm text-muted-foreground">
                    {achievement.badge?.description || achievement.milestone?.description}
                  </p>
                </div>
                
                {/* Stats */}
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  {achievement.stats.answers && (
                    <div className="flex items-center gap-1">
                      <MessageSquare className="h-3 w-3" />
                      <span>{achievement.stats.answers} answers</span>
                    </div>
                  )}
                  {achievement.stats.upvotes && (
                    <div className="flex items-center gap-1">
                      <Heart className="h-3 w-3" />
                      <span>{achievement.stats.upvotes} upvotes</span>
                    </div>
                  )}
                  {achievement.stats.reputation && (
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3" />
                      <span>{achievement.stats.reputation} reputation</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    )
  }

  const renderMilestone = (milestone) => {
    const Icon = milestone.icon
    
    return (
      <motion.div
        key={milestone.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <Card className={`glass-subtle border border-border/50 shadow-lg overflow-hidden ${
          milestone.celebration ? 'ring-2 ring-yellow-500/50' : ''
        }`}>
          {/* Celebration effect */}
          {milestone.celebration && celebrationMode && (
            <div className="absolute inset-0 pointer-events-none">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.2, 1] }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 via-orange-500/20 to-red-500/20 rounded-lg"
              />
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0, rotate: 0 }}
                  animate={{ 
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                    rotate: [0, 180, 360],
                    y: [0, -100],
                    x: [0, Math.cos(i * 30) * 50]
                  }}
                  transition={{ 
                    duration: 2,
                    delay: i * 0.1,
                  }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                >
                  <PartyPopper className="h-4 w-4 text-yellow-500" />
                </motion.div>
              ))}
            </div>
          )}
          
          <CardContent className="p-4 sm:p-6 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", bounce: 0.5 }}
              className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${milestone.color} flex items-center justify-center text-white shadow-lg`}
            >
              <Icon className="h-8 w-8" />
            </motion.div>
            
            <div className="space-y-3">
              <div>
                <h3 className="font-bold text-lg text-foreground mb-1">
                  {milestone.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {milestone.description}
                </p>
              </div>
              
              <div className="flex items-center justify-center gap-4">
                <Badge className={`text-base px-3 py-1 bg-gradient-to-r ${milestone.color} text-white border-0`}>
                  {milestone.value}
                </Badge>
                <span className="text-xs text-muted-foreground">
                  {milestone.achievedAt}
                </span>
              </div>
              
              {milestone.celebration && (
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="flex items-center justify-center gap-1 text-yellow-600"
                >
                  <Sparkles className="h-4 w-4" />
                  <span className="text-sm font-medium">Community Achievement!</span>
                  <Sparkles className="h-4 w-4" />
                </motion.div>
              )}
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
            <Trophy className="h-5 w-5 text-yellow-500" />
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600 bg-clip-text text-transparent">
              Recent Achievements
            </h2>
          </div>
          <p className="text-sm sm:text-base text-muted-foreground">
            Celebrating our community's latest accomplishments and milestones
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center">
          <div className="inline-flex bg-muted/60 p-1 rounded-lg border border-border/50">
            {tabs.map((tab) => {
              const Icon = tab.icon
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id)
                    setCurrentIndex(0)
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-primary text-primary-foreground shadow-lg'
                      : 'text-muted-foreground hover:text-foreground hover:bg-background/80'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="sm:hidden">
                    {tab.id === 'achievements' ? 'Users' : 'Community'}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Content */}
        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            {activeTab === 'achievements' ? (
              renderAchievement(recentAchievements[currentIndex])
            ) : (
              renderMilestone(communityMilestones[currentIndex])
            )}
          </AnimatePresence>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2">
          {(activeTab === 'achievements' ? recentAchievements : communityMilestones).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-primary w-6' 
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
