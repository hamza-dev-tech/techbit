'use client'

import { useState, useMemo } from 'react'
import { SAMPLE_QUESTIONS } from '@/lib/constants'

export function useSearch() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTags, setSelectedTags] = useState([])

  // Filter questions based on search query and selected tags
  const filteredQuestions = useMemo(() => {
    let filtered = SAMPLE_QUESTIONS

    // Filter by search query (title and excerpt)
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        question =>
          question.title.toLowerCase().includes(query) ||
          question.excerpt.toLowerCase().includes(query) ||
          question.content.toLowerCase().includes(query)
      )
    }

    // Filter by selected tags
    if (selectedTags.length > 0) {
      filtered = filtered.filter(question =>
        selectedTags.some(tag => question.tags.includes(tag))
      )
    }

    return filtered
  }, [searchQuery, selectedTags])

  const addTag = (tag) => {
    if (!selectedTags.includes(tag)) {
      setSelectedTags(prev => [...prev, tag])
    }
  }

  const removeTag = (tag) => {
    setSelectedTags(prev => prev.filter(t => t !== tag))
  }

  const clearFilters = () => {
    setSearchQuery('')
    setSelectedTags([])
  }

  return {
    searchQuery,
    setSearchQuery,
    selectedTags,
    setSelectedTags,
    filteredQuestions,
    addTag,
    removeTag,
    clearFilters,
    hasFilters: searchQuery || selectedTags.length > 0
  }
}
