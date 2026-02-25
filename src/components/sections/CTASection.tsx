'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPin, Phone } from 'lucide-react'
import { Container, Button } from '@/components/ui'
import { SITE_CONFIG } from '@/lib/constants'
import FloatingMascotElements from '@/components/hero/FloatingMascotElements'

export function CTASection() {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-brand overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-pattern-dots bg-dots" />
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-10 left-10 text-6xl opacity-20"
        animate={{ rotate: [0, 10, 0], y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        🌶️
      </motion.div>
      <motion.div
        className="absolute bottom-10 right-10 text-6xl opacity-20"
        animate={{ rotate: [0, -10, 0], y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        🥣
      </motion.div>

      <Container>
        <div className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left text-white"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Ready to Experience
              <br />
              <span className="text-accent-300">The Misal Story?</span>
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-lg mx-auto lg:mx-0">
              Visit your nearest TMS outlet and discover why Maharashtra
              can&apos;t stop talking about us. Your taste buds will thank you!
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link href="/locations">
                <Button
                  size="lg"
                  variant="secondary"
                  leftIcon={<MapPin className="w-5 h-5" />}
                  className="bg-white text-primary-500 hover:bg-neutral-100"
                >
                  Find Nearest Store
                </Button>
              </Link>
              <a href={`tel:${SITE_CONFIG.phone}`}>
                <Button
                  size="lg"
                  variant="outline"
                  leftIcon={<Phone className="w-5 h-5" />}
                  className="border-white text-white hover:bg-white/10"
                >
                  Call Us
                </Button>
              </a>
            </div>

            {/* Store Hours */}
            <div className="mt-8 inline-flex items-center gap-2 text-white/70 text-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Open Daily: 8:00 AM - 10:00 PM
            </div>
          </motion.div>

          {/* Mascot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex justify-center lg:justify-end mt-9 md:mt-0"
          >
            <motion.div
              className="relative"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="absolute right-0 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-white/25 blur-3xl md:h-64 md:w-64 lg:h-72 lg:w-72" />

              <div className="relative z-10 h-56 w-72 md:h-64 md:w-80 lg:h-72 lg:w-[22rem] flex items-center justify-center -ml-16 md:ml-0 mt-4 md:mt-0">
                <div className="absolute right-1 top-1/2 h-52 w-52 -translate-y-1/2 rounded-full bg-white shadow-[0_20px_55px_rgba(0,0,0,0.18)] ring-1 ring-white/70 backdrop-blur-[1px] md:h-60 md:w-60 lg:h-64 lg:w-64" />

                <div className="relative z-20 p-8">
                  <div className="w-48 h-48" aria-hidden />
                </div>
                <FloatingMascotElements variant="hero" className="absolute left-16 md:left-20" />
              </div>

              {/* Speech bubble */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -top-[4vh] -right-[2vh] md:-top-[6vh] md:-right-[2vh] bg-white text-neutral-900 px-4 py-2 rounded-xl shadow-lg text-sm font-medium"
              >
                <span className="text-lg mr-1">👋</span>
                See you soon!
                {/* Speech bubble tail */}
                <div className="absolute bottom-0 left-4 w-3 h-3 bg-white transform rotate-45 translate-y-1/2" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

export default CTASection
