'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import type { ReactElement } from 'react'
import { cn } from '@/lib/utils'

type MascotVariant = 'hero' | 'cta'

type VariantConfig = {
  frameClassName: string
  imageSizes: string
  src: string
  alt: string
  width: number
  height: number
  duration: number
  yOffset: number
}

const variantConfigs: Record<MascotVariant, VariantConfig> = {
  hero: {
    frameClassName:
      'absolute top-1/2 left-1/2 h-48 w-40 -translate-x-1/2 -translate-y-1/2 md:h-60 md:w-52 lg:h-64 lg:w-56',
    imageSizes: '(min-width: 1024px) 224px, (min-width: 768px) 208px, 160px',
    src: '/mascot-red.png',
    alt: 'Mascot red variant',
    width: 240,
    height: 240,
    duration: 4,
    yOffset: 10,
  },
  cta: {
    frameClassName:
      'absolute top-1/2 left-1/2 h-44 w-36 -translate-x-1/2 -translate-y-1/2 md:h-56 md:w-48 lg:h-60 lg:w-52',
    imageSizes: '(min-width: 1024px) 208px, (min-width: 768px) 192px, 144px',
    src: '/mascot-white.png',
    alt: 'Mascot white variant',
    width: 220,
    height: 220,
    duration: 4,
    yOffset: 10,
  },
}

type FloatingMascotElementsProps = {
  variant?: MascotVariant
  className?: string
}

export function FloatingMascotElements({
  variant = 'hero',
  className,
}: FloatingMascotElementsProps): ReactElement {
  const config = variantConfigs[variant]

  return (
    <div
      className={cn(
        'absolute inset-0 pointer-events-none z-20 overflow-hidden rounded-full',
        className,
      )}
      aria-hidden
    >
      <div className={config.frameClassName}>
        <motion.div
          className="h-full w-full"
          animate={{ y: [0, -config.yOffset, 0] }}
          transition={{
            duration: config.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Image
            src={config.src}
            alt={config.alt}
            width={config.width}
            height={config.height}
            className="h-full w-full object-contain select-none drop-shadow-[0_2px_6px_rgba(0,0,0,0.12)]"
            sizes={config.imageSizes}
            priority={false}
          />
        </motion.div>
      </div>
    </div>
  )
}

export default FloatingMascotElements
