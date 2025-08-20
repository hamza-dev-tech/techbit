'use client'

import { motion } from 'framer-motion'
import { AuthorCard } from './AuthorCard'

// Sample contributors data (in a real app, this would come from an API)
const contributors = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'Senior React Developer',
    avatar: '/avatars/sarah.jpg',
    bio: 'Full-stack developer with 8+ years of experience. Passionate about React, TypeScript, and building scalable web applications.',
    location: 'San Francisco, CA',
    joinedAt: '2023-01-15',
    website: 'https://sarahchen.dev',
    github: 'https://github.com/sarahchen',
    twitter: 'https://twitter.com/sarahchen_dev',
    linkedin: 'https://linkedin.com/in/sarahchen',
    stats: {
      articles: 12,
      totalViews: 15420,
      totalLikes: 892
    }
  },
  {
    id: 2,
    name: 'Mike Rodriguez',
    role: 'JavaScript Architect',
    avatar: '/avatars/mike.jpg',
    bio: 'JavaScript expert specializing in Node.js, performance optimization, and modern web technologies.',
    location: 'Austin, TX',
    joinedAt: '2023-02-20',
    website: 'https://mikerodriguez.tech',
    github: 'https://github.com/mikero',
    linkedin: 'https://linkedin.com/in/mikero',
    stats: {
      articles: 8,
      totalViews: 11230,
      totalLikes: 654
    }
  },
  {
    id: 3,
    name: 'Alex Kim',
    role: 'Full Stack Developer',
    avatar: '/avatars/alex.jpg',
    bio: 'Full-stack developer focused on modern web technologies, API design, and developer experience.',
    location: 'Seattle, WA',
    joinedAt: '2023-03-10',
    github: 'https://github.com/alexkim',
    twitter: 'https://twitter.com/alexkim_dev',
    stats: {
      articles: 6,
      totalViews: 8750,
      totalLikes: 423
    }
  },
  {
    id: 4,
    name: 'Emma Thompson',
    role: 'DevOps Engineer',
    avatar: '/avatars/emma.jpg',
    bio: 'DevOps engineer with expertise in cloud infrastructure, CI/CD, and container orchestration.',
    location: 'London, UK',
    joinedAt: '2023-04-05',
    website: 'https://emmathompson.dev',
    github: 'https://github.com/emmathompson',
    linkedin: 'https://linkedin.com/in/emmathompson',
    stats: {
      articles: 4,
      totalViews: 6100,
      totalLikes: 312
    }
  }
]

export function Contributors({ title = "Our Contributors", limit = null }) {
  const displayContributors = limit ? contributors.slice(0, limit) : contributors

  return (
    <section className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-8"
      >
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Meet the talented developers who contribute their knowledge and expertise to help the community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {displayContributors.map((contributor, index) => (
            <motion.div
              key={contributor.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <AuthorCard 
                author={contributor}
                showBio={true}
                showStats={true}
              />
            </motion.div>
          ))}
        </div>

        {limit && contributors.length > limit && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <p className="text-muted-foreground">
              And {contributors.length - limit} more amazing contributors!
            </p>
          </motion.div>
        )}
      </motion.div>
    </section>
  )
}
