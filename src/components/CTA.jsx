'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowRight, Sparkles, Users, MessageSquare } from 'lucide-react'

export function CTA() {
  return (
    <section className="py-20 overflow-hidden relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700" />
      <div className="absolute inset-0 bg-grid-white/[0.05]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute top-32 right-20 w-16 h-16 bg-purple-300/20 rounded-full blur-lg animate-pulse delay-1000" />
      <div className="absolute bottom-20 left-32 w-12 h-12 bg-blue-300/20 rounded-full blur-md animate-pulse delay-500" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Sparkles className="h-4 w-4 text-yellow-300" />
              <span className="text-sm font-medium">Join 12,000+ Developers</span>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Ready to Level Up<br />
            <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
              Your Coding Skills?
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
            Join our community of passionate developers, ask questions, share knowledge, 
            and grow together. Get expert answers to your most challenging problems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-white text-purple-700 hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all duration-200 group text-lg px-8 py-3"
            >
              <Users className="mr-2 h-5 w-5" />
              Join Community
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button 
              size="lg"
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm text-lg px-8 py-3"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Ask Your First Question
            </Button>
          </div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-md mx-auto"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold mb-3">Stay Updated</h3>
              <p className="text-white/80 text-sm mb-4">
                Get weekly digests of the best questions and answers
              </p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:bg-white/30"
                />
                <Button className="bg-white text-purple-700 hover:bg-white/90 shrink-0">
                  Subscribe
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { number: '2,847', label: 'Questions Answered' },
              { number: '892', label: 'Active Experts' },
              { number: '47', label: 'Tech Topics' },
              { number: '98%', label: 'User Satisfaction' }
            ].map((stat, index) => (
              <div key={stat.label}>
                <div className="text-2xl md:text-3xl font-bold text-yellow-300">
                  {stat.number}
                </div>
                <div className="text-sm text-white/70 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
