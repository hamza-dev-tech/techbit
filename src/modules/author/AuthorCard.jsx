'use client'

import { motion } from 'framer-motion'
import { MapPin, Calendar, Link as LinkIcon, Github, Twitter, Linkedin } from 'lucide-react'

export function AuthorCard({ author, showBio = true, showStats = true }) {
  const socialLinks = [
    { icon: Github, href: author.github, label: 'GitHub' },
    { icon: Twitter, href: author.twitter, label: 'Twitter' },
    { icon: Linkedin, href: author.linkedin, label: 'LinkedIn' }
  ].filter(link => link.href)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-card border rounded-2xl p-6 space-y-4"
    >
      {/* Author Info */}
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
          {author.name.charAt(0)}
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-bold mb-1">{author.name}</h3>
          <p className="text-sm text-blue-600 font-medium mb-2">{author.role}</p>
          
          {author.location && (
            <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
              <MapPin className="h-3 w-3" />
              <span>{author.location}</span>
            </div>
          )}
          
          {author.joinedAt && (
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-3 w-3" />
              <span>Joined {new Date(author.joinedAt).toLocaleDateString('en-US', { 
                month: 'long', 
                year: 'numeric' 
              })}</span>
            </div>
          )}
        </div>
      </div>

      {/* Bio */}
      {showBio && author.bio && (
        <p className="text-sm text-muted-foreground leading-relaxed">
          {author.bio}
        </p>
      )}

      {/* Stats */}
      {showStats && author.stats && (
        <div className="grid grid-cols-3 gap-4 py-4 border-t">
          <div className="text-center">
            <div className="text-lg font-bold">{author.stats.articles}</div>
            <div className="text-xs text-muted-foreground">Articles</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold">{author.stats.totalViews}</div>
            <div className="text-xs text-muted-foreground">Total Views</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold">{author.stats.totalLikes}</div>
            <div className="text-xs text-muted-foreground">Total Likes</div>
          </div>
        </div>
      )}

      {/* Social Links */}
      {socialLinks.length > 0 && (
        <div className="flex items-center gap-3 pt-4 border-t">
          <span className="text-sm text-muted-foreground">Connect:</span>
          <div className="flex gap-2">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border bg-background hover:bg-muted transition-colors flex items-center justify-center group"
              >
                <Icon className="h-4 w-4 group-hover:text-blue-600 transition-colors" />
                <span className="sr-only">{label}</span>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Website */}
      {author.website && (
        <a
          href={author.website}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 transition-colors"
        >
          <LinkIcon className="h-3 w-3" />
          <span>Visit website</span>
        </a>
      )}
    </motion.div>
  )
}
