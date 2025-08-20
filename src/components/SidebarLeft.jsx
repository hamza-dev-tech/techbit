'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Button } from '@/components/ui/button'
import { TAGS } from '@/lib/constants'
import { Filter, Tag, Star, Zap, TrendingUp } from 'lucide-react'

const quickFilters = [
  { id: 'unanswered-only', label: 'Unanswered', icon: Filter, count: 23 },
  { id: 'popular-today', label: 'Hot Today', icon: Star, count: 15 },
  { id: 'trending', label: 'Trending', icon: Zap, count: 8 }
]

const categories = [
  { id: 'frontend', name: 'Frontend', count: 342, color: 'bg-blue-500' },
  { id: 'backend', name: 'Backend', count: 287, color: 'bg-green-500' },
  { id: 'mobile', name: 'Mobile', count: 156, color: 'bg-purple-500' },
  { id: 'devops', name: 'DevOps', count: 98, color: 'bg-orange-500' },
  { id: 'ai', name: 'AI/ML', count: 124, color: 'bg-pink-500' },
  { id: 'database', name: 'Database', count: 89, color: 'bg-indigo-500' }
]

const containerVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.1,
      delayChildren: 0.2
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

export function SidebarLeft() {
  return (
    <div className="w-full space-y-4">
      {/* Quick Filters */}
      <Card className="glass-subtle border shadow-sm">
        <CardHeader className="pb-3 px-4 pt-4">
          <CardTitle className="flex items-center gap-2 text-sm font-semibold">
            <Filter className="h-4 w-4 text-blue-600" />
            Quick Filters
          </CardTitle>
        </CardHeader>
        <CardContent className="px-4 pb-4 space-y-1">
          {quickFilters.map((filter, index) => {
            const Icon = filter.icon
            return (
              <Button
                key={filter.id}
                variant="ghost"
                className="w-full h-8 px-2 py-1 text-left hover:bg-muted/60 rounded-md group transition-all duration-200 flex items-center"
              >
                <div className="flex items-center gap-1.5 min-w-0 flex-1">
                  <Icon className="h-3 w-3 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                  <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors flex-shrink-0">
                    {filter.label}
                  </span>
                </div>
                <Badge 
                  variant="secondary" 
                  className="text-xs px-1.5 py-0 bg-muted/70 text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-all duration-200 flex-shrink-0"
                >
                  {filter.count}
                </Badge>
              </Button>
            )
          })}
        </CardContent>
      </Card>

      {/* Categories */}
      <Card className="glass-subtle border shadow-sm">
        <CardHeader className="pb-3 px-4 pt-4">
          <CardTitle className="flex items-center gap-2 text-sm font-semibold">
            <Tag className="h-4 w-4 text-green-600" />
            Categories
          </CardTitle>
        </CardHeader>
        <CardContent className="px-4 pb-4">
          <ScrollArea className="h-60 pr-2">
            <div className="space-y-1">
              {categories.map((category, index) => (
                <Button
                  key={category.id}
                  variant="ghost"
                  className="w-full h-8 px-2 py-1 text-left hover:bg-muted/60 rounded-md group transition-all duration-200 flex items-center"
                >
                  <div className="flex items-center gap-1.5 min-w-0 flex-1">
                    <div 
                      className={`w-2 h-2 rounded-full ${category.color} shadow-sm flex-shrink-0`}
                    />
                    <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors flex-shrink-0">
                      {category.name}
                    </span>
                  </div>
                  <Badge 
                    variant="outline" 
                    className="text-xs px-1.5 py-0 border-muted-foreground/30 text-muted-foreground group-hover:border-primary/50 group-hover:text-primary transition-all duration-200 flex-shrink-0"
                  >
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>

      {/* Popular Tags */}
      <Card className="glass-subtle border shadow-sm">
        <CardHeader className="pb-3 px-4 pt-4">
          <CardTitle className="flex items-center gap-2 text-sm font-semibold">
            <Star className="h-4 w-4 text-purple-600" />
            Popular Tags
          </CardTitle>
        </CardHeader>
        <CardContent className="px-4 pb-4 space-y-3">
          <div className="flex flex-wrap gap-1.5">
            {Object.values(TAGS).slice(0, 10).map((tag, index) => (
              <Badge
                key={tag.id}
                variant="secondary"
                className="cursor-pointer hover:bg-accent/80 hover:text-accent-foreground transition-all duration-200 text-xs px-2 py-0.5 font-normal border-l-2 hover:shadow-sm"
                style={{ borderLeftColor: tag.color }}
              >
                {tag.name}
              </Badge>
            ))}
          </div>
          
          <div className="pt-2 border-t border-border/50">
            <Button 
              variant="link" 
              className="p-0 h-auto text-xs text-muted-foreground hover:text-primary transition-colors group"
            >
              <span>View all tags</span>
              <TrendingUp className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
