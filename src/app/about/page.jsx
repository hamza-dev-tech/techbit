'use client'

import { motion } from 'framer-motion'
import { BookOpen, Users, Target, Zap } from 'lucide-react'
import { Contributors } from '@/modules/author/Contributors'

const stats = [
  { label: 'Questions Answered', value: '50+', icon: BookOpen },
  { label: 'Expert Contributors', value: '10+', icon: Users },
  { label: 'Technologies Covered', value: '15+', icon: Target },
  { label: 'Developers Helped', value: '1000+', icon: Zap },
]

const values = [
  {
    title: 'Clear Explanations',
    description: 'We believe complex concepts should be explained in simple, understandable terms with practical examples.'
  },
  {
    title: 'Quality Over Quantity',
    description: 'Every article is thoroughly researched, tested, and reviewed to ensure accuracy and usefulness.'
  },
  {
    title: 'Community Driven',
    description: 'Our content comes from real questions asked by developers facing real challenges in their projects.'
  },
  {
    title: 'Always Current',
    description: 'We keep our content up-to-date with the latest technologies, best practices, and industry standards.'
  }
]

export default function AboutPage() {
  return (
    <div className="container py-16 space-y-20">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          About <span className="text-blue-600">TechBit</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
          We turn unanswered programming questions into comprehensive, easy-to-understand solutions.
          Our mission is to bridge the gap between complex problems and clear answers.
        </p>
      </motion.section>

      {/* Stats */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            )
          })}
        </div>
      </motion.section>

      {/* Story */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="max-w-4xl mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                TechBit was born from a simple observation: there are countless unanswered programming 
                questions scattered across forums, Stack Overflow, and GitHub issues. Developers spend 
                hours searching for solutions to problems that could be explained clearly in minutes.
              </p>
              <p>
                We decided to change that. Our team of experienced developers takes these challenging 
                questions and transforms them into comprehensive, well-structured answers that not only 
                solve the immediate problem but also explain the underlying concepts.
              </p>
              <p>
                Every article we publish goes through rigorous review to ensure accuracy, clarity, 
                and practical value. We believe that good documentation and clear explanations are 
                the foundation of a thriving developer community.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-2xl flex items-center justify-center">
              <div className="text-6xl">💡</div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-blue-600 rounded-full opacity-20"></div>
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-purple-600 rounded-full opacity-20"></div>
          </div>
        </div>
      </motion.section>

      {/* Values */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
          <p className="text-xl text-muted-foreground">
            The principles that guide everything we do
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl border bg-card"
            >
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contributors */}
      <Contributors title="Meet Our Team" limit={4} />
    </div>
  )
}
