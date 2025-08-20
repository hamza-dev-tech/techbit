'use client'

import { useSearch } from '@/hooks/useSearch'
import { QuestionList } from '@/modules/blog/QuestionList'
import { TagFilter } from '@/modules/search/TagFilter'

export default function QuestionsPage() {
  const {
    searchQuery,
    setSearchQuery,
    selectedTags,
    addTag,
    removeTag,
    clearFilters,
    filteredQuestions,
    hasFilters
  } = useSearch()

  return (
    <div className="container py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar with filters */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 space-y-6">
            <TagFilter
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              selectedTags={selectedTags}
              onTagAdd={addTag}
              onTagRemove={removeTag}
              onClearFilters={clearFilters}
              hasFilters={hasFilters}
            />
          </div>
        </div>

        {/* Main content */}
        <div className="lg:col-span-3">
          <QuestionList 
            questions={filteredQuestions}
            title={hasFilters ? "Filtered Questions" : "All Questions"}
          />
        </div>
      </div>
    </div>
  )
}
