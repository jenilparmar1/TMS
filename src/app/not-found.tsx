'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Home, ArrowLeft } from 'lucide-react'
import { Container, Button } from '@/components/ui'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-white via-primary-50/30 to-accent-50/20">
      <Container size="sm">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          {/* Mascot */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', delay: 0.2 }}
            className="flex justify-center mb-8"
          >
            <div className="w-48 h-48" aria-hidden />
          </motion.div>

          {/* 404 */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-8xl md:text-9xl font-bold text-primary-500 mb-4"
          >
            404
          </motion.h1>

          {/* Message */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4"
          >
            Oops! This page wandered off...
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-neutral-600 mb-8 max-w-md mx-auto"
          >
            Looks like this page went looking for some extra Misal and got lost! 
            Don&apos;t worry, we&apos;ll help you find your way back.
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/">
              <Button size="lg" leftIcon={<Home className="w-5 h-5" />}>
                Go Home
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              leftIcon={<ArrowLeft className="w-5 h-5" />}
              onClick={() => window.history.back()}
            >
              Go Back
            </Button>
          </motion.div>

          {/* Fun suggestion */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 text-sm text-neutral-500"
          >
            While you&apos;re here, why not check out our{' '}
            <Link href="/menu" className="text-primary-500 hover:underline">
              delicious menu
            </Link>
            ? 🌶️
          </motion.p>
        </motion.div>
      </Container>
    </div>
  )
}
