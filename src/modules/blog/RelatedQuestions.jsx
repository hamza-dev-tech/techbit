'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { QuestionCard } from './QuestionCard'
import { ROUTES } from '@/lib/constants'

export function RelatedQuestions({ currentQuestionId, questions, limit = 3 }) {
  // Filter out current question and get related ones
  const relatedQuestions = questions
    .filter(q => q.id !== currentQuestionId)
    .slice(0, limit)

  if (relatedQuestions.length === 0) {
    return null
  }

  return (
    <section className="py-12 border-t">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Related Questions</h2>
          <Link 
            href={ROUTES.QUESTIONS}
            className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1 transition-colors"
          >
            View all
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedQuestions.map((question, index) => (
            <QuestionCard 
              key={question.id} 
              question={question} 
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
