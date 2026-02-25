// ============================================
// Menu Types
// ============================================

export type SpiceLevel = 1 | 2 | 3 | 4 | 5

export interface MenuItem {
  id: string
  name: string
  nameHindi?: string
  description: string
  price: number
  category: MenuCategory
  spiceLevel: SpiceLevel
  isVegetarian: boolean
  isVegan?: boolean
  isPopular?: boolean
  isNew?: boolean
  image?: string
  ingredients?: string[]
  allergens?: string[]
  nutritionInfo?: NutritionInfo
}

export interface NutritionInfo {
  calories?: number
  protein?: number
  carbs?: number
  fat?: number
}

export type MenuCategory = 
  | 'classic-misal'
  | 'fusion-specials'
  | 'beverages'
  | 'sides'
  | 'combos'

export interface MenuCategoryInfo {
  id: MenuCategory
  name: string
  description: string
  icon?: string
}

// ============================================
// Location/Store Types
// ============================================

export interface Store {
  id: string
  name: string
  city: string
  state: string
  address: string
  landmark?: string
  phone: string
  email?: string
  timings: StoreTimings
  coordinates?: Coordinates
  isOpen?: boolean
  features?: StoreFeature[]
  image?: string
}

export interface StoreTimings {
  weekdays: string
  weekends: string
  holidays?: string
}

export interface Coordinates {
  lat: number
  lng: number
}

export type StoreFeature = 
  | 'dine-in'
  | 'takeaway'
  | 'delivery'
  | 'parking'
  | 'wifi'
  | 'ac'

// ============================================
// Review/Testimonial Types
// ============================================

export interface Review {
  id: string
  author: string
  avatar?: string
  rating: number
  content: string
  date: string
  location?: string
  isVerified?: boolean
  helpfulCount?: number
  images?: string[]
}

// ============================================
// Contact Form Types
// ============================================

export interface ContactFormData {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
  preferredContact?: 'email' | 'phone'
}

export interface ContactFormResponse {
  success: boolean
  message: string
  ticketId?: string
}

// ============================================
// Ingredient Types (for storytelling)
// ============================================

export interface Ingredient {
  id: string
  name: string
  nameMarathi: string
  description: string
  image?: string
  color: string
  funFact?: string
}

// ============================================
// Story/Timeline Types
// ============================================

export interface StorySection {
  id: string
  title: string
  content: string
  image?: string
  year?: string
}

// Mascot has been removed from the codebase; related types deleted.

// ============================================
// Navigation Types
// ============================================

export interface NavItem {
  label: string
  href: string
  isExternal?: boolean
  children?: NavItem[]
}

// ============================================
// SEO Types
// ============================================

export interface SEOData {
  title: string
  description: string
  keywords?: string[]
  ogImage?: string
  canonical?: string
}

// ============================================
// API Response Types
// ============================================

export interface ApiResponse<T> {
  data: T
  success: boolean
  message?: string
  error?: string
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}
