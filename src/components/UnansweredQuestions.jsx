'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Search, ExternalLink, Clock, Eye, MessageSquare, Github, HelpCircle, Code, Filter, ArrowRight } from 'lucide-react'
import Link from 'next/link'

// Mock data for different platforms
const platformData = {
  stackoverflow: [
    {
      id: 1,
      title: 'How to handle async/await with error boundaries in React 18?',
      platform: 'Stack Overflow',
      tags: ['react', 'async-await', 'error-handling'],
      views: 1234,
      bounty: 50,
      author: 'dev_sarah',
      timeAgo: '2 hours ago',
      url: 'https://stackoverflow.com/questions/example',
      difficulty: 'Intermediate'
    },
    {
      id: 2,
      title: 'Best practices for optimizing large PostgreSQL queries?',
      platform: 'Stack Overflow',
      tags: ['postgresql', 'performance', 'sql'],
      views: 892,
      bounty: 25,
      author: 'db_expert',
      timeAgo: '4 hours ago',
      url: 'https://stackoverflow.com/questions/example2',
      difficulty: 'Advanced'
    },
    {
      id: 3,
      title: 'TypeScript generic constraints with conditional types',
      platform: 'Stack Overflow',
      tags: ['typescript', 'generics', 'types'],
      views: 567,
      bounty: 75,
      author: 'ts_ninja',
      timeAgo: '6 hours ago',
      url: 'https://stackoverflow.com/questions/example3',
      difficulty: 'Expert'
    },
    {
      id: 4,
      title: 'Implementing custom React hooks with TypeScript',
      platform: 'Stack Overflow',
      tags: ['react', 'typescript', 'hooks'],
      views: 423,
      bounty: 30,
      author: 'react_dev',
      timeAgo: '8 hours ago',
      url: 'https://stackoverflow.com/questions/example4',
      difficulty: 'Intermediate'
    },
    {
      id: 5,
      title: 'Node.js stream processing with backpressure handling',
      platform: 'Stack Overflow',
      tags: ['nodejs', 'streams', 'performance'],
      views: 321,
      bounty: 40,
      author: 'node_master',
      timeAgo: '10 hours ago',
      url: 'https://stackoverflow.com/questions/example5',
      difficulty: 'Advanced'
    },
    {
      id: 6,
      title: 'CSS Grid vs Flexbox for complex layouts in 2024',
      platform: 'Stack Overflow',
      tags: ['css', 'grid', 'flexbox'],
      views: 654,
      bounty: 0,
      author: 'css_wizard',
      timeAgo: '12 hours ago',
      url: 'https://stackoverflow.com/questions/example6',
      difficulty: 'Beginner'
    }
  ],
  github: [
    {
      id: 7,
      title: 'Memory leak in WebGL context when using Three.js',
      platform: 'GitHub Issues',
      tags: ['threejs', 'webgl', 'memory-leak'],
      views: 445,
      bounty: 0,
      author: 'graphics_dev',
      timeAgo: '1 hour ago',
      url: 'https://github.com/example/repo/issues/123',
      difficulty: 'Advanced',
      repository: 'three.js'
    },
    {
      id: 8,
      title: 'Docker container networking issues with custom bridge',
      platform: 'GitHub Issues',
      tags: ['docker', 'networking', 'devops'],
      views: 723,
      bounty: 0,
      author: 'docker_user',
      timeAgo: '3 hours ago',
      url: 'https://github.com/example/repo/issues/456',
      difficulty: 'Intermediate',
      repository: 'docker/cli'
    },
    {
      id: 9,
      title: 'Next.js 14 middleware not working with dynamic routes',
      platform: 'GitHub Issues',
      tags: ['nextjs', 'middleware', 'routing'],
      views: 334,
      bounty: 0,
      author: 'next_developer',
      timeAgo: '5 hours ago',
      url: 'https://github.com/vercel/next.js/issues/789',
      difficulty: 'Intermediate',
      repository: 'vercel/next.js'
    },
    {
      id: 10,
      title: 'Vue 3 Composition API performance optimization',
      platform: 'GitHub Issues',
      tags: ['vuejs', 'composition-api', 'performance'],
      views: 289,
      bounty: 0,
      author: 'vue_enthusiast',
      timeAgo: '7 hours ago',
      url: 'https://github.com/vuejs/core/issues/1234',
      difficulty: 'Advanced',
      repository: 'vuejs/core'
    },
    {
      id: 11,
      title: 'Webpack 5 module federation configuration issues',
      platform: 'GitHub Issues',
      tags: ['webpack', 'module-federation', 'config'],
      views: 178,
      bounty: 0,
      author: 'webpack_dev',
      timeAgo: '9 hours ago',
      url: 'https://github.com/webpack/webpack/issues/5678',
      difficulty: 'Expert',
      repository: 'webpack/webpack'
    },
    {
      id: 12,
      title: 'GitHub Actions workflow fails on matrix builds',
      platform: 'GitHub Issues',
      tags: ['github-actions', 'ci-cd', 'workflow'],
      views: 412,
      bounty: 0,
      author: 'ci_expert',
      timeAgo: '11 hours ago',
      url: 'https://github.com/actions/runner/issues/9876',
      difficulty: 'Intermediate',
      repository: 'actions/runner'
    }
  ],
  quora: [
    {
      id: 13,
      title: 'What are the key differences between microservices and monoliths?',
      platform: 'Quora',
      tags: ['architecture', 'microservices', 'design-patterns'],
      views: 2134,
      bounty: 0,
      author: 'architect_pro',
      timeAgo: '1 day ago',
      url: 'https://quora.com/example-question',
      difficulty: 'Beginner'
    },
    {
      id: 14,
      title: 'How to transition from junior to senior developer role?',
      platform: 'Quora',
      tags: ['career', 'software-development', 'growth'],
      views: 1567,
      bounty: 0,
      author: 'career_mentor',
      timeAgo: '2 days ago',
      url: 'https://quora.com/example-question2',
      difficulty: 'Beginner'
    },
    {
      id: 15,
      title: 'What are the best practices for API rate limiting?',
      platform: 'Quora',
      tags: ['api', 'rate-limiting', 'backend'],
      views: 891,
      bounty: 0,
      author: 'api_guru',
      timeAgo: '3 days ago',
      url: 'https://quora.com/example-question3',
      difficulty: 'Intermediate'
    },
    {
      id: 16,
      title: 'Should I learn React or Vue.js for frontend development in 2024?',
      platform: 'Quora',
      tags: ['react', 'vuejs', 'frontend', 'career'],
      views: 3245,
      bounty: 0,
      author: 'frontend_guide',
      timeAgo: '4 days ago',
      url: 'https://quora.com/example-question4',
      difficulty: 'Beginner'
    },
    {
      id: 17,
      title: 'What is the best way to learn system design for interviews?',
      platform: 'Quora',
      tags: ['system-design', 'interviews', 'career'],
      views: 4567,
      bounty: 0,
      author: 'interview_coach',
      timeAgo: '5 days ago',
      url: 'https://quora.com/example-question5',
      difficulty: 'Advanced'
    },
    {
      id: 18,
      title: 'How do I choose between SQL and NoSQL databases?',
      platform: 'Quora',
      tags: ['database', 'sql', 'nosql', 'architecture'],
      views: 2890,
      bounty: 0,
      author: 'db_architect',
      timeAgo: '6 days ago',
      url: 'https://quora.com/example-question6',
      difficulty: 'Intermediate'
    }
  ]
}

const platformIcons = {
  stackoverflow: Code,
  github: Github,
  quora: HelpCircle
}

const difficultyColors = {
  'Beginner': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
  'Intermediate': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
  'Advanced': 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300',
  'Expert': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
}

export function UnansweredQuestions() {
  const [activeTab, setActiveTab] = useState('stackoverflow')
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredQuestions, setFilteredQuestions] = useState(platformData[activeTab])

  const handleSearch = (query) => {
    setSearchQuery(query)
    const filtered = platformData[activeTab].filter(question =>
      question.title.toLowerCase().includes(query.toLowerCase()) ||
      question.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
    )
    setFilteredQuestions(filtered)
  }

  const handleTabChange = (tab) => {
    setActiveTab(tab)
    setSearchQuery('')
    setFilteredQuestions(platformData[tab])
  }

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 lg:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            Explore <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Unanswered</span> Questions
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover challenging questions from top developer communities. Help others while building your reputation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="glass-subtle border shadow-sm">
            <CardHeader className="pb-4 sm:pb-5 lg:pb-6 px-3 sm:px-4 lg:px-6 pt-3 sm:pt-4 lg:pt-6">
              <div className="flex flex-col gap-3 sm:gap-4">
                <CardTitle className="text-lg sm:text-xl font-semibold flex items-center gap-2 sm:gap-3">
                  <Filter className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  Browse by Platform
                </CardTitle>
                
                {/* Platform Tabs */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center justify-between">
                  <div className="flex bg-muted/80 p-1 rounded-xl border border-border/50">
                    {Object.keys(platformData).map((platform) => {
                      const Icon = platformIcons[platform]
                      const isActive = activeTab === platform
                      return (
                        <button
                          key={platform}
                          onClick={() => handleTabChange(platform)}
                          className={`
                            flex items-center gap-1.5 sm:gap-2 px-2 sm:px-4 py-2 sm:py-2.5 rounded-lg font-semibold transition-all duration-300 text-xs sm:text-sm flex-1 sm:flex-initial justify-center relative overflow-hidden min-w-0
                            ${isActive 
                              ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-[1.02] ring-2 ring-primary/30' 
                              : 'text-muted-foreground hover:text-foreground hover:bg-background/80 hover:shadow-sm'
                            }
                          `}
                        >
                          {/* Active indicator */}
                          {isActive && (
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary rounded-lg"></div>
                          )}
                          
                          <div className="relative z-10 flex items-center gap-1 sm:gap-2 min-w-0">
                            <Icon className={`h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0 ${isActive ? 'text-primary-foreground' : ''}`} />
                            <span className="hidden md:inline font-medium truncate">
                              {platform === 'stackoverflow' ? 'Stack Overflow' : platform === 'github' ? 'GitHub' : 'Quora'}
                            </span>
                            <span className="md:hidden font-medium">
                              {platform === 'stackoverflow' ? 'SO' : platform === 'github' ? 'GH' : 'Q'}
                            </span>
                            
                            {/* Active dot indicator */}
                            {isActive && (
                              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary-foreground rounded-full shadow-sm animate-pulse flex-shrink-0"></div>
                            )}
                          </div>
                        </button>
                      )
                    })}
                  </div>
                  
                  {/* Search Bar */}
                  <div className="relative w-full sm:w-72 lg:w-80">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-3 w-3 sm:h-4 sm:w-4" />
                    <input
                      type="text"
                      placeholder="Search questions or tags..."
                      value={searchQuery}
                      onChange={(e) => handleSearch(e.target.value)}
                      className="w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-2.5 text-sm bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                    />
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="px-3 sm:px-4 lg:px-6 pb-3 sm:pb-4 lg:pb-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-3 sm:space-y-4"
                >
                  {filteredQuestions.map((question, index) => {
                    const PlatformIcon = platformIcons[activeTab]
                    return (
                      <motion.div
                        key={question.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <Card className="hover:shadow-md transition-all duration-300 group border hover:border-primary/20 bg-background/50 hover:bg-background">
                          <CardContent className="p-3 sm:p-4 lg:p-6">
                            <div className="space-y-4">
                              {/* Header */}
                              <div className="flex flex-col sm:flex-row gap-4">
                                <div className="flex-1 min-w-0 space-y-3">
                                  <div className="flex items-start gap-3">
                                    <div className={`p-2 rounded-lg flex-shrink-0 ${
                                      activeTab === 'stackoverflow' ? 'bg-orange-100 dark:bg-orange-900/30' :
                                      activeTab === 'github' ? 'bg-gray-100 dark:bg-gray-800/50' :
                                      'bg-red-100 dark:bg-red-900/30'
                                    }`}>
                                      <PlatformIcon className={`h-4 w-4 ${
                                        activeTab === 'stackoverflow' ? 'text-orange-600 dark:text-orange-400' :
                                        activeTab === 'github' ? 'text-gray-700 dark:text-gray-300' :
                                        'text-red-600 dark:text-red-400'
                                      }`} />
                                    </div>
                                    
                                    <div className="flex-1 min-w-0">
                                      <Link
                                        href={question.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block group-hover:text-primary transition-colors"
                                      >
                                        <h3 className="font-semibold text-base sm:text-lg line-clamp-2 leading-tight mb-2">
                                          {question.title}
                                        </h3>
                                      </Link>
                                      
                                      {/* Meta Info */}
                                      <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-muted-foreground mb-3">
                                        <div className="flex items-center gap-1">
                                          <Avatar className="h-4 w-4">
                                            <AvatarFallback className="text-xs bg-muted">
                                              {question.author.charAt(0).toUpperCase()}
                                            </AvatarFallback>
                                          </Avatar>
                                          <span>{question.author}</span>
                                        </div>
                                        
                                        <span>•</span>
                                        <span>{question.timeAgo}</span>
                                        
                                        {question.repository && (
                                          <>
                                            <span>•</span>
                                            <span className="font-mono bg-muted/50 px-1.5 py-0.5 rounded text-xs">
                                              {question.repository}
                                            </span>
                                          </>
                                        )}
                                        
                                        <span>•</span>
                                        <div className="flex items-center gap-1">
                                          <Eye className="h-3 w-3" />
                                          <span>{(question.views / 1000).toFixed(1)}k views</span>
                                        </div>
                                      </div>

                                      {/* Tags */}
                                      <div className="flex flex-wrap gap-1.5">
                                        {question.tags.map((tag) => (
                                          <Badge key={tag} variant="secondary" className="text-xs px-2 py-1">
                                            {tag}
                                          </Badge>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                {/* Actions Column */}
                                <div className="flex sm:flex-col items-start sm:items-end gap-2 sm:gap-3 justify-between sm:justify-start">
                                  {question.bounty > 0 && (
                                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 text-xs font-semibold">
                                      +{question.bounty} bounty
                                    </Badge>
                                  )}
                                  
                                  <Badge className={`text-xs font-medium ${difficultyColors[question.difficulty]}`}>
                                    {question.difficulty}
                                  </Badge>
                                  
                                  <Link
                                    href={question.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <Button size="sm" variant="outline" className="group/btn text-xs px-3 py-1.5 h-auto">
                                      <span>Answer</span>
                                      <ExternalLink className="ml-1.5 h-3 w-3 transition-transform group-hover/btn:translate-x-0.5" />
                                    </Button>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    )
                  })}

                  {filteredQuestions.length === 0 && (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Search className="h-6 w-6 text-muted-foreground" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">No questions found</h3>
                      <p className="text-muted-foreground text-sm max-w-md mx-auto">
                        Try adjusting your search terms or explore different platforms to find questions you can help answer.
                      </p>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Footer CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center mt-8 pt-6 border-t border-border/50"
              >
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="group hover:shadow-md transition-all duration-300"
                >
                  <span>Explore More Questions</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                
                <p className="text-sm text-muted-foreground mt-3">
                  Join thousands of developers helping each other grow
                </p>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
