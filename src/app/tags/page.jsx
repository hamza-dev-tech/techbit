'use client'

import { motion } from 'framer-motion'
import { TagList } from '@/modules/search/TagList'
import { TAGS, SAMPLE_QUESTIONS } from '@/lib/constants'

export default function TagsPage() {
  // Calculate tag statistics
  const tagStats = Object.values(TAGS).map(tag => {
    const questionCount = SAMPLE_QUESTIONS.filter(q => 
      q.tags.includes(tag.id)
    ).length

    return {
      ...tag,
      questionCount
    }
  }).sort((a, b) => b.questionCount - a.questionCount)

  return (
    <div className="container py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Browse by <span className="text-blue-600">Tags</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover questions organized by technology, framework, and topic
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tagStats.map((tag, index) => (
          <motion.div
            key={tag.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <div 
              className="group p-6 rounded-2xl border bg-card hover:shadow-lg transition-all duration-300 cursor-pointer"
              style={{ borderColor: `${tag.color}30` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold"
                  style={{ backgroundColor: tag.color }}
                >
                  {tag.name.charAt(0)}
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold">{tag.questionCount}</div>
                  <div className="text-xs text-muted-foreground">questions</div>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                {tag.name}
              </h3>
              
              <p className="text-muted-foreground text-sm">
                Explore {tag.questionCount} answered question{tag.questionCount !== 1 ? 's' : ''} about {tag.name}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
