'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { TAGS } from '@/lib/constants'

export function TagList({ 
  selectedTags = [], 
  onTagClick, 
  showAll = false,
  limit = 12 
}) {
  const allTags = Object.values(TAGS)
  const displayTags = showAll ? allTags : allTags.slice(0, limit)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-4"
    >
      <h3 className="text-lg font-semibold">Popular Tags</h3>
      
      <div className="flex flex-wrap gap-2">
        {displayTags.map((tag, index) => {
          const isSelected = selectedTags.includes(tag.id)
          
          return (
            <motion.div
              key={tag.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Badge
                variant={isSelected ? "default" : "secondary"}
                className={`cursor-pointer transition-all hover:scale-105 ${
                  isSelected 
                    ? "bg-blue-600 hover:bg-blue-700" 
                    : "hover:bg-secondary/80"
                }`}
                style={
                  !isSelected ? {
                    backgroundColor: `${tag.color}15`,
                    color: tag.color,
                    borderColor: `${tag.color}30`
                  } : {}
                }
                onClick={() => onTagClick(tag.id)}
              >
                {tag.name}
              </Badge>
            </motion.div>
          )
        })}
        
        {!showAll && allTags.length > limit && (
          <Badge 
            variant="outline" 
            className="cursor-pointer hover:bg-secondary/80"
            onClick={() => {/* Could trigger showing all tags */}}
          >
            +{allTags.length - limit} more
          </Badge>
        )}
      </div>
    </motion.div>
  )
}
