'use client'

import { motion } from 'framer-motion'
import { X, Filter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { SearchBar } from '@/components/SearchBar'
import { TagList } from './TagList'
import { TAGS } from '@/lib/constants'

export function TagFilter({ 
  searchQuery,
  onSearchChange,
  selectedTags,
  onTagAdd,
  onTagRemove,
  onClearFilters,
  hasFilters,
  className = ""
}) {
  return (
    <div className={`space-y-6 ${className}`}>
      {/* Search Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <SearchBar
          searchQuery={searchQuery}
          onSearchChange={onSearchChange}
          placeholder="Search questions..."
          className="w-full"
        />
      </motion.div>

      {/* Active Filters */}
      {hasFilters && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="space-y-3"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              <span className="text-sm font-medium">Active Filters</span>
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={onClearFilters}
              className="text-xs"
            >
              Clear All
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {/* Search Query Filter */}
            {searchQuery && (
              <Badge variant="default" className="gap-1">
                Search: "{searchQuery.slice(0, 20)}{searchQuery.length > 20 ? '...' : ''}"
                <X 
                  className="h-3 w-3 cursor-pointer hover:bg-white/20 rounded-full" 
                  onClick={() => onSearchChange('')}
                />
              </Badge>
            )}
            
            {/* Tag Filters */}
            {selectedTags.map(tagId => {
              const tag = Object.values(TAGS).find(t => t.id === tagId)
              if (!tag) return null
              
              return (
                <Badge 
                  key={tagId} 
                  variant="default" 
                  className="gap-1"
                  style={{ backgroundColor: tag.color }}
                >
                  {tag.name}
                  <X 
                    className="h-3 w-3 cursor-pointer hover:bg-white/20 rounded-full" 
                    onClick={() => onTagRemove(tagId)}
                  />
                </Badge>
              )
            })}
          </div>
        </motion.div>
      )}

      {/* Tag List */}
      <TagList
        selectedTags={selectedTags}
        onTagClick={tag => {
          if (selectedTags.includes(tag)) {
            onTagRemove(tag)
          } else {
            onTagAdd(tag)
          }
        }}
      />
    </div>
  )
}
