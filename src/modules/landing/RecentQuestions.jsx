'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Clock, Eye, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { SAMPLE_QUESTIONS, ROUTES, TAGS } from '@/lib/constants'

export function RecentQuestions() {
  // Get the 3 most recent questions
  const recentQuestions = SAMPLE_QUESTIONS.slice(0, 3)

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Recently Answered
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Check out our latest detailed answers to popular programming questions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {recentQuestions.map((question, index) => (
            <motion.div
              key={question.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 group cursor-pointer">
                <Link href={`${ROUTES.QUESTIONS}/${question.slug}`}>
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-2 mb-3">
                      {question.tags.slice(0, 2).map(tagId => {
                        const tag = Object.values(TAGS).find(t => t.id === tagId)
                        return tag ? (
                          <Badge 
                            key={tag.id} 
                            variant="secondary"
                            className="text-xs"
                          >
                            {tag.name}
                          </Badge>
                        ) : null
                      })}
                      {question.tags.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{question.tags.length - 2}
                        </Badge>
                      )}
                    </div>
                    
                    <h3 className="text-lg font-semibold leading-tight group-hover:text-blue-600 transition-colors line-clamp-2">
                      {question.title}
                    </h3>
                  </CardHeader>

                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                      {question.excerpt}
                    </p>
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
                          <span>{question.views}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="h-3 w-3" />
                          <span>{question.likes}</span>
                        </div>
                      </div>
                      
                      <span className="text-xs">
                        {new Date(question.publishedAt).toLocaleDateString()}
                      </span>
                    </div>
                  </CardFooter>
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button asChild variant="outline" size="lg">
            <Link href={ROUTES.QUESTIONS}>
              View All Questions
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
