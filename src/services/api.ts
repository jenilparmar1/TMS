import { ApiResponse, ContactFormData, ContactFormResponse } from '@/types'

/**
 * Base API configuration
 * Ready for future backend integration
 */
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || ''

/**
 * Generic fetch wrapper with error handling
 */
async function fetchApi<T>(
  endpoint: string,
  options?: RequestInit
): Promise<ApiResponse<T>> {
  try {
    const url = `${API_BASE_URL}${endpoint}`
    
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    
    return {
      data,
      success: true,
    }
  } catch (error) {
    console.error('API Error:', error)
    return {
      data: null as T,
      success: false,
      error: error instanceof Error ? error.message : 'An error occurred',
    }
  }
}

/**
 * Contact Form Submission
 * Currently simulates API call - ready for backend integration
 */
export async function submitContactForm(
  data: ContactFormData
): Promise<ContactFormResponse> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // In production, this would call the actual API
  if (process.env.CONTACT_FORM_ENDPOINT) {
    const response = await fetchApi<ContactFormResponse>(
      process.env.CONTACT_FORM_ENDPOINT,
      {
        method: 'POST',
        body: JSON.stringify(data),
      }
    )
    
    if (response.success) {
      return response.data
    }
    
    return {
      success: false,
      message: response.error || 'Failed to submit form',
    }
  }

  // Mock successful response for development
  return {
    success: true,
    message: 'Thank you for contacting us! We will get back to you within 24 hours.',
    ticketId: `TMS-${Date.now()}`,
  }
}

/**
 * Newsletter Subscription
 */
export async function subscribeNewsletter(email: string): Promise<ApiResponse<{ subscribed: boolean }>> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  // Mock response - replace with actual API call
  return {
    data: { subscribed: true },
    success: true,
    message: 'Successfully subscribed to newsletter!',
  }
}

/**
 * Fetch menu items (for future dynamic menu)
 */
export async function fetchMenuItems() {
  // Currently returns null - will be implemented when backend is ready
  return fetchApi('/api/menu')
}

/**
 * Fetch store locations (for future dynamic locations)
 */
export async function fetchStoreLocations() {
  // Currently returns null - will be implemented when backend is ready
  return fetchApi('/api/locations')
}

/**
 * Fetch reviews (for future dynamic reviews)
 */
export async function fetchReviews() {
  // Currently returns null - will be implemented when backend is ready
  return fetchApi('/api/reviews')
}

/**
 * Submit feedback/review
 */
export async function submitFeedback(data: {
  name: string
  email: string
  rating: number
  feedback: string
  location: string
}): Promise<ApiResponse<{ submitted: boolean }>> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Mock response
  return {
    data: { submitted: true },
    success: true,
    message: 'Thank you for your feedback!',
  }
}
