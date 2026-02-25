'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, MapPin, Phone } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Container } from '@/components/ui'
import Image from 'next/image'
import { mainNavItems } from '@/data/navigation'
import { SITE_CONFIG } from '@/lib/constants'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <>
      {/* Top bar */}
      <div className="bg-primary-500 text-white py-2 text-sm hidden md:block">
        <Container>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <a 
                href={`tel:${SITE_CONFIG.phone}`}
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <Phone className="w-4 h-4" />
                {SITE_CONFIG.phone}
              </a>
              <Link 
                href="/locations"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <MapPin className="w-4 h-4" />
                Find a Store
              </Link>
            </div>
            <p className="font-medium">{SITE_CONFIG.tagline}</p>
          </div>
        </Container>
      </div>

      {/* Main header */}
      <header
        className={cn(
          'sticky top-0 z-50 transition-all duration-300',
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-md' 
            : 'bg-white'
        )}
      >
        <Container>
          <nav className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex items-center gap-3 md:gap-4">
              <Link href="/" className="group flex items-center cursor-pointer">
                <motion.div
                  whileHover={{ scale: 1.035, rotateY: -10}}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 280, damping: 20, mass: 0.8 }}
                  style={{ transformStyle: 'preserve-3d' }}
                  className="relative"
                >
                  <div className="absolute inset-0 rounded-full bg-primary-500/18 blur-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute inset-0 rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.18)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <Image
                    src="/TMS-2.jpg"
                    alt="TMS Symbol"
                    width={140}
                    height={140}
                    priority
                    className="relative h-10 md:h-14 w-auto object-contain"
                  />
                </motion.div>
              </Link>

              <Image
                src="/TMS-full.png"
                alt="The Misal Story"
                width={300}
                height={96}
                priority
                className="h-9 md:h-12 w-auto object-contain"
              />
            </div>



            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {mainNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'relative font-medium transition-colors',
                    pathname === item.href
                      ? 'text-primary-500'
                      : 'text-neutral-700 hover:text-primary-500'
                  )}
                >
                  {item.label}
                  {pathname === item.href && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-500 rounded-full"
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* CTA Button (Desktop) */}
            <Link
              href="/menu"
              className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 bg-primary-500 text-white font-semibold rounded-xl hover:bg-primary-600 transition-colors shadow-brand hover:shadow-brand-lg"
            >
              Order Now
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-neutral-700 hover:text-primary-500 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </nav>
        </Container>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-white z-50 md:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full">
                {/* Menu Header */}
                <div className="relative px-5 pt-5 pb-4 border-b border-neutral-200">
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="absolute top-4 right-4 p-2 text-neutral-500 hover:text-neutral-700"
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6" />
                  </button>

                  <Link href="/" className="block w-full pt-2">
                    <Image
                      src="/TMS-full.png"
                      alt="The Misal Story Logo"
                      width={420}
                      height={120}
                      priority
                      className="mx-auto h-10 sm:h-11 w-auto max-w-[220px] sm:max-w-[250px] object-contain"
                    />
                  </Link>
                </div>

                {/* Menu Items */}
                <nav className="flex-1 overflow-y-auto py-4">
                  {mainNavItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          'block px-6 py-4 text-lg font-medium border-b border-neutral-100 transition-colors',
                          pathname === item.href
                            ? 'text-primary-500 bg-primary-50'
                            : 'text-neutral-700 hover:bg-neutral-50'
                        )}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Menu Footer */}
                <div className="p-4 border-t bg-neutral-50">
                  <Link
                    href="/menu"
                    className="block w-full py-3 text-center bg-primary-500 text-white font-semibold rounded-xl hover:bg-primary-600 transition-colors"
                  >
                    Order Now
                  </Link>
                  <div className="mt-4 flex items-center justify-center gap-4 text-sm text-neutral-600">
                    <a href={`tel:${SITE_CONFIG.phone}`} className="flex items-center gap-1">
                      <Phone className="w-4 h-4" />
                      Call Us
                    </a>
                    <Link href="/locations" className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      Locations
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header
