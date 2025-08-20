'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { QuestionCard } from '@/components/QuestionCard'
import { Filters } from '@/components/Filters'
import { SAMPLE_QUESTIONS } from '@/lib/constants'
import { Button } from '@/components/ui/button'
import { RefreshCw } from 'lucide-react'

export function QuestionFeed() {
  const [questions, setQuestions] = useState(SAMPLE_QUESTIONS)
  const [loading, setLoading] = useState(false)
  const [filter, setFilter] = useState('recent')

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter)
    // In a real app, this would trigger an API call
    let sortedQuestions = [...SAMPLE_QUESTIONS]
    
    switch (newFilter) {
      case 'popular':
        sortedQuestions.sort((a, b) => b.views - a.views)
        break
      case 'answered':
        sortedQuestions.sort((a, b) => b.likes - a.likes)
        break
      case 'unanswered':
        // For demo, just reverse the order
        sortedQuestions.reverse()
        break
      default:
        sortedQuestions.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
    }
    
    setQuestions(sortedQuestions)
  }

  const handleRefresh = async () => {
    setLoading(true)
    // Simulate API call
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }

  return (
    <div className="space-y-4 sm:space-y-5 lg:space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-card/30 backdrop-blur-sm rounded-lg border border-border/50 shadow-sm">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-foreground">Latest Questions</h2>
          <p className="text-sm text-muted-foreground mt-1">
            {questions.length} questions • Updated 2 minutes ago
          </p>
        </div>
        
        <Button
          variant="outline"
          size="sm"
          onClick={handleRefresh}
          disabled={loading}
          className="gap-2 hover:bg-primary/10 hover:border-primary/30 transition-all duration-200"
        >
          <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
          <span className="hidden sm:inline">Refresh</span>
        </Button>
      </div>

      {/* Filters */}
      <Filters
        currentFilter={filter}
        onFilterChange={handleFilterChange}
      />

      {/* Question List */}
      <motion.div 
        className="space-y-4 sm:space-y-5 lg:space-y-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.2
            }
          }
        }}
      >
        {questions.map((question, index) => (
          <QuestionCard
            key={question.id}
            question={question}
            index={index}
          />
        ))}
      </motion.div>

      {/* Load More */}
      <div className="flex justify-center pt-6 sm:pt-8">
        <Button variant="outline" size="lg" className="hover:bg-primary/10 hover:border-primary/30 transition-all duration-200">
          Load More Questions
        </Button>
      </div>
    </div>
  )
}
