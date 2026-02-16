'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPin, ArrowRight, Phone } from 'lucide-react'
import { Container, Button } from '@/components/ui'
import { Mascot } from '@/components/mascot'
import { SITE_CONFIG } from '@/lib/constants'

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
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 blur-3xl bg-white/20 rounded-full" />
              
              <Mascot expression="waving" size="xl" animate />
              
              {/* Speech bubble */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -top-4 -right-4 bg-white text-neutral-900 px-4 py-2 rounded-xl shadow-lg text-sm font-medium"
              >
                <span className="text-lg mr-1">👋</span>
                See you soon!
                {/* Speech bubble tail */}
                <div className="absolute bottom-0 left-4 w-3 h-3 bg-white transform rotate-45 translate-y-1/2" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

export default CTASection
