'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Clock, Eye, MessageSquare, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { SAMPLE_QUESTIONS } from '@/lib/constants'

export function RecentQuestions() {
  const recentQuestions = SAMPLE_QUESTIONS.slice(0, 4)

  return (
    <section className="py-20 bg-gradient-to-b from-background via-muted/10 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Recently <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Answered</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Check out the latest questions that received expert answers from our community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {recentQuestions.map((question, index) => (
            <motion.div
              key={question.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full glass-subtle border shadow-sm hover:shadow-md transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <Link href={`/questions/${question.slug}`}>
                        <h3 className="font-semibold text-lg leading-tight text-foreground group-hover:text-primary transition-colors cursor-pointer line-clamp-2 mb-3">
                          {question.title}
                        </h3>
                      </Link>
                      <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
                        {question.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {question.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs px-2 py-1 bg-muted/70 hover:bg-muted transition-colors">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="flex items-center justify-between">
                    {/* Author */}
                    <div className="flex items-center gap-3">
                      <Avatar className="h-7 w-7 ring-2 ring-muted/30">
                        <AvatarImage src={question.author.avatar} alt={question.author.name} />
                        <AvatarFallback className="text-xs bg-gradient-to-br from-blue-500 to-purple-500 text-white font-semibold">
                          {question.author.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-foreground">{question.author.name}</span>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {question.readTime}
                        </span>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        <span>{question.views}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageSquare className="h-3 w-3" />
                        <span>{question.likes}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link href="/questions">
            <Button size="lg" variant="outline" className="group px-8 py-3 bg-background/50 border-border/50 hover:bg-background hover:border-border hover:shadow-md transition-all duration-300">
              View All Questions
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
