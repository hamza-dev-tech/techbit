'use client'

import { motion } from 'framer-motion'
import { Search, BookOpen, Code, Users, Zap, Target } from 'lucide-react'

const features = [
  {
    icon: Search,
    title: 'Smart Search',
    description: 'Find exactly what you\'re looking for with our intelligent search that understands context and intent.'
  },
  {
    icon: BookOpen,
    title: 'Detailed Explanations',
    description: 'Every answer includes comprehensive explanations with code examples and best practices.'
  },
  {
    icon: Code,
    title: 'Code Examples',
    description: 'Real, working code samples that you can copy, modify, and use in your projects immediately.'
  },
  {
    icon: Users,
    title: 'Expert Authors',
    description: 'Content created by experienced developers who understand the challenges you face.'
  },
  {
    icon: Zap,
    title: 'Always Updated',
    description: 'Content stays current with the latest technologies, frameworks, and best practices.'
  },
  {
    icon: Target,
    title: 'Problem Focused',
    description: 'Each article addresses a specific problem with clear, actionable solutions.'
  }
]

export function Features() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="text-blue-600">TechBit</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We turn complex programming problems into clear, understandable solutions
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="h-full p-8 rounded-2xl border bg-card hover:shadow-lg transition-all duration-300 group-hover:border-blue-200 dark:group-hover:border-blue-800">
                  <div className="flex items-center mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
