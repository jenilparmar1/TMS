'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Instagram, Facebook, Twitter, Youtube, Mail, Phone, MapPin, Heart } from 'lucide-react'
import { Container, Grid } from '@/components/ui'
import { Mascot } from '@/components/mascot'
import { footerNavItems, socialLinks } from '@/data/navigation'
import { SITE_CONFIG } from '@/lib/constants'

const socialIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  instagram: Instagram,
  facebook: Facebook,
  twitter: Twitter,
  youtube: Youtube,
}

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      {/* Main Footer */}
      <div className="py-12 md:py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <div className="flex items-start gap-4 mb-6">
                <Mascot expression="waving" size="md" animate />
                <div>
                  <h3 className="text-2xl font-bold text-primary-400">
                    The Misal Story
                  </h3>
                  <p className="text-neutral-400 italic">
                    {SITE_CONFIG.tagline}
                  </p>
                </div>
              </div>
              <p className="text-neutral-400 mb-6 max-w-sm">
                Celebrating the iconic Maharashtrian dish with authentic flavors 
                and modern twists. From Kolhapur&apos;s fire to Pune&apos;s finesse, 
                every bowl tells a story.
              </p>
              
              {/* Social Links */}
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => {
                  const Icon = socialIcons[social.icon]
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2.5 bg-neutral-800 rounded-full hover:bg-primary-500 transition-colors"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  )
                })}
              </div>
            </div>

            {/* Navigation Columns */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Company</h4>
              <ul className="space-y-3">
                {footerNavItems.company.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-neutral-400 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Menu</h4>
              <ul className="space-y-3">
                {footerNavItems.menu.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-neutral-400 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Contact</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
                  >
                    <Phone className="w-4 h-4 flex-shrink-0" />
                    {SITE_CONFIG.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
                  >
                    <Mail className="w-4 h-4 flex-shrink-0" />
                    {SITE_CONFIG.email}
                  </a>
                </li>
                <li>
                  <Link
                    href="/locations"
                    className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
                  >
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    Find a Store
                  </Link>
                </li>
              </ul>

              {/* Support Links */}
              <h4 className="font-semibold text-lg mt-6 mb-4">Support</h4>
              <ul className="space-y-3">
                {footerNavItems.support.slice(0, 3).map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-neutral-400 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800 py-6">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-neutral-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
            </p>
            
            <div className="flex items-center gap-6 text-sm">
              {footerNavItems.legal.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-neutral-500 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <p className="text-neutral-500 text-sm flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-primary-500 fill-primary-500" /> in Maharashtra
            </p>
          </div>
        </Container>
      </div>
    </footer>
  )
}

export default Footer
