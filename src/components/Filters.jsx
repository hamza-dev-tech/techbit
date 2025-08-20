'use client'

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { TrendingUp, Clock, MessageSquare, HelpCircle } from 'lucide-react'

const filters = [
  { id: 'recent', label: 'Recent', shortLabel: 'Recent', icon: Clock },
  { id: 'popular', label: 'Popular', shortLabel: 'Popular', icon: TrendingUp },
  { id: 'answered', label: 'Answered', shortLabel: 'Answered', icon: MessageSquare },
  { id: 'unanswered', label: 'Unanswered', shortLabel: 'New', icon: HelpCircle }
]

export function Filters({ currentFilter, onFilterChange }) {
  return (
    <div className="flex items-center justify-between gap-2 sm:gap-3 lg:gap-4 p-3 sm:p-4 bg-card/50 backdrop-blur-sm rounded-lg border">
      {/* Desktop and Mobile Tabs - Always visible */}
      <div className="flex-1 min-w-0">
        <Tabs value={currentFilter} onValueChange={onFilterChange}>
          <TabsList className="grid grid-cols-4 w-full h-9 sm:h-10 bg-muted/60 p-1">
            {filters.map((filter) => {
              const Icon = filter.icon
              const isActive = currentFilter === filter.id
              return (
                <TabsTrigger
                  key={filter.id}
                  value={filter.id}
                  className={`flex items-center gap-1 sm:gap-1.5 lg:gap-2 text-xs sm:text-sm px-2 sm:px-3 lg:px-4 min-w-0 transition-all duration-300 font-medium
                    ${isActive 
                      ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30 ring-2 ring-primary/20 scale-[1.02] font-semibold border border-primary/30' 
                      : 'bg-transparent text-muted-foreground hover:text-foreground hover:bg-background/80 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground'
                    }`}
                >
                  <Icon className={`h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0 transition-colors ${isActive ? 'text-primary-foreground' : ''}`} />
                  <span className="hidden sm:inline lg:hidden truncate">{filter.shortLabel}</span>
                  <span className="hidden lg:inline truncate">{filter.label}</span>
                  <span className="sm:hidden">{filter.id === 'recent' ? 'R' : filter.id === 'popular' ? 'P' : filter.id === 'answered' ? 'A' : 'U'}</span>
                  
                  {/* Active indicator dot */}
                  {isActive && (
                    <div className="w-1.5 h-1.5 bg-primary-foreground rounded-full animate-pulse flex-shrink-0"></div>
                  )}
                </TabsTrigger>
              )
            })}
          </TabsList>
        </Tabs>
      </div>

      {/* Quick Stats */}
      <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-muted-foreground flex-shrink-0">
        <div className="flex items-center gap-1">
          <Badge variant="secondary" className="h-4 sm:h-5 text-xs px-1.5 sm:px-2 font-medium bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
            42
          </Badge>
          <span className="hidden md:inline text-xs">new</span>
        </div>
        <div className="flex items-center gap-1">
          <Badge variant="outline" className="h-4 sm:h-5 text-xs px-1.5 sm:px-2 font-medium border-orange-200 text-orange-700 dark:border-orange-800 dark:text-orange-300">
            18
          </Badge>
          <span className="hidden md:inline text-xs">open</span>
        </div>
      </div>
    </div>
  )
}
