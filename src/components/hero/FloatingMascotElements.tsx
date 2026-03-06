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
        className: 'absolute top-[5%] left-[10%] -translate-x-1/2 w-55 md:w-55 lg:w-55',
        width: 128,
        height: 96,
        duration: 3.2,
        yOffset: 10,
      },
      {
        src: '/tilak.png',
        alt: 'Mascot tilak',
        className: 'absolute top-[34%] left-[42%] -translate-x-1/2 w-12 md:w-15 lg:w-15',
        width: 40,
        height: 40,
        duration: 3.2,
        yOffset: 10,
      },
      {
        src: '/glasses.png',
        alt: 'Mascot glasses',
        className: 'absolute top-[35%] left-[10%] -translate-x-1/2 w-30 md:w-30 lg:w-28',
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
        className: 'absolute top-[5%] left-[15%] -translate-x-1/2 w-35 md:w-44 lg:w-44',
        width: 128,
        height: 96,
        duration: 3.2,
        yOffset: 10,
      },
      {
        src: '/white tilak.png',
        alt: 'Mascot tilak',
        className: 'absolute top-[40%] left-[55%] -translate-x-1/2 w-3 md:w-3 lg:w-3',
        width: 40,
        height: 40,
        duration: 3.2,
        yOffset: 10,
      },
      {
        src: '/white glasses.png',
        alt: 'Mascot glasses',
        className: 'absolute top-[50%] left-[30%] -translate-x-1/2 w-24 md:w-28 lg:w-45',
        width: 112,
        height: 56,
        duration: 3.2,
        yOffset: 10,
      },
      {
        src: '/white moustache.png',
        alt: 'Mascot moustache',
        className: 'absolute top-[70%] left-[31%] -translate-x-1/2 w-[5.5rem] md:w-30 lg:w-28',
        width: 96,
        height: 48,
        duration: 3.2,
        yOffset: 10,
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
