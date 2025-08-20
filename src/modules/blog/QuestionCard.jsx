'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Clock, Eye, Heart, User } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { ROUTES, TAGS } from '@/lib/constants'

export function QuestionCard({ question, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full hover:shadow-lg transition-all duration-300 group cursor-pointer">
        <Link href={`${ROUTES.QUESTIONS}/${question.slug}`}>
          <CardHeader className="pb-4">
            {/* Tags */}
            <div className="flex items-center gap-2 mb-3 flex-wrap">
              {question.tags.slice(0, 3).map(tagId => {
                const tag = Object.values(TAGS).find(t => t.id === tagId)
                return tag ? (
                  <Badge 
                    key={tag.id} 
                    variant="secondary"
                    className="text-xs"
                    style={{ backgroundColor: `${tag.color}15`, color: tag.color }}
                  >
                    {tag.name}
                  </Badge>
                ) : null
              })}
              {question.tags.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{question.tags.length - 3}
                </Badge>
              )}
            </div>
            
            {/* Title */}
            <h2 className="text-xl font-bold leading-tight group-hover:text-blue-600 transition-colors line-clamp-2">
              {question.title}
            </h2>
          </CardHeader>

          <CardContent className="pb-4">
            {/* Excerpt */}
            <p className="text-muted-foreground leading-relaxed line-clamp-3 mb-4">
              {question.excerpt}
            </p>
            
            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                {question.author.name.charAt(0)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium truncate">
                    {question.author.name}
                  </span>
                  <span className="text-xs text-muted-foreground">•</span>
                  <span className="text-xs text-muted-foreground">
                    {question.author.role}
                  </span>
                </div>
              </div>
            </div>
          </CardContent>

          <CardFooter className="pt-4 border-t">
            <div className="flex items-center justify-between w-full text-xs text-muted-foreground">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span>{question.readTime}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Eye className="h-3 w-3" />
                  <span>{question.views.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Heart className="h-3 w-3" />
                  <span>{question.likes}</span>
                </div>
              </div>
              
              <time className="text-xs">
                {new Date(question.publishedAt).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </time>
            </div>
          </CardFooter>
        </Link>
      </Card>
    </motion.div>
  )
}
