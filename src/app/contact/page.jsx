'use client'

import { motion } from 'framer-motion'
import { Mail, MessageSquare, Bell, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const contactMethods = [
  {
    icon: Mail,
    title: 'Email Us',
    description: 'Drop us a line for general inquiries or feedback',
    contact: 'hello@techbit.dev',
    action: 'Send Email'
  },
  {
    icon: MessageSquare,
    title: 'Suggest a Question',
    description: 'Have a question you\'d like us to answer? Let us know!',
    contact: 'questions@techbit.dev',
    action: 'Send Suggestion'
  },
  {
    icon: Bell,
    title: 'Newsletter',
    description: 'Get notified when we publish new answers',
    contact: 'Weekly updates',
    action: 'Subscribe'
  }
]

export default function ContactPage() {
  return (
    <div className="container py-16">
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 max-w-3xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Get in <span className="text-blue-600">Touch</span>
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Have a question, suggestion, or just want to say hello? We'd love to hear from you.
          Our team is always ready to help fellow developers.
        </p>
      </motion.section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold mb-6">How can we help?</h2>
          
          {contactMethods.map((method, index) => {
            const Icon = method.icon
            return (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2">{method.title}</h3>
                      <p className="text-muted-foreground text-sm mb-3">
                        {method.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">{method.contact}</span>
                        <Button size="sm" variant="outline">
                          {method.action}
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Card className="h-fit">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-blue-600" />
                Stay Updated
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Subscribe to our newsletter and never miss a new answer. We'll send you a weekly 
                digest of our latest content, plus exclusive tips and insights.
              </p>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name (optional)
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                  />
                </div>

                <Button className="w-full">
                  <Send className="h-4 w-4 mr-2" />
                  Subscribe to Newsletter
                </Button>
                
                <p className="text-xs text-muted-foreground">
                  We respect your privacy. No spam, just quality content. 
                  You can unsubscribe at any time.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* FAQ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8"
          >
            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-1">How do you choose questions to answer?</h4>
                  <p className="text-sm text-muted-foreground">
                    We focus on questions that are commonly asked but lack comprehensive answers, 
                    especially those involving complex concepts or newer technologies.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-1">Can I suggest a topic?</h4>
                  <p className="text-sm text-muted-foreground">
                    Absolutely! Send us your suggestions at questions@techbit.dev. 
                    We love hearing what the community wants to learn about.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium mb-1">How often do you publish new content?</h4>
                  <p className="text-sm text-muted-foreground">
                    We aim to publish 2-3 comprehensive answers per week, plus shorter tips 
                    and updates as needed.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
