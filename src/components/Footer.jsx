'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Mail, 
  Heart, 
  ArrowUp, 
  BookOpen, 
  Code, 
  Users, 
  MessageSquare, 
  Star, 
  Award, 
  Globe, 
  Shield, 
  HelpCircle,
  FileText,
  Zap,
  ChevronRight,
  Send,
  MapPin,
  Phone
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { SITE_CONFIG, ROUTES } from '@/lib/constants'

const footerNavigation = {
  platform: [
    { name: 'Questions', href: ROUTES.QUESTIONS, icon: MessageSquare },
    { name: 'Tags', href: ROUTES.TAGS, icon: Code },
    { name: 'Contributors', href: '/contributors', icon: Users },
    { name: 'Leaderboard', href: '/leaderboard', icon: Award }
  ],
  company: [
    { name: 'About Us', href: ROUTES.ABOUT, icon: BookOpen },
    { name: 'Contact', href: ROUTES.CONTACT, icon: Mail },
    { name: 'Careers', href: '/careers', icon: Users },
    { name: 'Blog', href: '/blog', icon: FileText }
  ],
  resources: [
    { name: 'Help Center', href: '/help', icon: HelpCircle },
    { name: 'API Docs', href: '/api', icon: Code },
    { name: 'Guidelines', href: '/guidelines', icon: Shield },
    { name: 'Tutorials', href: '/tutorials', icon: Zap }
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy', icon: Shield },
    { name: 'Terms of Service', href: '/terms', icon: FileText },
    { name: 'Cookie Policy', href: '/cookies', icon: Globe },
    { name: 'GDPR', href: '/gdpr', icon: Shield }
  ],
  social: [
    { name: 'GitHub', href: SITE_CONFIG.links.github, icon: Github, color: 'hover:text-gray-900 dark:hover:text-white' },
    { name: 'Twitter', href: SITE_CONFIG.links.twitter, icon: Twitter, color: 'hover:text-blue-500' },
    { name: 'LinkedIn', href: SITE_CONFIG.links.linkedin, icon: Linkedin, color: 'hover:text-blue-700' }
  ]
}

const stats = [
  { label: 'Questions Asked', value: '2.5M+', icon: MessageSquare },
  { label: 'Active Users', value: '150K+', icon: Users },
  { label: 'Answers Given', value: '8.2M+', icon: Award },
  { label: 'Technologies', value: '500+', icon: Code }
]

export function Footer() {
  const [email, setEmail] = useState('')
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [subscribed, setSubscribed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  return (
    <>
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}

      <footer className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950 border-t border-gray-200/50 dark:border-gray-800/50">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/50 dark:to-gray-900/50" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          
          {/* Stats Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center p-6 rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="inline-flex items-center justify-center p-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white mb-3 group-hover:scale-110 transition-transform duration-200">
                      <Icon className="h-6 w-6" />
                    </div>
                    <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {stat.value}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Main Footer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
            
            {/* Brand Section */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <Link href={ROUTES.HOME} className="flex items-center space-x-3 group mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                  <div className="relative p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  {SITE_CONFIG.name}
                </span>
              </Link>
              
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed max-w-sm">
                {SITE_CONFIG.description}. Join our community of passionate developers helping each other solve complex problems and build amazing things.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>hello@techbit.dev</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>
              
              {/* Newsletter Signup */}
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-4 border border-gray-200/50 dark:border-gray-700/50">
                <h4 className="font-semibold text-sm mb-3 flex items-center gap-2">
                  <Zap className="h-4 w-4 text-blue-500" />
                  Stay Updated
                </h4>
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-background/50 border-0 focus:ring-2 focus:ring-blue-500/20"
                    required
                  />
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-200"
                    disabled={subscribed}
                  >
                    {subscribed ? (
                      <>
                        <Star className="h-4 w-4 mr-2" />
                        Subscribed!
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Subscribe
                      </>
                    )}
                  </Button>
                </form>
                {subscribed && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mt-2 text-xs text-green-600 font-medium"
                  >
                    ✨ Welcome to our community!
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Platform Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-sm font-semibold mb-6 flex items-center gap-2">
                <Code className="h-4 w-4 text-blue-500" />
                Platform
              </h3>
              <ul className="space-y-4">
                {footerNavigation.platform.map((item) => {
                  const Icon = item.icon
                  return (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-all duration-200 group"
                      >
                        <Icon className="h-4 w-4 group-hover:text-blue-500 transition-colors" />
                        <span>{item.name}</span>
                        <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:translate-x-1" />
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </motion.div>

            {/* Company Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-sm font-semibold mb-6 flex items-center gap-2">
                <Users className="h-4 w-4 text-purple-500" />
                Company
              </h3>
              <ul className="space-y-4">
                {footerNavigation.company.map((item) => {
                  const Icon = item.icon
                  return (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-all duration-200 group"
                      >
                        <Icon className="h-4 w-4 group-hover:text-purple-500 transition-colors" />
                        <span>{item.name}</span>
                        <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:translate-x-1" />
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </motion.div>

            {/* Resources Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h3 className="text-sm font-semibold mb-6 flex items-center gap-2">
                <HelpCircle className="h-4 w-4 text-green-500" />
                Resources
              </h3>
              <ul className="space-y-4">
                {footerNavigation.resources.map((item) => {
                  const Icon = item.icon
                  return (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-all duration-200 group"
                      >
                        <Icon className="h-4 w-4 group-hover:text-green-500 transition-colors" />
                        <span>{item.name}</span>
                        <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:translate-x-1" />
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </motion.div>

            {/* Legal & Social */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-sm font-semibold mb-6 flex items-center gap-2">
                <Shield className="h-4 w-4 text-orange-500" />
                Legal
              </h3>
              <ul className="space-y-4 mb-8">
                {footerNavigation.legal.map((item) => {
                  const Icon = item.icon
                  return (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-all duration-200 group"
                      >
                        <Icon className="h-4 w-4 group-hover:text-orange-500 transition-colors" />
                        <span>{item.name}</span>
                        <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:translate-x-1" />
                      </Link>
                    </li>
                  )
                })}
              </ul>

              {/* Social Links */}
              <div>
                <h4 className="text-sm font-semibold mb-4">Follow Us</h4>
                <div className="flex gap-3">
                  {footerNavigation.social.map((item) => {
                    const Icon = item.icon
                    return (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className={`p-3 rounded-xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 text-muted-foreground ${item.color} transition-all duration-200 shadow-lg hover:shadow-xl`}
                      >
                        <span className="sr-only">{item.name}</span>
                        <Icon className="h-5 w-5" />
                      </motion.a>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 pt-8 border-t border-gray-200/50 dark:border-gray-800/50"
          >
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
              <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <span>© {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</span>
                </div>
                <div className="hidden sm:block h-4 w-px bg-gray-300 dark:bg-gray-600" />
                <div className="flex items-center gap-2">
                  <span>Made with</span>
                  <Heart className="h-4 w-4 text-red-500 fill-current animate-pulse" />
                  <span>by developers, for developers</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-800">
                  <div className="h-2 w-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                  All systems operational
                </Badge>
                <div className="text-xs text-muted-foreground">
                  Version 2.1.0
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </footer>
    </>
  )
}
