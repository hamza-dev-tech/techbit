'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ArrowUp, MessageSquare, Eye, Clock, Heart, Bookmark, Share2 } from 'lucide-react'
import { formatDistanceToNow } from 'date-fns'

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

export function QuestionCard({ question, index = 0 }) {
  const [isLiked, setIsLiked] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [isUpvoted, setIsUpvoted] = useState(false)

  const {
    id,
    slug,
    title,
    excerpt,
    author,
    publishedAt,
    readTime,
    tags,
    views,
    likes
  } = question

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.02,
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      whileTap={{ scale: 0.98 }}
    >
      <Card className="group relative overflow-hidden backdrop-blur-xl bg-card/80 border border-border/50 shadow-lg hover:shadow-2xl hover:border-primary/20 transition-all duration-500 dark:bg-card/90 dark:border-border/60 dark:shadow-xl dark:hover:shadow-2xl dark:hover:border-primary/30">
        {/* Glassmorphism background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/50 dark:from-background/95 dark:via-background/80 dark:to-background/60"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 dark:via-primary/10"></div>
        
        {/* Animated border gradient */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm dark:from-blue-500/30 dark:via-purple-500/30 dark:to-indigo-500/30"></div>
        <div className="absolute inset-[1px] rounded-lg bg-card/90 backdrop-blur-xl dark:bg-card/95"></div>

        <div className="relative z-10">
          <CardHeader className="pb-3 px-4 sm:px-5 lg:px-6 pt-4 sm:pt-5 lg:pt-6">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <Link href={`/questions/${slug}`}>
                  <motion.h3 
                    className="font-semibold text-lg leading-tight group-hover:text-primary transition-all duration-300 cursor-pointer line-clamp-2"
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    {title}
                  </motion.h3>
                </Link>
                <p className="text-muted-foreground mt-2 text-sm line-clamp-2 leading-relaxed">
                  {excerpt}
                </p>
              </div>
              
              {/* Vote Section */}
              <motion.div 
                className="flex flex-col items-center space-y-1 min-w-[50px]"
                whileHover={{ scale: 1.05 }}
              >
                <motion.button 
                  className={`p-2 rounded-full transition-all duration-200 ${
                    isUpvoted 
                      ? 'bg-green-500/20 text-green-600' 
                      : 'hover:bg-accent/80 backdrop-blur-sm'
                  }`}
                  onClick={(e) => {
                    e.preventDefault()
                    setIsUpvoted(!isUpvoted)
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ArrowUp className={`h-4 w-4 ${isUpvoted ? 'fill-current' : ''}`} />
                </motion.button>
                <motion.span 
                  className="text-sm font-medium"
                  key={`${likes}-${isUpvoted}`}
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.3 }}
                >
                  {likes + (isUpvoted ? 1 : 0)}
                </motion.span>
              </motion.div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-3">
              {tags.slice(0, 3).map((tag, tagIndex) => (
                <motion.div
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + tagIndex * 0.05 + 0.3 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Badge 
                    variant="secondary" 
                    className="text-xs bg-muted/60 hover:bg-primary/20 hover:border-primary/30 transition-all duration-200 cursor-pointer backdrop-blur-sm"
                  >
                    {tag}
                  </Badge>
                </motion.div>
              ))}
              {tags.length > 3 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.6 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Badge variant="outline" className="text-xs bg-muted/40 backdrop-blur-sm">
                    +{tags.length - 3}
                  </Badge>
                </motion.div>
              )}
            </div>
          </CardHeader>

          <CardContent className="pt-0 px-4 sm:px-5 lg:px-6 pb-4 sm:pb-5 lg:pb-6">
            {/* Author */}
            <div className="flex items-center justify-between mb-3">
              <motion.div 
                className="flex items-center space-x-2"
                whileHover={{ x: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Avatar className="h-8 w-8 ring-2 ring-primary/20 transition-all duration-300">
                    <AvatarImage src={author.avatar} alt={author.name} />
                    <AvatarFallback className="text-xs bg-gradient-to-br from-blue-500 to-purple-500 text-white">
                      {author.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                </motion.div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium">{author.name}</span>
                  <span className="text-xs text-muted-foreground">{author.role}</span>
                </div>
              </motion.div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-2">
                <motion.button
                  className={`p-1.5 rounded-full transition-all duration-200 ${
                    isLiked 
                      ? 'text-red-500 bg-red-500/10' 
                      : 'text-muted-foreground hover:text-red-500 hover:bg-red-500/10'
                  }`}
                  onClick={(e) => {
                    e.preventDefault()
                    setIsLiked(!isLiked)
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Heart className={`h-3.5 w-3.5 ${isLiked ? 'fill-current' : ''}`} />
                </motion.button>

                <motion.button
                  className={`p-1.5 rounded-full transition-all duration-200 ${
                    isBookmarked 
                      ? 'text-yellow-500 bg-yellow-500/10' 
                      : 'text-muted-foreground hover:text-yellow-500 hover:bg-yellow-500/10'
                  }`}
                  onClick={(e) => {
                    e.preventDefault()
                    setIsBookmarked(!isBookmarked)
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Bookmark className={`h-3.5 w-3.5 ${isBookmarked ? 'fill-current' : ''}`} />
                </motion.button>

                <motion.button
                  className="p-1.5 rounded-full text-muted-foreground hover:text-blue-500 hover:bg-blue-500/10 transition-all duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Share2 className="h-3.5 w-3.5" />
                </motion.button>
              </div>
            </div>

            {/* Stats & Date */}
            <div className="flex items-center justify-between pt-2 border-t border-border/20">
              <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                <motion.div 
                  className="flex items-center space-x-1"
                  whileHover={{ scale: 1.05, color: "#3b82f6" }}
                >
                  <Eye className="h-3 w-3" />
                  <span>{views}</span>
                </motion.div>
                <motion.div 
                  className="flex items-center space-x-1"
                  whileHover={{ scale: 1.05, color: "#10b981" }}
                >
                  <MessageSquare className="h-3 w-3" />
                  <span>12</span>
                </motion.div>
                <motion.div 
                  className="flex items-center space-x-1"
                  whileHover={{ scale: 1.05, color: "#f59e0b" }}
                >
                  <Clock className="h-3 w-3" />
                  <span>{readTime}</span>
                </motion.div>
              </div>

              <motion.div 
                className="text-xs text-muted-foreground"
                whileHover={{ scale: 1.05 }}
              >
                {formatDistanceToNow(new Date(publishedAt), { addSuffix: true })}
              </motion.div>
            </div>
          </CardContent>
        </div>
      </Card>
    </motion.div>
  )
}
