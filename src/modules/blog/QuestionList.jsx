'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { QuestionCard } from './QuestionCard'
import { Pagination } from '@/components/Pagination'
import { PAGINATION } from '@/lib/constants'

export function QuestionList({ 
  questions, 
  showPagination = true,
  title = "All Questions"
}) {
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = PAGINATION.POSTS_PER_PAGE
  
  // Calculate pagination
  const totalPages = Math.ceil(questions.length / postsPerPage)
  const startIndex = (currentPage - 1) * postsPerPage
  const currentQuestions = questions.slice(startIndex, startIndex + postsPerPage)

  const handlePageChange = (page) => {
    setCurrentPage(page)
    // Scroll to top of questions list
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (questions.length === 0) {
    return (
      <div className="text-center py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold mb-4">No questions found</h2>
          <p className="text-muted-foreground mb-8">
            Try adjusting your search or filter criteria
          </p>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-2">{title}</h1>
        <p className="text-muted-foreground">
          {questions.length} question{questions.length !== 1 ? 's' : ''} found
        </p>
      </motion.div>

      {/* Questions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentQuestions.map((question, index) => (
          <QuestionCard 
            key={question.id} 
            question={question} 
            index={index}
          />
        ))}
      </div>

      {/* Pagination */}
      {showPagination && totalPages > 1 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center pt-8"
        >
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </motion.div>
      )}
    </div>
  )
}
