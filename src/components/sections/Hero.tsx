'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, MapPin, Sparkles } from 'lucide-react'
import { Container, Button } from '@/components/ui'
import { Mascot } from '@/components/mascot'
import { SITE_CONFIG } from '@/lib/constants'

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section
      ref={ref}
      className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-primary-50/30 to-accent-50/20"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern-dots bg-dots opacity-5" />

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 right-10 w-20 h-20 bg-primary-500/10 rounded-full blur-2xl"
        animate={{ y: [0, 20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-40 left-10 w-32 h-32 bg-accent-500/10 rounded-full blur-3xl"
        animate={{ y: [0, -20, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity, delay: 1 }}
      />

      <Container>
        <motion.div style={{ y, opacity }} className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1 text-center lg:text-left"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6"
              >
                <Sparkles className="w-4 h-4" />
                Maharashtra&apos;s Favorite Street Food
              </motion.div>

              {/* Main Title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                <span className="block text-neutral-900">Experience</span>
                <span className="block text-primary-500">The Misal Story</span>
              </h1>

              {/* Tagline */}
              <p className="text-xl md:text-2xl text-neutral-600 mb-2 font-medium italic">
                {SITE_CONFIG.tagline}
              </p>
              <p className="text-lg text-neutral-500 mb-8 max-w-lg mx-auto lg:mx-0">
                From the fiery streets of Kolhapur to the sophisticated lanes of Pune,
                discover authentic Misal that tells a story in every bite.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Button
                  size="lg"
                  rightIcon={<ArrowRight className="w-5 h-5" />}
                  className="w-full sm:w-auto"
                  onClick={() => window.location.href = '/menu'}
                >
                  Explore Menu
                </Button>
                <Link href="/locations">
                  <Button
                    variant="outline"
                    size="lg"
                    leftIcon={<MapPin className="w-5 h-5" />}
                    className="w-full sm:w-auto"
                  >
                    Find a Store
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-12 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0"
              >
                {[
                  { value: '6+', label: 'Locations' },
                  { value: '15+', label: 'Misal Varieties' },
                  { value: '50K+', label: 'Happy Customers' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center lg:text-left">
                    <div className="text-2xl md:text-3xl font-bold text-primary-500">
                      {stat.value}
                    </div>
                    <div className="text-sm text-neutral-500">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Mascot & Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="order-1 lg:order-2 flex justify-center"
            >
              <div className="relative">
                {/* Decorative circles */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-primary-100 to-accent-100"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-56 h-56 md:w-72 md:h-72 lg:w-88 lg:h-88 rounded-full bg-white/80 backdrop-blur-sm" />
                </div>

                {/* Mascot */}
                <div className="relative z-10 p-8">
                  <Mascot expression="excited" size="xl" animate />
                </div>

                {/* Floating food items */}
                <motion.div
                  className="absolute -top-4 -right-4 text-4xl"
                  animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  🌶️
                </motion.div>
                <motion.div
                  className="absolute top-1/4 -left-8 text-3xl"
                  animate={{ y: [0, 10, 0], rotate: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                >
                  🍞
                </motion.div>
                <motion.div
                  className="absolute bottom-8 -right-4 text-3xl"
                  animate={{ y: [0, -8, 0], rotate: [0, 15, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
                >
                  🧅
                </motion.div>
                <motion.div
                  className="absolute bottom-4 left-0 text-2xl"
                  animate={{ y: [0, 8, 0], rotate: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1.5 }}
                >
                  🍋
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-neutral-400"
        >
          <span className="text-xs uppercase tracking-wider">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-neutral-300 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-primary-500 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
