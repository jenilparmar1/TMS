'use client'

import { useEffect, useRef, useState } from 'react'
import { Container } from '@/components/ui'

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [shouldPlayVideo, setShouldVideo] = useState(true)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    // Check for prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  useEffect(() => {
    // Determine if we should play video based on screen size and motion preferences
    const handleResize = () => {
      // Disable video on small screens (mobile optimization)
      const isMobile = window.innerWidth < 768
      setShouldVideo(!isMobile && !prefersReducedMotion)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [prefersReducedMotion])

  return (
    <section className="hero-with-background relative group h-[70vh] md:h-[100vh] overflow-hidden">
      {/* Video Background - only render on desktop and if motion is not reduced */}
      {shouldPlayVideo && (
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/misal-plate-hero.png"
          onError={() => {
            // Fallback if video fails to load
            console.warn('Hero video failed to load')
          }}
        >
          <source src="/Misal AI.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Fallback Image for reduced motion or mobile */}
      {!shouldPlayVideo && (
        <div className="hero-fallback-image absolute inset-0" />
      )}

      {/* Overlay for readability */}
      <div className="hero-overlay absolute inset-0 bg-black/40" />

      {/* Content */}
      <Container className="relative z-10 h-full">
        <div className="flex h-full flex-col items-center justify-center px-4 text-center">
          <div className="space-y-4">
            <h1 className="font-display text-display-lg md:text-display-xl font-bold text-white drop-shadow-lg">
              Misal Story & More
            </h1>
            <p className="font-body text-lg md:text-2xl text-white/90 drop-shadow-md italic tracking-wide">
              kahani har swaad ki
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero
