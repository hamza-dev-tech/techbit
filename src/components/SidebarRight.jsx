'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Button } from '@/components/ui/button'
import { TrendingUp, Users, Award, ExternalLink, Eye } from 'lucide-react'
import Link from 'next/link'

const trendingQuestions = [
  {
    id: 1,
    title: 'How to optimize React rendering?',
    views: 2847,
    answers: 12
  },
  {
    id: 2,
    title: 'Node.js error handling best practices',
    views: 1923,
    answers: 8
  },
  {
    id: 3,
    title: 'TypeScript vs JavaScript 2024',
    views: 3156,
    answers: 15
  },
  {
    id: 4,
    title: 'Docker containers explained',
    views: 1745,
    answers: 6
  }
]

const topContributors = [
  {
    id: 1,
    name: 'Sarah Chen',
    avatar: '/avatars/sarah.jpg',
    points: 2847,
    badge: 'Expert',
    role: 'Frontend Dev',
    answers: 89
  },
  {
    id: 2,
    name: 'Mike Rodriguez',
    avatar: '/avatars/mike.jpg',
    points: 2156,
    badge: 'Expert',
    role: 'Full Stack',
    answers: 67
  },
  {
    id: 3,
    name: 'Alex Kim',
    avatar: '/avatars/alex.jpg',
    points: 1923,
    badge: 'Pro',
    role: 'Backend Dev',
    answers: 54
  },
  {
    id: 4,
    name: 'Emma Davis',
    avatar: '/avatars/emma.jpg',
    points: 1567,
    badge: 'Pro',
    role: 'DevOps',
    answers: 42
  }
]

const relatedResources = [
  {
    title: 'React Docs',
    description: 'Official guide',
    url: 'https://react.dev'
  },
  {
    title: 'Next.js Guide',
    description: 'Framework docs',
    url: 'https://nextjs.org/learn'
  },
  {
    title: 'MDN Web Docs',
    description: 'Web standards',
    url: 'https://developer.mozilla.org'
  }
]

const containerVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

export function SidebarRight() {
  return (
    <div className="w-full space-y-4">
      {/* Trending Questions */}
      <Card className="glass-subtle border shadow-sm">
        <CardHeader className="pb-3 px-4 pt-4">
          <CardTitle className="flex items-center gap-2 text-sm font-semibold">
            <TrendingUp className="h-4 w-4 text-orange-600" />
            Trending Questions
          </CardTitle>
        </CardHeader>
        <CardContent className="px-4 pb-4">
          <div className="space-y-2">
            {trendingQuestions.map((question, index) => (
              <Link
                key={question.id}
                href={`/questions/${question.id}`}
                className="block p-2 rounded-md hover:bg-muted/50 transition-all duration-200 border border-transparent hover:border-border/50 group"
              >
                <h4 className="font-medium text-xs mb-1.5 line-clamp-2 text-foreground group-hover:text-primary transition-colors leading-tight">
                  {question.title}
                </h4>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    {(question.views / 1000).toFixed(1)}k views
                  </span>
                  <Badge 
                    variant="outline" 
                    className="text-xs px-1.5 py-0 border-muted-foreground/30 text-muted-foreground group-hover:border-primary/50 group-hover:text-primary transition-all duration-200"
                  >
                    {question.answers}
                  </Badge>
                </div>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Top Contributors */}
      <Card className="glass-subtle border shadow-sm">
        <CardHeader className="pb-3 px-4 pt-4">
          <CardTitle className="flex items-center gap-2 text-sm font-semibold">
            <Award className="h-4 w-4 text-yellow-600" />
            Top Contributors
          </CardTitle>
        </CardHeader>
        <CardContent className="px-4 pb-4">
          <div className="space-y-2">
            {topContributors.map((contributor, index) => (
              <div
                key={contributor.id}
                className="flex items-center gap-2 p-2 rounded-md hover:bg-muted/50 transition-all duration-200 cursor-pointer group"
              >
                <div className="relative flex-shrink-0">
                  <Avatar className="h-8 w-8 ring-1 ring-muted-foreground/20 group-hover:ring-primary/30 transition-all duration-200">
                    <AvatarImage src={contributor.avatar} alt={contributor.name} />
                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white text-xs font-semibold">
                      {contributor.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div
                    className={`absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-sm ${
                      index === 0 ? 'bg-yellow-500' : 
                      index === 1 ? 'bg-gray-400' : 
                      index === 2 ? 'bg-orange-600' : 'bg-blue-500'
                    }`}
                  >
                    {index + 1}
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-xs text-foreground group-hover:text-primary transition-colors truncate">
                    {contributor.name}
                  </h4>
                  <p className="text-xs text-muted-foreground truncate">
                    {contributor.role}
                  </p>
                </div>
                
                <div className="text-right flex-shrink-0">
                  <div className="text-xs font-semibold text-primary">
                    {(contributor.points / 1000).toFixed(1)}k
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Newsletter */}
      <Card className="glass-subtle border shadow-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-950/20 dark:to-purple-950/20"></div>
        
        <div className="relative">
          <CardHeader className="pb-3 px-4 pt-4">
            <CardTitle className="flex items-center gap-2 text-sm font-semibold">
              <span className="text-sm">📧</span>
              Stay Updated
            </CardTitle>
          </CardHeader>
          <CardContent className="px-4 pb-4 space-y-3">
            <p className="text-xs text-muted-foreground leading-relaxed">
              Get weekly digest of trending questions and answers.
            </p>
            
            <div className="space-y-2">
              <input
                type="email"
                placeholder="Enter email"
                className="w-full px-2 py-1.5 text-xs bg-background/80 border border-border/50 rounded-md focus:outline-none focus:ring-1 focus:ring-primary/20 focus:border-primary/30 transition-all duration-200 placeholder:text-muted-foreground/70"
              />
              
              <Button 
                size="sm" 
                className="w-full h-7 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-sm hover:shadow-md transition-all duration-300 text-white font-medium text-xs"
              >
                Subscribe
              </Button>
            </div>
            
            <div className="flex items-center gap-1 pt-1 border-t border-border/30">
              <span className="text-xs text-primary">✨</span>
              <p className="text-xs text-muted-foreground">
                25k+ developers
              </p>
            </div>
          </CardContent>
        </div>
      </Card>

      {/* Related Resources */}
      <Card className="glass-subtle border shadow-sm">
        <CardHeader className="pb-3 px-4 pt-4">
          <CardTitle className="flex items-center gap-2 text-sm font-semibold">
            <ExternalLink className="h-4 w-4 text-green-600" />
            Resources
          </CardTitle>
        </CardHeader>
        <CardContent className="px-4 pb-4">
          <div className="space-y-1">
            {relatedResources.map((resource, index) => (
              <Link
                key={resource.title}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2 rounded-md hover:bg-muted/50 transition-all duration-200 group border border-transparent hover:border-border/30"
              >
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-xs text-foreground group-hover:text-primary transition-colors truncate">
                    {resource.title}
                  </h4>
                  <p className="text-xs text-muted-foreground truncate">
                    {resource.description}
                  </p>
                </div>
                <div className="flex-shrink-0 ml-2 text-muted-foreground group-hover:text-primary transition-colors">
                  <ExternalLink className="h-3 w-3" />
                </div>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
