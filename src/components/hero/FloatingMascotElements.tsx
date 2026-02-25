'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import type { ReactElement } from 'react'
import { cn } from '@/lib/utils'

type MascotElement = {
  src: string
  alt: string
  className: string
  width: number
  height: number
  duration: number
  yOffset: number
}

type MascotVariant = 'hero' | 'cta'

type VariantConfig = {
  frameClassName: string
  imageSizes: string
  elements: MascotElement[]
}

const variantConfigs: Record<MascotVariant, VariantConfig> = {
  hero: {
    frameClassName:
      'absolute top-1/2 left-1/2 relative h-48 w-40 -translate-x-1/2 -translate-y-1/2 md:h-60 md:w-52 lg:h-64 lg:w-56',
    imageSizes: '(min-width: 1024px) 192px, (min-width: 768px) 176px, 144px',
    elements: [
      {
        src: '/pagdi.png',
        alt: 'Mascot turban',
        className: 'absolute top-[5%] left-[10%] -translate-x-1/2 w-35 md:w-44 lg:w-48',
        width: 128,
        height: 96,
        duration: 3.2,
        yOffset: 10,
      },
      {
        src: '/tilak.png',
        alt: 'Mascot tilak',
        className: 'absolute top-[38%] left-[48%] -translate-x-1/2 w-3 md:w-3 lg:w-4',
        width: 40,
        height: 40,
        duration: 3.2,
        yOffset: 10,
      },
      {
        src: '/glasses.png',
        alt: 'Mascot glasses',
        className: 'absolute top-[50%] left-[23%] -translate-x-1/2 w-24 md:w-28 lg:w-32',
        width: 112,
        height: 56,
        duration: 3.2,
        yOffset: 10,
      },
      {
        src: '/moustache.png',
        alt: 'Mascot moustache',
        className: 'absolute top-[73%] left-[26%] -translate-x-1/2 w-[5.5rem] md:w-30 lg:w-28',
        width: 96,
        height: 48,
        duration: 3.2,
        yOffset: 10,
      },
    ],
  },
  cta: {
    frameClassName:
      'absolute top-1/2 left-1/2 relative h-44 w-36 -translate-x-1/2 -translate-y-1/2 md:h-56 md:w-48 lg:h-60 lg:w-52',
    imageSizes: '(min-width: 1024px) 176px, (min-width: 768px) 160px, 132px',
    elements: [
      {
        src: '/pagdi.png',
        alt: 'Mascot turban',
        className: 'absolute top-[5%] left-1/2 -translate-x-1/2 w-28 md:w-36 lg:w-40',
        width: 128,
        height: 96,
        duration: 3.2,
        yOffset: 10,
      },
      {
        src: '/tilak.png',
        alt: 'Mascot tilak',
        className: 'absolute top-[20%] left-1/2 -translate-x-1/2 w-[15px] md:w-7 lg:w-8',
        width: 40,
        height: 40,
        duration: 3.2,
        yOffset: 10,
      },
      {
        src: '/glasses.png',
        alt: 'Mascot glasses',
        className: 'absolute top-[51%] left-1/2 -translate-x-1/2 w-20 md:w-24 lg:w-28',
        width: 112,
        height: 56,
        duration: 3.7,
        yOffset: 11,
      },
      {
        src: '/moustache.png',
        alt: 'Mascot moustache',
        className: 'absolute top-[65%] left-1/2 -translate-x-1/2 w-[4.8rem] md:w-20 lg:w-24',
        width: 96,
        height: 48,
        duration: 4.8,
        yOffset: 14,
      },
    ],
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
        {config.elements.map((element) => (
          <motion.div
            key={`${variant}-${element.src}`}
            className={element.className}
            animate={{ y: [0, -element.yOffset, 0] }}
            transition={{
              duration: element.duration,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Image
              src={element.src}
              alt={element.alt}
              width={element.width}
              height={element.height}
              className="h-auto w-full select-none drop-shadow-[0_2px_6px_rgba(0,0,0,0.12)]"
              sizes={config.imageSizes}
              priority={false}
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default FloatingMascotElements
