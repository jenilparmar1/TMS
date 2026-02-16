'use client'

import { motion } from 'framer-motion'
import { Mascot } from '@/components/mascot'

export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center"
      >
        <Mascot expression="excited" size="lg" animate />
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6"
        >
          <p className="text-lg font-medium text-neutral-700">Loading...</p>
          <p className="text-sm text-neutral-500 mt-1">
            Preparing something delicious 🌶️
          </p>
        </motion.div>

        {/* Loading dots */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-primary-500 rounded-full"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: i * 0.15,
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  )
}
