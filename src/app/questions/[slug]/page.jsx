'use client'

import { notFound } from 'next/navigation'
import { motion } from 'framer-motion'
import { Clock, Eye, Heart, Calendar, User, Share2, Bookmark } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { AuthorCard } from '@/modules/author/AuthorCard'
import { RelatedQuestions } from '@/modules/blog/RelatedQuestions'
import { SAMPLE_QUESTIONS, TAGS } from '@/lib/constants'

// This would normally be a server component fetching from an API/database
function getQuestionBySlug(slug) {
  return SAMPLE_QUESTIONS.find(q => q.slug === slug) || null
}

export default function QuestionPage({ params }) {
  const question = getQuestionBySlug(params.slug)

  if (!question) {
    notFound()
  }

  // Convert markdown-like content to HTML (in a real app, use a proper markdown parser)
  const formatContent = (content) => {
    return content
      .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold mb-6">$1</h1>')
      .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-semibold mb-4 mt-8">$1</h2>')
      .replace(/^### (.*$)/gm, '<h3 class="text-xl font-semibold mb-3 mt-6">$1</h3>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/```([^`]+)```/g, '<pre class="bg-muted p-4 rounded-lg overflow-x-auto my-4"><code>$1</code></pre>')
      .replace(/`([^`]+)`/g, '<code class="bg-muted px-2 py-1 rounded text-sm">$1</code>')
      .replace(/^\| (.*) \|$/gm, '<div class="table-row">$1</div>')
      .replace(/\n\n/g, '</p><p class="mb-4">')
      .replace(/^(.+)$/gm, '<p class="mb-4">$1</p>')
  }

  return (
    <div className="container py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Header */}
            <header className="space-y-6">
              <div className="space-y-4">
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {question.tags.map(tagId => {
                    const tag = Object.values(TAGS).find(t => t.id === tagId)
                    return tag ? (
                      <Badge 
                        key={tag.id} 
                        variant="secondary"
                        style={{ backgroundColor: `${tag.color}15`, color: tag.color }}
                      >
                        {tag.name}
                      </Badge>
                    ) : null
                  })}
                </div>

                {/* Title */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  {question.title}
                </h1>

                {/* Excerpt */}
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {question.excerpt}
                </p>
              </div>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <time>
                    {new Date(question.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{question.readTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  <span>{question.views.toLocaleString()} views</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="h-4 w-4" />
                  <span>{question.likes} likes</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3">
                <Button size="sm" variant="outline">
                  <Heart className="h-4 w-4 mr-2" />
                  Like
                </Button>
                <Button size="sm" variant="outline">
                  <Bookmark className="h-4 w-4 mr-2" />
                  Save
                </Button>
                <Button size="sm" variant="outline">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>

              <Separator />
            </header>

            {/* Content */}
            <div 
              className="prose prose-lg max-w-none dark:prose-invert"
              dangerouslySetInnerHTML={{ __html: formatContent(question.content) }}
            />

            {/* Related Questions */}
            <RelatedQuestions 
              currentQuestionId={question.id}
              questions={SAMPLE_QUESTIONS}
            />
          </motion.article>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 space-y-6">
            {/* Author Card */}
            <AuthorCard 
              author={question.author}
              showBio={true}
              showStats={false}
            />

            {/* Table of Contents (could be extracted from content) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-card border rounded-lg p-4"
            >
              <h3 className="font-semibold mb-3">In this article</h3>
              <nav className="space-y-2 text-sm">
                <a href="#technical-reason" className="block text-muted-foreground hover:text-foreground transition-colors">
                  The Technical Reason
                </a>
                <a href="#code-examples" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Code Examples  
                </a>
                <a href="#migration-strategy" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Migration Strategy
                </a>
              </nav>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
