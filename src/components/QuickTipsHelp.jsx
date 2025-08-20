'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  HelpCircle, 
  Lightbulb, 
  BookOpen, 
  Users, 
  ChevronLeft, 
  ChevronRight,
  CheckCircle,
  Star,
  Heart,
  MessageCircle,
  ArrowRight,
  Zap
} from 'lucide-react'

const helpSections = [
  {
    id: 'question-tips',
    title: 'How to Ask Great Questions',
    icon: HelpCircle,
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50 dark:bg-blue-950/30',
    tips: [
      {
        id: 1,
        title: 'Be Specific & Clear',
        description: 'Include error messages, code snippets, and expected vs actual behavior',
        example: '❌ "My React app is broken" → ✅ "useEffect infinite loop when fetching data"',
        importance: 'high'
      },
      {
        id: 2,
        title: 'Provide Context',
        description: 'Share your environment, versions, and what you\'ve already tried',
        example: 'Include: React v18, Node v20, browser console errors',
        importance: 'high'
      },
      {
        id: 3,
        title: 'Use Proper Formatting',
        description: 'Format code blocks, use clear headings, and structure your question',
        example: 'Use ```javascript for code blocks and clear bullet points',
        importance: 'medium'
      },
      {
        id: 4,
        title: 'Research First',
        description: 'Search existing questions and show what you\'ve tried',
        example: 'Link to similar questions and explain how yours differs',
        importance: 'medium'
      }
    ]
  },
  {
    id: 'guidelines',
    title: 'Community Guidelines',
    icon: Users,
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50 dark:bg-green-950/30',
    tips: [
      {
        id: 1,
        title: 'Be Respectful & Professional',
        description: 'Treat all community members with respect and courtesy',
        example: 'Use "please" and "thank you", avoid harsh language',
        importance: 'high'
      },
      {
        id: 2,
        title: 'Stay On-Topic',
        description: 'Keep discussions focused on programming and development',
        example: 'Ask about code, tools, best practices, not personal matters',
        importance: 'high'
      },
      {
        id: 3,
        title: 'Give Back to Community',
        description: 'Answer questions, upvote helpful content, share knowledge',
        example: 'Spend 10 minutes daily helping others with their questions',
        importance: 'medium'
      },
      {
        id: 4,
        title: 'Avoid Duplication',
        description: 'Check if your question already exists before posting',
        example: 'Use search function and browse similar tags first',
        importance: 'medium'
      }
    ]
  },
  {
    id: 'success-tips',
    title: 'Success Tips',
    icon: Star,
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50 dark:bg-purple-950/30',
    tips: [
      {
        id: 1,
        title: 'Engage with Answers',
        description: 'Comment, ask follow-ups, and accept the best solution',
        example: 'Mark answer as accepted, comment "This worked perfectly!"',
        importance: 'high'
      },
      {
        id: 2,
        title: 'Build Your Reputation',
        description: 'Consistent quality contributions earn trust and badges',
        example: 'Answer 1-2 questions daily, provide detailed explanations',
        importance: 'medium'
      },
      {
        id: 3,
        title: 'Use Tags Effectively',
        description: 'Choose relevant, specific tags to reach the right audience',
        example: 'Use "react-hooks" instead of just "react" for hook questions',
        importance: 'medium'
      },
      {
        id: 4,
        title: 'Follow Up & Update',
        description: 'Share your final solution and what worked for future visitors',
        example: 'Edit question with solution or post your own answer',
        importance: 'low'
      }
    ]
  }
]

const quickActions = [
  { label: 'Ask Question', icon: HelpCircle, color: 'bg-blue-500' },
  { label: 'Browse Questions', icon: BookOpen, color: 'bg-green-500' },
  { label: 'Join Community', icon: Users, color: 'bg-purple-500' }
]

export function QuickTipsHelp() {
  const [activeSection, setActiveSection] = useState(0)
  const [currentTip, setCurrentTip] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return
    
    const interval = setInterval(() => {
      setCurrentTip(prev => {
        const section = helpSections[activeSection]
        const nextTip = (prev + 1) % section.tips.length
        return nextTip
      })
    }, 5000)
    
    return () => clearInterval(interval)
  }, [activeSection, isAutoPlay])

  const currentSection = helpSections[activeSection]
  const tip = currentSection.tips[currentTip]

  const getImportanceColor = (importance) => {
    switch (importance) {
      case 'high':
        return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
      default:
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
    }
  }

  const navigateTip = (direction) => {
    setIsAutoPlay(false)
    setCurrentTip(prev => {
      const section = helpSections[activeSection]
      if (direction === 'next') {
        return (prev + 1) % section.tips.length
      } else {
        return prev === 0 ? section.tips.length - 1 : prev - 1
      }
    })
    
    // Re-enable autoplay after 10 seconds
    setTimeout(() => setIsAutoPlay(true), 10000)
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
            <Lightbulb className="h-5 w-5 text-yellow-500 animate-pulse" />
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
              Quick Tips & Help
            </h2>
          </div>
          <p className="text-sm sm:text-base text-muted-foreground">
            Master the art of asking questions and engaging with our community
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
          {/* Section Navigation */}
          <div className="lg:col-span-1 space-y-3">
            {helpSections.map((section, index) => {
              const Icon = section.icon
              const isActive = activeSection === index
              return (
                <motion.button
                  key={section.id}
                  onClick={() => {
                    setActiveSection(index)
                    setCurrentTip(0)
                    setIsAutoPlay(true)
                  }}
                  className={`w-full p-4 rounded-lg border transition-all duration-300 text-left ${
                    isActive 
                      ? 'border-primary/30 shadow-md' 
                      : 'border-border/50 hover:border-border hover:shadow-sm'
                  } ${section.bgColor}`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${section.color} text-white shadow-sm`}>
                      <Icon className="h-4 w-4" />
                    </div>
                    <h3 className={`font-semibold text-sm ${
                      isActive ? 'text-primary' : 'text-foreground'
                    }`}>
                      {section.title}
                    </h3>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {section.tips.length} essential tips
                  </p>
                  
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mt-2"
                    >
                      <div className="flex gap-1">
                        {section.tips.map((_, tipIndex) => (
                          <div
                            key={tipIndex}
                            className={`h-1 rounded-full transition-all duration-300 ${
                              tipIndex === currentTip ? 'bg-primary w-6' : 'bg-muted-foreground/30 w-2'
                            }`}
                          />
                        ))}
                      </div>
                    </motion.div>
                  )}
                </motion.button>
              )
            })}
          </div>

          {/* Tip Content */}
          <div className="lg:col-span-2">
            <Card className={`glass-subtle border border-border/50 shadow-lg ${currentSection.bgColor}`}>
              <CardHeader className="pb-3 px-4 sm:px-6 pt-4 sm:pt-5">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${currentSection.color} text-white shadow-sm`}>
                      <currentSection.icon className="h-4 w-4" />
                    </div>
                    {currentSection.title}
                  </CardTitle>
                  
                  <div className="flex items-center gap-2">
                    <Badge className={`${getImportanceColor(tip.importance)} text-xs capitalize`}>
                      {tip.importance} Priority
                    </Badge>
                    
                    <div className="flex gap-1">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => navigateTip('prev')}
                        className="h-8 w-8 p-0"
                      >
                        <ChevronLeft className="h-3 w-3" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => navigateTip('next')}
                        className="h-8 w-8 p-0"
                      >
                        <ChevronRight className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${activeSection}-${currentTip}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    {/* Tip Header */}
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-base sm:text-lg text-foreground mb-2">
                          {tip.title}
                        </h4>
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                          {tip.description}
                        </p>
                      </div>
                    </div>

                    {/* Example */}
                    <div className="bg-muted/50 border border-border/30 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Zap className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm font-medium text-foreground">Example:</span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed font-mono">
                        {tip.example}
                      </p>
                    </div>

                    {/* Progress indicator */}
                    <div className="flex items-center justify-between pt-2 border-t border-border/30">
                      <div className="flex gap-2">
                        {currentSection.tips.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentTip(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              index === currentTip ? 'bg-primary w-6' : 'bg-muted-foreground/30'
                            }`}
                          />
                        ))}
                      </div>
                      
                      <div className="text-xs text-muted-foreground">
                        {currentTip + 1} of {currentSection.tips.length}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              {quickActions.map((action, index) => {
                const Icon = action.icon
                return (
                  <motion.div
                    key={action.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      variant="outline"
                      className={`w-full h-auto p-3 flex-col gap-2 ${action.color}/10 border-${action.color}/20 hover:${action.color}/20 transition-all duration-300`}
                    >
                      <div className={`p-2 rounded-lg ${action.color} text-white`}>
                        <Icon className="h-3 w-3" />
                      </div>
                      <span className="text-xs font-medium">{action.label}</span>
                    </Button>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
