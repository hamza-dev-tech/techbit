'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Trophy, Medal, Award, Star } from 'lucide-react'
import Link from 'next/link'

const topContributors = [
  {
    id: 1,
    name: 'Sarah Chen',
    avatar: '/avatars/sarah.jpg',
    role: 'Senior React Developer',
    points: 2847,
    answers: 89,
    badge: 'Expert',
    rank: 1,
    specialties: ['React', 'TypeScript', 'Next.js']
  },
  {
    id: 2,
    name: 'Mike Rodriguez',
    avatar: '/avatars/mike.jpg',
    role: 'JavaScript Architect', 
    points: 2156,
    answers: 67,
    badge: 'Expert',
    rank: 2,
    specialties: ['JavaScript', 'Node.js', 'API']
  },
  {
    id: 3,
    name: 'Alex Kim',
    avatar: '/avatars/alex.jpg',
    role: 'Full Stack Developer',
    points: 1923,
    answers: 54,
    badge: 'Pro',
    rank: 3,
    specialties: ['Python', 'Django', 'DevOps']
  },
  {
    id: 4,
    name: 'Emma Davis',
    avatar: '/avatars/emma.jpg',
    role: 'Frontend Specialist',
    points: 1567,
    answers: 42,
    badge: 'Pro', 
    rank: 4,
    specialties: ['CSS', 'Vue.js', 'Design']
  },
  {
    id: 5,
    name: 'John Smith',
    avatar: '/avatars/john.jpg',
    role: 'Backend Engineer',
    points: 1234,
    answers: 38,
    badge: 'Advanced',
    rank: 5,
    specialties: ['Java', 'Spring', 'Database']
  }
]

const getRankIcon = (rank) => {
  switch (rank) {
    case 1:
      return <Trophy className="h-6 w-6 text-yellow-500" />
    case 2:
      return <Medal className="h-6 w-6 text-gray-400" />
    case 3:
      return <Award className="h-6 w-6 text-amber-600" />
    default:
      return <Star className="h-6 w-6 text-blue-500" />
  }
}

const getBadgeVariant = (badge) => {
  switch (badge) {
    case 'Expert':
      return 'default'
    case 'Pro':
      return 'secondary'
    case 'Advanced':
      return 'outline'
    default:
      return 'outline'
  }
}

export function TopContributors() {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Top <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">Contributors</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the expert developers who make our community thrive with their knowledge and insights.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {topContributors.map((contributor, index) => (
            <motion.div
              key={contributor.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className={`h-full bg-card/50 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group ${
                contributor.rank <= 3 ? 'ring-2 ring-yellow-200 dark:ring-yellow-800' : ''
              }`}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-12 w-12 ring-2 ring-background">
                        <AvatarImage src={contributor.avatar} alt={contributor.name} />
                        <AvatarFallback>
                          {contributor.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold group-hover:text-foreground/90 transition-colors">
                          {contributor.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {contributor.role}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      {getRankIcon(contributor.rank)}
                      <Badge variant={getBadgeVariant(contributor.badge)} className="text-xs">
                        {contributor.badge}
                      </Badge>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        {contributor.points.toLocaleString()}
                      </div>
                      <div className="text-xs text-muted-foreground">Points</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                        {contributor.answers}
                      </div>
                      <div className="text-xs text-muted-foreground">Answers</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-xs font-medium text-muted-foreground">Specialties</div>
                    <div className="flex flex-wrap gap-1">
                      {contributor.specialties.map((specialty) => (
                        <Badge 
                          key={specialty}
                          variant="outline"
                          className="text-xs h-5"
                        >
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <Link href="/contributors">
            <Button size="lg" variant="outline">
              View Full Leaderboard
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
