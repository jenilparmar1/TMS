import { NavItem } from '@/types'

export const mainNavItems: NavItem[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Menu',
    href: '/menu',
  },
  {
    label: 'Our Story',
    href: '/about',
  },
  {
    label: 'Locations',
    href: '/locations',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
]

export const footerNavItems = {
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Story', href: '/about#story' },
    { label: 'Careers', href: '/careers' },
    { label: 'Press', href: '/press' },
  ],
  menu: [
    { label: 'Classic Misal', href: '/menu?category=classic-misal' },
    { label: 'Fusion Specials', href: '/menu?category=fusion-specials' },
    { label: 'Beverages', href: '/menu?category=beverages' },
    { label: 'Combos', href: '/menu?category=combos' },
  ],
  support: [
    { label: 'Contact Us', href: '/contact' },
    { label: 'FAQs', href: '/faqs' },
    { label: 'Feedback', href: '/feedback' },
    { label: 'Franchise', href: '/franchise' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' },
  ],
}

export const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://instagram.com/themisalstory',
    icon: 'instagram',
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com/themisalstory',
    icon: 'facebook',
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com/themisalstory',
    icon: 'twitter',
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com/@themisalstory',
    icon: 'youtube',
  },
]
