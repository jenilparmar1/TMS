'use client'

import { motion } from 'framer-motion'
import { Heart, Star, Sparkles, Users } from 'lucide-react'
import { Container, Section, Card } from '@/components/ui'
import { Mascot } from '@/components/mascot'
import { StorySection } from '@/components/sections'
import { brandValues } from '@/data/ingredients'
import { SITE_CONFIG } from '@/lib/constants'

const valueIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  heart: Heart,
  star: Star,
  sparkles: Sparkles,
  users: Users,
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="light" padding="lg">
        <Container>
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-center mb-6"
            >
              <Mascot expression="happy" size="lg" animate />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="section-title text-neutral-900 mb-4"
            >
              Our <span className="text-primary-500">Story</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="section-subtitle mx-auto"
            >
              How a passion for Maharashtra&apos;s beloved dish became a movement to share it with the world.
            </motion.p>
          </div>
        </Container>
      </Section>

      {/* Mission Section */}
      <Section background="white" padding="lg">
        <Container size="md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-600 rounded-full text-sm font-medium mb-6">
              Our Mission
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Celebrating Maharashtrian Culture,{' '}
              <span className="text-primary-500">One Bowl at a Time</span>
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed">
              {SITE_CONFIG.name} was born from a simple belief: that the humble Misal deserves 
              the same recognition and respect as any global cuisine. We&apos;re not just serving food — 
              we&apos;re preserving traditions, creating memories, and building a community around 
              Maharashtra&apos;s most iconic street food.
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Story Timeline */}
      <StorySection />

      {/* Values Section */}
      <Section background="white" padding="lg">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 bg-accent-100 text-accent-600 rounded-full text-sm font-medium mb-4">
              What We Stand For
            </span>
            <h2 className="section-title text-neutral-900 mb-4">
              Our <span className="text-primary-500">Values</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {brandValues.map((value, index) => {
              const Icon = valueIcons[value.icon]
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card hoverable className="h-full text-center p-6">
                    <div className="w-14 h-14 mx-auto mb-4 bg-primary-100 rounded-2xl flex items-center justify-center">
                      <Icon className="w-7 h-7 text-primary-500" />
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-neutral-600">
                      {value.description}
                    </p>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </Container>
      </Section>

      {/* Team/Founders Section */}
      <Section background="light" padding="lg">
        <Container size="md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Mascot expression="waving" size="lg" className="mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Made with <span className="text-primary-500">❤️</span> in Maharashtra
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed mb-8">
              From our kitchen to your table, every bowl of Misal is crafted with the same 
              passion and dedication that has made this dish a beloved part of Maharashtrian culture 
              for over a century. We&apos;re proud to carry this legacy forward.
            </p>
            <p className="text-neutral-500">
              Founded in {SITE_CONFIG.foundedYear} • {' '}
              Serving happiness across Maharashtra
            </p>
          </motion.div>
        </Container>
      </Section>
    </>
  )
}
