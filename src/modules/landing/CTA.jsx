'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, BookOpen, Bell } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ROUTES } from '@/lib/constants'

export function CTA() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
      
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-white max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Find Your Answers?
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Join thousands of developers who've found clear solutions to their toughest questions
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Link href={ROUTES.QUESTIONS}>
                <BookOpen className="mr-2 h-5 w-5" />
                Start Reading
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          
          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-md mx-auto"
          >
            <p className="text-blue-100 mb-4 text-sm">
              Get notified when we answer new questions
            </p>
            
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-blue-200 focus:bg-white/20"
              />
              <Button variant="secondary" size="default">
                <Bell className="h-4 w-4 mr-2" />
                Notify Me
              </Button>
            </div>
            
            <p className="text-xs text-blue-200 mt-2">
              No spam, just quality content. Unsubscribe anytime.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
