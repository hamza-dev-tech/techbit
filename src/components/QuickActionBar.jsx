'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Plus, 
  Search, 
  Filter, 
  Code, 
  Database, 
  Smartphone, 
  Server, 
  Brain, 
  Palette,
  Zap,
  Award,
  HelpCircle,
  TrendingUp,
  Clock
} from 'lucide-react'

const categories = [
  { id: 'frontend', label: 'Frontend', icon: Palette, color: 'bg-blue-500' },
  { id: 'backend', label: 'Backend', icon: Server, color: 'bg-green-500' },
  { id: 'mobile', label: 'Mobile', icon: Smartphone, color: 'bg-purple-500' },
  { id: 'database', label: 'Database', icon: Database, color: 'bg-orange-500' },
  { id: 'ai', label: 'AI/ML', icon: Brain, color: 'bg-pink-500' },
  { id: 'general', label: 'General', icon: Code, color: 'bg-indigo-500' }
]

const quickFilters = [
  { id: 'urgent', label: 'Urgent', icon: Zap, color: 'from-red-500 to-orange-500', count: 12 },
  { id: 'bounty', label: 'Bounty', icon: Award, color: 'from-yellow-500 to-orange-500', count: 8 },
  { id: 'beginner', label: 'Beginner', icon: HelpCircle, color: 'from-green-500 to-blue-500', count: 34 }
]

const trendingSuggestions = [
  'React hooks best practices',
  'Next.js 15 features',
  'TypeScript generics',
  'Node.js performance',
  'CSS Grid layouts',
  'Docker containers'
]

export function QuickActionBar() {
  const [showCategories, setShowCategories] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [currentSuggestion, setCurrentSuggestion] = useState(0)
  const searchRef = useRef(null)

  useEffect(() => {
    const interval = setInterval(() => {
      if (!showSuggestions && !searchQuery) {
        setCurrentSuggestion((prev) => (prev + 1) % trendingSuggestions.length)
      }
    }, 3000)
    return () => clearInterval(interval)
  }, [showSuggestions, searchQuery])

  const handleSearchFocus = () => {
    setShowSuggestions(true)
  }

  const handleSearchBlur = () => {
    setTimeout(() => setShowSuggestions(false), 200)
  }

  const handleCategorySelect = (category) => {
    setSelectedCategory(category)
    setShowCategories(false)
  }

  const FilterButton = ({ filter, index }) => {
    const Icon = filter.icon
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          variant="outline"
          size="sm"
          className={`relative overflow-hidden bg-gradient-to-r ${filter.color} text-white border-0 hover:shadow-lg transition-all duration-300 group`}
        >
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
          <div className="relative z-10 flex items-center gap-2">
            <Icon className="h-3 w-3" />
            <span className="text-xs font-medium">{filter.label}</span>
            <Badge variant="secondary" className="bg-white/20 text-white text-xs px-1.5 py-0">
              {filter.count}
            </Badge>
          </div>
        </Button>
      </motion.div>
    )
  }

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Card className="glass-subtle border border-border/50 shadow-lg overflow-hidden">
          <CardContent className="p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              
              {/* Ask Question Button with Category Selector */}
              <div className="lg:col-span-3 space-y-4">
                <div className="relative">
                  <Button
                    onClick={() => setShowCategories(!showCategories)}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
                    size="lg"
                  >
                    <motion.div
                      animate={{ rotate: showCategories ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Plus className="h-4 w-4 mr-2" />
                    </motion.div>
                    Ask Question
                    <motion.div
                      animate={{ rotate: showCategories ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="ml-2"
                    >
                      <Filter className="h-4 w-4" />
                    </motion.div>
                  </Button>

                  {/* Category Dropdown */}
                  <AnimatePresence>
                    {showCategories && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 right-0 mt-2 bg-card/95 backdrop-blur-xl border border-border/50 rounded-lg shadow-xl z-20 overflow-hidden"
                      >
                        <div className="p-2 space-y-1">
                          {categories.map((category, index) => {
                            const Icon = category.icon
                            return (
                              <motion.button
                                key={category.id}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.2, delay: index * 0.05 }}
                                onClick={() => handleCategorySelect(category)}
                                className="w-full flex items-center gap-3 p-2 rounded-md hover:bg-muted/60 transition-colors text-left group"
                              >
                                <div className={`p-1.5 rounded-md ${category.color} text-white group-hover:scale-110 transition-transform duration-200`}>
                                  <Icon className="h-3 w-3" />
                                </div>
                                <span className="text-sm font-medium group-hover:text-primary transition-colors">
                                  {category.label}
                                </span>
                              </motion.button>
                            )
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Selected Category Display */}
                <AnimatePresence>
                  {selectedCategory && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="flex items-center gap-2 p-2 bg-primary/10 rounded-lg border border-primary/20"
                    >
                      <div className={`p-1 rounded ${selectedCategory.color} text-white`}>
                        <selectedCategory.icon className="h-3 w-3" />
                      </div>
                      <span className="text-xs font-medium text-primary">
                        {selectedCategory.label} selected
                      </span>
                      <button
                        onClick={() => setSelectedCategory(null)}
                        className="ml-auto text-muted-foreground hover:text-foreground"
                      >
                        ×
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Advanced Search Bar */}
              <div className="lg:col-span-6 relative">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4 z-10" />
                  <input
                    ref={searchRef}
                    type="text"
                    placeholder={searchQuery ? '' : `Try: "${trendingSuggestions[currentSuggestion]}"`}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={handleSearchFocus}
                    onBlur={handleSearchBlur}
                    className="w-full pl-10 pr-4 py-3 bg-background/80 border border-border/50 rounded-lg text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all duration-200 text-sm"
                  />
                  
                  {/* Trending indicator */}
                  {!searchQuery && (
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
                      <TrendingUp className="h-3 w-3 text-primary" />
                      <span className="text-xs text-primary font-medium">Trending</span>
                    </div>
                  )}
                </div>

                {/* Search Suggestions */}
                <AnimatePresence>
                  {showSuggestions && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 right-0 mt-2 bg-card/95 backdrop-blur-xl border border-border/50 rounded-lg shadow-xl z-20 overflow-hidden"
                    >
                      <div className="p-2">
                        <div className="flex items-center gap-2 px-2 py-1 text-xs text-muted-foreground mb-2">
                          <TrendingUp className="h-3 w-3" />
                          Trending Searches
                        </div>
                        {trendingSuggestions.map((suggestion, index) => (
                          <motion.button
                            key={suggestion}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2, delay: index * 0.03 }}
                            onClick={() => {
                              setSearchQuery(suggestion)
                              setShowSuggestions(false)
                            }}
                            className="w-full text-left px-2 py-1.5 text-sm hover:bg-muted/60 rounded transition-colors"
                          >
                            {suggestion}
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Quick Filters */}
              <div className="lg:col-span-3 flex flex-wrap gap-2 lg:justify-end">
                {quickFilters.map((filter, index) => (
                  <FilterButton key={filter.id} filter={filter} index={index} />
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}
