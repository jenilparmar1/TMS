/**
 * Site-wide constants and configuration
 */

export const SITE_CONFIG = {
  name: 'The Misal Story',
  shortName: 'TMS',
  tagline: 'Kahani Har Swaad Ki',
  taglineEnglish: 'Story of Every Taste',
  description: 'Experience authentic Maharashtrian Misal at The Misal Story. From fiery Kolhapuri to creamy fusion varieties, discover the taste that defines Maharashtra.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://themisalstory.com',
  email: 'hello@themisalstory.com',
  phone: '+91 98765 43210',
  foundedYear: 2024,
} as const

export const BRAND_COLORS = {
  primary: '#E4002B', // Pantone 2347C
  accent: '#0072CE',  // Pantone 285C
  white: '#FFFFFF',
} as const

export const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/themisalstory',
  facebook: 'https://facebook.com/themisalstory',
  twitter: 'https://twitter.com/themisalstory',
  youtube: 'https://youtube.com/@themisalstory',
} as const

export const ANIMATION_DURATION = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.5,
  verySlow: 0.8,
} as const

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const

export const SPICE_LEVELS = {
  1: { label: 'Mild', description: 'Just a hint of spice' },
  2: { label: 'Medium', description: 'Pleasantly spicy' },
  3: { label: 'Spicy', description: 'For spice lovers' },
  4: { label: 'Hot', description: 'Bring the heat!' },
  5: { label: 'Extreme', description: 'Kolhapur-level fire!' },
} as const

export const STORE_FEATURES = {
  'dine-in': { label: 'Dine In', icon: 'utensils' },
  'takeaway': { label: 'Takeaway', icon: 'package' },
  'delivery': { label: 'Delivery', icon: 'truck' },
  'parking': { label: 'Parking', icon: 'car' },
  'wifi': { label: 'Free WiFi', icon: 'wifi' },
  'ac': { label: 'Air Conditioned', icon: 'snowflake' },
} as const

export const CONTACT_SUBJECTS = [
  { value: 'general', label: 'General Inquiry' },
  { value: 'feedback', label: 'Feedback' },
  { value: 'complaint', label: 'Complaint' },
  { value: 'franchise', label: 'Franchise Opportunity' },
  { value: 'catering', label: 'Catering Services' },
  { value: 'partnership', label: 'Partnership' },
  { value: 'careers', label: 'Careers' },
  { value: 'other', label: 'Other' },
] as const

export const META_DEFAULTS = {
  title: `${SITE_CONFIG.name} | ${SITE_CONFIG.taglineEnglish}`,
  description: SITE_CONFIG.description,
  keywords: [
    'misal',
    'misal pav',
    'maharashtrian food',
    'indian street food',
    'kolhapuri misal',
    'puneri misal',
    'mumbai food',
    'pune food',
    'restaurant',
    'the misal story',
  ],
  ogImage: '/images/og-image.jpg',
}
