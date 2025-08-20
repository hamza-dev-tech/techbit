'use client'

import { notFound } from 'next/navigation'
import { QuestionList } from '@/modules/blog/QuestionList'
import { TAGS, SAMPLE_QUESTIONS } from '@/lib/constants'

function getQuestionsByTag(tag) {
  return SAMPLE_QUESTIONS.filter(q => q.tags.includes(tag))
}

export default function TagPage({ params }) {
  const tag = Object.values(TAGS).find(t => t.id === params.tag)
  
  if (!tag) {
    notFound()
  }

  const questions = getQuestionsByTag(tag.id)

  return (
    <div className="container py-8">
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <div 
            className="w-16 h-16 rounded-2xl flex items-center justify-center text-white text-2xl font-bold"
            style={{ backgroundColor: tag.color }}
          >
            {tag.name.charAt(0)}
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">
              {tag.name} Questions
            </h1>
            <p className="text-muted-foreground mt-2">
              Detailed answers to common {tag.name} questions
            </p>
          </div>
        </div>
      </div>

      <QuestionList 
        questions={questions}
        title={`${tag.name} Questions`}
        showPagination={true}
      />
    </div>
  )
}
