'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote, MapPin, BadgeCheck } from 'lucide-react'
import { Container, Section, Card } from '@/components/ui'
import { getFeaturedReviews, getAverageRating } from '@/data/reviews'
import { formatDate } from '@/lib/utils'

export function Testimonials() {
  const reviews = getFeaturedReviews(6)
  const averageRating = getAverageRating()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, reviews.length])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % reviews.length)
  }

  return (
    <Section background="light" id="testimonials">
      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-600 rounded-full text-sm font-medium mb-4">
            Customer Love
          </span>
          <h2 className="section-title text-neutral-900 mb-4">
            What People <span className="text-primary-500">Say</span>
          </h2>
          <p className="section-subtitle mx-auto mb-6">
            Don&apos;t just take our word for it. Here&apos;s what our community has to say.
          </p>

          {/* Average Rating */}
          <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-card">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-5 h-5 ${
                    star <= Math.round(averageRating)
                      ? 'text-yellow-400 fill-yellow-400'
                      : 'text-neutral-200'
                  }`}
                />
              ))}
            </div>
            <span className="text-lg font-bold text-neutral-900">
              {averageRating}
            </span>
            <span className="text-neutral-500">from {reviews.length * 10}+ reviews</span>
          </div>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Review Card */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.4 }}
              >
                <Card className="bg-white p-6 md:p-10" variant="elevated">
                  {/* Quote Icon */}
                  <Quote className="w-12 h-12 text-primary-200 mb-6" />

                  {/* Review Content */}
                  <p className="text-lg md:text-xl text-neutral-700 leading-relaxed mb-8">
                    &ldquo;{reviews[currentIndex].content}&rdquo;
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-4">
                      {/* Avatar */}
                      <div className="w-14 h-14 bg-gradient-brand rounded-full flex items-center justify-center text-white text-xl font-bold">
                        {reviews[currentIndex].author.charAt(0)}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold text-neutral-900">
                            {reviews[currentIndex].author}
                          </h4>
                          {reviews[currentIndex].isVerified && (
                            <BadgeCheck className="w-5 h-5 text-accent-500" />
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-neutral-500">
                          {reviews[currentIndex].location && (
                            <>
                              <MapPin className="w-4 h-4" />
                              <span>{reviews[currentIndex].location}</span>
                            </>
                          )}
                          <span>•</span>
                          <span>{formatDate(reviews[currentIndex].date)}</span>
                        </div>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-5 h-5 ${
                            star <= reviews[currentIndex].rating
                              ? 'text-yellow-400 fill-yellow-400'
                              : 'text-neutral-200'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={goToPrevious}
              className="p-3 bg-white rounded-full shadow-card hover:shadow-card-hover transition-shadow text-neutral-600 hover:text-primary-500"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false)
                    setCurrentIndex(index)
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentIndex
                      ? 'w-8 bg-primary-500'
                      : 'bg-neutral-300 hover:bg-neutral-400'
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="p-3 bg-white rounded-full shadow-card hover:shadow-card-hover transition-shadow text-neutral-600 hover:text-primary-500"
              aria-label="Next review"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default Testimonials
