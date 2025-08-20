'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Search, MessageSquare, Users, Zap, Shield, Award } from 'lucide-react'

const features = [
  {
    id: 1,
    title: 'Find Unanswered Questions',
    description: 'Discover complex programming questions that need expert answers from the community.',
    icon: Search,
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    id: 2,
    title: 'Get Clear, Concise Answers',
    description: 'Receive detailed explanations with code examples, best practices, and real-world solutions.',
    icon: MessageSquare,
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    id: 3,
    title: 'Community Powered Knowledge',
    description: 'Learn from experienced developers and contribute your expertise to help others grow.',
    icon: Users,
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    id: 4,
    title: 'Lightning Fast Search',
    description: 'Advanced search filters help you find exactly what you\'re looking for in seconds.',
    icon: Zap,
    gradient: 'from-yellow-500 to-orange-500'
  },
  {
    id: 5,
    title: 'Quality Assured Content',
    description: 'All answers are reviewed and validated by our community of expert developers.',
    icon: Shield,
    gradient: 'from-red-500 to-rose-500'
  },
  {
    id: 6,
    title: 'Recognition System',
    description: 'Build your reputation and earn badges as you contribute valuable knowledge.',
    icon: Award,
    gradient: 'from-indigo-500 to-purple-500'
  }
]

export function Features() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">TechBit</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of developers who trust TechBit for reliable answers to their most challenging questions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Card className="h-full bg-card/50 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-lg group-hover:text-foreground/90 transition-colors">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
