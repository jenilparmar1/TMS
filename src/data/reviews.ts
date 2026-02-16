import { Review } from '@/types'

export const reviews: Review[] = [
  {
    id: 'review-1',
    author: 'Priya Sharma',
    rating: 5,
    content: 'The Kolhapuri Misal is absolutely authentic! It took me straight back to my grandmother\'s kitchen. The spice level is perfect, and the tarri is out of this world. Best Misal in Mumbai!',
    date: '2024-01-15',
    location: 'Mumbai',
    isVerified: true,
    helpfulCount: 45,
  },
  {
    id: 'review-2',
    author: 'Rahul Deshmukh',
    rating: 5,
    content: 'Finally, a place that respects the true art of Misal making. The Puneri Misal with poha topping is a game-changer. Will definitely be coming back every week!',
    date: '2024-01-10',
    location: 'Pune',
    isVerified: true,
    helpfulCount: 38,
  },
  {
    id: 'review-3',
    author: 'Anjali Patil',
    rating: 5,
    content: 'Tried the Cheese Burst Misal on a whim and WOW! Who knew cheese and misal could be such a perfect match? The fusion menu is incredibly creative.',
    date: '2024-01-08',
    location: 'Mumbai',
    isVerified: true,
    helpfulCount: 52,
  },
  {
    id: 'review-4',
    author: 'Vikram Joshi',
    rating: 4,
    content: 'Great ambiance and even better food. The Sol Kadhi is refreshing and pairs perfectly with the spicy misal. Highly recommend the Classic Combo for first-timers.',
    date: '2024-01-05',
    location: 'Nashik',
    isVerified: true,
    helpfulCount: 29,
  },
  {
    id: 'review-5',
    author: 'Sneha Kulkarni',
    rating: 5,
    content: 'As someone from Kolhapur, I\'m very picky about my Misal. TMS has earned my respect! The heat, the crunch, the flavor - everything is on point. Aamchi Misal!',
    date: '2024-01-03',
    location: 'Kolhapur',
    isVerified: true,
    helpfulCount: 67,
  },
  {
    id: 'review-6',
    author: 'Amit Chavan',
    rating: 5,
    content: 'Brought my family here for Sunday brunch. Everyone loved it - from my 8-year-old who tried the Butter Misal to my dad who swears by Kolhapuri. Perfect family outing!',
    date: '2023-12-28',
    location: 'Pune',
    isVerified: true,
    helpfulCount: 41,
  },
  {
    id: 'review-7',
    author: 'Meera Naik',
    rating: 5,
    content: 'The presentation is beautiful, the service is quick, and the food is phenomenal. This is what happens when you treat street food with respect. Bravo TMS!',
    date: '2023-12-25',
    location: 'Mumbai',
    isVerified: true,
    helpfulCount: 33,
  },
  {
    id: 'review-8',
    author: 'Sanjay More',
    rating: 4,
    content: 'Love the concept of celebrating Maharashtrian food culture. The mascot is adorable and the vibe is energetic. Food quality is consistent every time I visit.',
    date: '2023-12-20',
    location: 'Mumbai',
    isVerified: true,
    helpfulCount: 25,
  },
]

// Helper to get featured reviews (top rated with most helpful votes)
export const getFeaturedReviews = (count: number = 5): Review[] => {
  return [...reviews]
    .sort((a, b) => (b.helpfulCount || 0) - (a.helpfulCount || 0))
    .slice(0, count)
}

// Helper to get reviews by location
export const getReviewsByLocation = (location: string): Review[] => {
  return reviews.filter(review => review.location?.toLowerCase() === location.toLowerCase())
}

// Calculate average rating
export const getAverageRating = (): number => {
  const total = reviews.reduce((sum, review) => sum + review.rating, 0)
  return Math.round((total / reviews.length) * 10) / 10
}
