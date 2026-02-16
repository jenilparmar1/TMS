import { Store } from '@/types'

export const stores: Store[] = [
  {
    id: 'mumbai-andheri',
    name: 'TMS Andheri',
    city: 'Mumbai',
    state: 'Maharashtra',
    address: 'Shop No. 12, Ground Floor, Infinity Mall, Link Road, Andheri West',
    landmark: 'Near Andheri Metro Station',
    phone: '+91 98765 43210',
    email: 'andheri@themisalstory.com',
    timings: {
      weekdays: '8:00 AM - 10:00 PM',
      weekends: '8:00 AM - 11:00 PM',
      holidays: '9:00 AM - 10:00 PM',
    },
    coordinates: {
      lat: 19.1364,
      lng: 72.8296,
    },
    isOpen: true,
    features: ['dine-in', 'takeaway', 'delivery', 'wifi', 'ac'],
  },
  {
    id: 'mumbai-bandra',
    name: 'TMS Bandra',
    city: 'Mumbai',
    state: 'Maharashtra',
    address: '45, Hill Road, Bandra West',
    landmark: 'Opposite Bandra Station',
    phone: '+91 98765 43211',
    email: 'bandra@themisalstory.com',
    timings: {
      weekdays: '8:00 AM - 10:00 PM',
      weekends: '8:00 AM - 11:00 PM',
    },
    coordinates: {
      lat: 19.0596,
      lng: 72.8295,
    },
    isOpen: true,
    features: ['dine-in', 'takeaway', 'delivery', 'parking', 'wifi', 'ac'],
  },
  {
    id: 'pune-fc-road',
    name: 'TMS FC Road',
    city: 'Pune',
    state: 'Maharashtra',
    address: '78, Fergusson College Road, Shivajinagar',
    landmark: 'Near Vaishali Restaurant',
    phone: '+91 98765 43212',
    email: 'fcroad@themisalstory.com',
    timings: {
      weekdays: '7:30 AM - 10:30 PM',
      weekends: '7:30 AM - 11:00 PM',
    },
    coordinates: {
      lat: 18.5285,
      lng: 73.8403,
    },
    isOpen: true,
    features: ['dine-in', 'takeaway', 'wifi', 'ac'],
  },
  {
    id: 'pune-koregaon',
    name: 'TMS Koregaon Park',
    city: 'Pune',
    state: 'Maharashtra',
    address: 'Lane 6, North Main Road, Koregaon Park',
    landmark: 'Near German Bakery',
    phone: '+91 98765 43213',
    email: 'koregaon@themisalstory.com',
    timings: {
      weekdays: '8:00 AM - 10:00 PM',
      weekends: '8:00 AM - 11:00 PM',
    },
    coordinates: {
      lat: 18.5362,
      lng: 73.8939,
    },
    isOpen: true,
    features: ['dine-in', 'takeaway', 'delivery', 'parking', 'wifi', 'ac'],
  },
  {
    id: 'nashik-college-road',
    name: 'TMS Nashik',
    city: 'Nashik',
    state: 'Maharashtra',
    address: '23, College Road, Near CBS',
    landmark: 'Opposite State Bank',
    phone: '+91 98765 43214',
    email: 'nashik@themisalstory.com',
    timings: {
      weekdays: '8:00 AM - 9:30 PM',
      weekends: '8:00 AM - 10:00 PM',
    },
    coordinates: {
      lat: 19.9975,
      lng: 73.7898,
    },
    isOpen: true,
    features: ['dine-in', 'takeaway', 'parking', 'ac'],
  },
  {
    id: 'kolhapur-mahalaxmi',
    name: 'TMS Kolhapur',
    city: 'Kolhapur',
    state: 'Maharashtra',
    address: 'Shop 5, Mahalaxmi Complex, Station Road',
    landmark: 'Near Mahalaxmi Temple',
    phone: '+91 98765 43215',
    email: 'kolhapur@themisalstory.com',
    timings: {
      weekdays: '7:00 AM - 10:00 PM',
      weekends: '7:00 AM - 10:30 PM',
    },
    coordinates: {
      lat: 16.7050,
      lng: 74.2433,
    },
    isOpen: true,
    features: ['dine-in', 'takeaway', 'parking'],
  },
]

// Helper function to get stores by city
export const getStoresByCity = (city: string): Store[] => {
  return stores.filter(store => store.city.toLowerCase() === city.toLowerCase())
}

// Helper function to get unique cities
export const getCities = (): string[] => {
  return [...new Set(stores.map(store => store.city))]
}

// Helper function to get store by ID
export const getStoreById = (id: string): Store | undefined => {
  return stores.find(store => store.id === id)
}
