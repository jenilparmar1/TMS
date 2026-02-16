'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Container, Section } from '@/components/ui'
import { misalStory } from '@/data/ingredients'

export function StorySection() {
  return (
    <Section background="light" id="story">
      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-600 rounded-full text-sm font-medium mb-4">
            Our Journey
          </span>
          <h2 className="section-title text-neutral-900 mb-4">
            The Story of <span className="text-primary-500">Misal</span>
          </h2>
          <p className="section-subtitle mx-auto">
            From humble beginnings to becoming Maharashtra&apos;s beloved dish,
            discover the rich history behind every bowl.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-200 via-primary-500 to-accent-500 md:-translate-x-1/2" />

          {/* Timeline Items */}
          <div className="space-y-12 md:space-y-24">
            {misalStory.map((story, index) => (
              <TimelineItem
                key={story.id}
                story={story}
                index={index}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}

interface TimelineItemProps {
  story: {
    id: string
    title: string
    content: string
    year?: string
  }
  index: number
  isLeft: boolean
}

function TimelineItem({ story, index, isLeft }: TimelineItemProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`relative flex items-center ${
        isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      {/* Timeline Dot */}
      <div className="absolute left-4 md:left-1/2 w-4 h-4 md:-translate-x-1/2 z-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="w-full h-full bg-white border-4 border-primary-500 rounded-full"
        />
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: [0, 1.5, 1] } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="absolute inset-0 bg-primary-500/30 rounded-full"
        />
      </div>

      {/* Content */}
      <div
        className={`w-full md:w-1/2 pl-12 md:pl-0 ${
          isLeft ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-2xl p-6 md:p-8 shadow-card hover:shadow-card-hover transition-shadow"
        >
          {/* Year Badge */}
          {story.year && (
            <span
              className={`inline-block px-3 py-1 bg-gradient-brand text-white text-sm font-bold rounded-full mb-4`}
            >
              {story.year}
            </span>
          )}

          <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-3">
            {story.title}
          </h3>
          <p className="text-neutral-600 leading-relaxed">{story.content}</p>
        </motion.div>
      </div>

      {/* Spacer for alternating layout */}
      <div className="hidden md:block w-1/2" />
    </motion.div>
  )
}

export default StorySection
