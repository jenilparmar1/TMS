'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Container, Section } from '@/components/ui'
import { misalStory } from '@/data/ingredients'

const misalImageMap = [
  { titleImg: 'mumbai-misal-title.png', posterImg: 'mumbai-misal-poster.png' },
  { titleImg: 'kolhapuri-misal-title.png', posterImg: 'kolhapuri-misal-poster.png' },
  { titleImg: 'nagpuri-misal-title.png', posterImg: 'nagpuri-misal-poster.png' },
  { titleImg: 'puneri-misal-title.png', posterImg: 'puneri-misal-poster.png' },
  { titleImg: 'nagpuri-tari-poha-title.png', posterImg: 'nagpuri-tari-poha-poster.png' },
]

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
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-200 via-primary-500 to-accent-500 md:-translate-x-1/2" />

          <div className="space-y-12 md:space-y-24">
            {misalStory.map((story, index) => (
              <TimelineItem
                key={story.id}
                story={story}
                isLeft={index % 2 === 0}
                imageMap={misalImageMap[index] || misalImageMap[0]}
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
  isLeft: boolean
  imageMap: { titleImg: string; posterImg: string }
}

function TimelineItem({ story, isLeft, imageMap }: TimelineItemProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const titleImageUrl = `/assets/story/${imageMap.titleImg}`
  const posterImageUrl = `/assets/story/${imageMap.posterImg}`
  const fallbackImage = '/misal-plate-hero.png'

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const img = e.currentTarget
    if (img.src !== fallbackImage) {
      img.src = fallbackImage
    }
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: 'easeOut' }}
      className={`relative flex flex-col gap-6 pl-12 md:pl-0 md:items-center md:gap-8 ${
        isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      <div className="absolute left-4 top-1/2 -translate-y-1/2 md:static md:translate-y-0 md:justify-self-center w-4 h-4 z-10">
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

      <motion.div
        className={`w-full md:w-1/2 ${isLeft ? 'md:pr-10' : 'md:pl-10'}`}
        initial={{ opacity: 0, y: 18 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      >
        <div className="overflow-hidden rounded-2xl bg-white p-2 shadow-card">
          <img
            src={titleImageUrl}
            alt={`${story.title} title`}
            loading="lazy"
            onError={handleImageError}
            className="block h-[160px] w-full rounded-xl object-contain object-center md:h-[210px]"
          />
        </div>
      </motion.div>

      <motion.div
        className={`w-full md:w-1/2 ${isLeft ? 'md:pl-10' : 'md:pr-10'}`}
        initial={{ opacity: 0, y: 18 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: 'easeOut', delay: 0.05 }}
      >
        <div className="overflow-hidden rounded-2xl shadow-card">
          <img
            src={posterImageUrl}
            alt={`${story.title} poster`}
            loading="lazy"
            onError={handleImageError}
            className="block h-[220px] w-full object-cover md:h-[290px]"
          />
        </div>
      </motion.div>
    </motion.div>
  )
}

export default StorySection
