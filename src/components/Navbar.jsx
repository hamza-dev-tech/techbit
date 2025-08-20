'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Menu, 
  X, 
  Search, 
  User, 
  Settings, 
  LogOut, 
  HelpCircle, 
  Bell, 
  BookOpen,
  Trophy,
  Heart,
  MessageSquare,
  ChevronDown,
  Plus,
  Zap,
  Shield,
  Moon,
  Sun,
  Monitor,
  Edit3,
  BarChart3,
  CreditCard,
  Users,
  Hash
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger
} from '@/components/ui/dropdown-menu'
import { ThemeToggle } from '@/components/ThemeToggle'
import { LanguageToggle } from '@/components/LanguageToggle'
import { ROUTES, SITE_CONFIG } from '@/lib/constants'

const navigation = [
  { name: 'Home', href: ROUTES.HOME, icon: BookOpen },
  { name: 'Questions', href: ROUTES.QUESTIONS, icon: MessageSquare },
  { name: 'Tags', href: ROUTES.TAGS, icon: Hash },
  { name: 'Contributors', href: '/contributors', icon: Users },
  { name: 'About', href: ROUTES.ABOUT, icon: HelpCircle }
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [searchFocused, setSearchFocused] = useState(false)
  const [notifications] = useState(3) // Mock notification count
  const [activeTab, setActiveTab] = useState('Home') // Track active tab
  const searchRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Enhanced Profile Dropdown
  const ProfileDropdown = () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-200 p-1"
        >
          <Avatar className="h-9 w-9 ring-2 ring-blue-500/20 hover:ring-blue-500/40 transition-all duration-200">
            <AvatarImage src="/avatars/user.jpg" alt="John Doe" />
            <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white font-semibold">
              JD
            </AvatarFallback>
          </Avatar>
        </motion.button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80 p-2 border-0 shadow-2xl" align="end" sideOffset={8}>
        {/* Profile Header */}
        <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 mb-2">
          <Avatar className="h-12 w-12 ring-2 ring-blue-500/30">
            <AvatarImage src="/avatars/user.jpg" alt="John Doe" />
            <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white">
              JD
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <p className="font-semibold text-sm">John Doe</p>
            <p className="text-xs text-muted-foreground mb-1">john.doe@example.com</p>
            <div className="flex items-center gap-2 text-xs">
              <Badge variant="secondary" className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                <Trophy className="h-3 w-3 mr-1" />
                Level 5
              </Badge>
              <span className="text-muted-foreground">2,345 points</span>
            </div>
          </div>
        </div>

        <DropdownMenuSeparator />

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-2 p-2 mb-2">
          <div className="text-center p-2 rounded-lg bg-green-50 dark:bg-green-950/20">
            <p className="text-lg font-bold text-green-600">24</p>
            <p className="text-xs text-muted-foreground">Questions</p>
          </div>
          <div className="text-center p-2 rounded-lg bg-blue-50 dark:bg-blue-950/20">
            <p className="text-lg font-bold text-blue-600">156</p>
            <p className="text-xs text-muted-foreground">Answers</p>
          </div>
          <div className="text-center p-2 rounded-lg bg-orange-50 dark:bg-orange-950/20">
            <p className="text-lg font-bold text-orange-600">89</p>
            <p className="text-xs text-muted-foreground">Helpful</p>
          </div>
        </div>

        <DropdownMenuSeparator />

        {/* Main Menu Items */}
        <DropdownMenuItem className="cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-950/30 rounded-lg transition-all duration-200">
          <User className="h-4 w-4 mr-3" />
          <span>My Profile</span>
        </DropdownMenuItem>

        <DropdownMenuItem className="cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-950/30 rounded-lg transition-all duration-200">
          <Edit3 className="h-4 w-4 mr-3" />
          <span>My Questions</span>
        </DropdownMenuItem>

        <DropdownMenuItem className="cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-950/30 rounded-lg transition-all duration-200">
          <MessageSquare className="h-4 w-4 mr-3" />
          <span>My Answers</span>
        </DropdownMenuItem>

        <DropdownMenuItem className="cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-950/30 rounded-lg transition-all duration-200">
          <Heart className="h-4 w-4 mr-3" />
          <span>Saved Posts</span>
        </DropdownMenuItem>

        <DropdownMenuItem className="cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-950/30 rounded-lg transition-all duration-200">
          <BarChart3 className="h-4 w-4 mr-3" />
          <span>Statistics</span>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        {/* Settings Submenu */}
        <DropdownMenuSub>
          <DropdownMenuSubTrigger className="cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-950/30 rounded-lg transition-all duration-200">
            <Settings className="h-4 w-4 mr-3" />
            <span>Settings</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent className="w-48 border-0 shadow-xl">
            <DropdownMenuItem className="cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-950/30 rounded-lg transition-all duration-200">
              <User className="h-4 w-4 mr-3" />
              <span>Account Settings</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-950/30 rounded-lg transition-all duration-200">
              <Bell className="h-4 w-4 mr-3" />
              <span>Notifications</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-950/30 rounded-lg transition-all duration-200">
              <Shield className="h-4 w-4 mr-3" />
              <span>Privacy</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-950/30 rounded-lg transition-all duration-200">
              <CreditCard className="h-4 w-4 mr-3" />
              <span>Billing</span>
            </DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>

        {/* Theme Submenu */}
        <DropdownMenuSub>
          <DropdownMenuSubTrigger className="cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-950/30 rounded-lg transition-all duration-200">
            <Monitor className="h-4 w-4 mr-3" />
            <span>Appearance</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent className="w-48 border-0 shadow-xl">
            <DropdownMenuItem className="cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-950/30 rounded-lg transition-all duration-200">
              <Sun className="h-4 w-4 mr-3" />
              <span>Light Mode</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-950/30 rounded-lg transition-all duration-200">
              <Moon className="h-4 w-4 mr-3" />
              <span>Dark Mode</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-950/30 rounded-lg transition-all duration-200">
              <Monitor className="h-4 w-4 mr-3" />
              <span>System</span>
            </DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>

        <DropdownMenuItem className="cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-950/30 rounded-lg transition-all duration-200">
          <HelpCircle className="h-4 w-4 mr-3" />
          <span>Help & Support</span>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem className="cursor-pointer text-red-600 focus:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30 focus:bg-red-50 dark:focus:bg-red-950/30 rounded-lg transition-all duration-200">
          <LogOut className="h-4 w-4 mr-3" />
          <span>Sign Out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        scrolled 
          ? 'bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/70 shadow-lg shadow-black/5 border-b border-border/50' 
          : 'bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 lg:h-18 items-center justify-between">
          
          {/* Logo */}
          <Link href={ROUTES.HOME} className="flex items-center group">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              <div className="relative p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center ml-8 space-x-1">
            {navigation.map((item, index) => {
              const Icon = item.icon
              const isActive = activeTab === item.name
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setActiveTab(item.name)}
                    className={`relative flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all duration-300 rounded-xl group ${
                      isActive 
                        ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-500/25' 
                        : 'text-muted-foreground hover:text-foreground hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10'
                    }`}
                  >
                    <motion.div
                      animate={{ 
                        scale: isActive ? 1.1 : 1,
                        rotate: isActive ? 5 : 0 
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <Icon className={`h-4 w-4 ${isActive ? 'text-white' : ''}`} />
                    </motion.div>
                    <span className="relative z-10">{item.name}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl -z-10"
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      />
                    )}
                    {!isActive && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 -z-10"
                        whileHover={{ scale: 1.02 }}
                      />
                    )}
                  </Link>
                </motion.div>
              )
            })}
          </div>

          {/* Enhanced Search */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hidden md:flex ml-auto mr-6"
          >
            <div className="relative group">
              <div className={`absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur transition-opacity duration-300 ${searchFocused ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></div>
              <div className="relative flex items-center">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4 z-10" />
                <Input
                  ref={searchRef}
                  type="search"
                  placeholder="Search questions, tags, users..."
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                  className="pl-12 pr-4 w-80 lg:w-96 bg-muted/50 border-0 focus:bg-background/80 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 backdrop-blur-sm rounded-xl h-10"
                />
                <motion.div 
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  whileHover={{ scale: 1.1 }}
                >
                  <Zap className="h-4 w-4 text-blue-500" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Desktop Actions */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="hidden md:flex items-center space-x-3"
          >
            
            {/* Notifications */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="ghost" size="sm" className="relative w-10 h-10 rounded-xl group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                <Bell className="h-4 w-4 relative z-10" />
                {notifications > 0 && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 h-5 w-5 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center"
                  >
                    <span className="text-xs font-bold text-white">{notifications}</span>
                  </motion.div>
                )}
              </Button>
            </motion.div>

            {/* Theme Toggle */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ThemeToggle />
            </motion.div>
            
            {/* Language Toggle */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <LanguageToggle />
            </motion.div>
            
            {/* Profile Dropdown */}
            <ProfileDropdown />
          </motion.div>

          {/* Mobile Actions */}
          <div className="md:hidden ml-auto flex items-center space-x-2">
            {/* Mobile Notifications */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="ghost" size="sm" className="relative w-9 h-9 rounded-lg">
                <Bell className="h-4 w-4" />
                {notifications > 0 && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full flex items-center justify-center"
                  >
                    <span className="text-xs font-bold text-white">{notifications}</span>
                  </motion.div>
                )}
              </Button>
            </motion.div>

            {/* Mobile Theme Toggle */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ThemeToggle />
            </motion.div>
            
            {/* Mobile Language Toggle */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <LanguageToggle />
            </motion.div>
            
            {/* Mobile Menu Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="w-9 h-9 rounded-lg relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                <div className="relative z-10">
                  <AnimatePresence mode="wait">
                    {isOpen ? (
                      <motion.div
                        key="close"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <X className="h-4 w-4" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Menu className="h-4 w-4" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <span className="sr-only">Toggle menu</span>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden border-t bg-background/95 backdrop-blur-xl"
          >
            <div className="container py-6 space-y-4">
              
              {/* Mobile Search */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="relative"
              >
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4 z-10" />
                <Input
                  type="search"
                  placeholder="Search questions, tags, users..."
                  className="pl-12 pr-4 bg-muted/50 rounded-xl h-12 border-0 focus:ring-2 focus:ring-blue-500/20"
                />
                <Zap className="absolute right-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-blue-500" />
              </motion.div>

              <Separator />

              {/* Mobile Navigation */}
              <div className="space-y-2">
                {navigation.map((item, index) => {
                  const Icon = item.icon
                  const isActive = activeTab === item.name
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => {
                          setActiveTab(item.name)
                          setIsOpen(false)
                        }}
                        className={`flex items-center gap-3 text-sm font-medium transition-all duration-200 py-3 px-4 rounded-xl ${
                          isActive 
                            ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg' 
                            : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                        {item.name}
                        {isActive && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="ml-auto h-2 w-2 bg-white rounded-full"
                          />
                        )}
                      </Link>
                    </motion.div>
                  )
                })}
              </div>
              
              <Separator />
              
              {/* Mobile Profile Section */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-2xl p-4"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Avatar className="h-12 w-12 ring-2 ring-blue-500/30">
                    <AvatarImage src="/avatars/user.jpg" alt="John Doe" />
                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white">
                      JD
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">John Doe</p>
                    <p className="text-sm text-muted-foreground">john.doe@example.com</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="secondary" className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 text-xs">
                        <Trophy className="h-3 w-3 mr-1" />
                        Level 5
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Mobile Quick Stats */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="text-center p-3 rounded-xl bg-white/50 dark:bg-gray-800/50">
                    <p className="text-lg font-bold text-green-600">24</p>
                    <p className="text-xs text-muted-foreground">Questions</p>
                  </div>
                  <div className="text-center p-3 rounded-xl bg-white/50 dark:bg-gray-800/50">
                    <p className="text-lg font-bold text-blue-600">156</p>
                    <p className="text-xs text-muted-foreground">Answers</p>
                  </div>
                  <div className="text-center p-3 rounded-xl bg-white/50 dark:bg-gray-800/50">
                    <p className="text-lg font-bold text-orange-600">89</p>
                    <p className="text-xs text-muted-foreground">Helpful</p>
                  </div>
                </div>

                {/* Mobile Profile Actions */}
                <div className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start" onClick={() => setIsOpen(false)}>
                    <User className="h-4 w-4 mr-3" />
                    My Profile
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" onClick={() => setIsOpen(false)}>
                    <Settings className="h-4 w-4 mr-3" />
                    Settings
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-red-600 hover:text-red-600" onClick={() => setIsOpen(false)}>
                    <LogOut className="h-4 w-4 mr-3" />
                    Sign Out
                  </Button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
