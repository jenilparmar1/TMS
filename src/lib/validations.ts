import { z } from 'zod'

/**
 * Contact form validation schema
 */
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .regex(/^[a-zA-Z\s]+$/, 'Name can only contain letters and spaces'),
  
  email: z
    .string()
    .email('Please enter a valid email address')
    .max(255, 'Email must be less than 255 characters'),
  
  phone: z
    .string()
    .optional()
    .refine(
      (val) => {
        if (!val) return true
        const cleaned = val.replace(/[\s-+]/g, '').replace(/^91/, '')
        return /^[6-9]\d{9}$/.test(cleaned)
      },
      'Please enter a valid Indian phone number'
    ),
  
  subject: z
    .string()
    .min(1, 'Please select a subject'),
  
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message must be less than 2000 characters'),
  
  preferredContact: z
    .enum(['email', 'phone'])
    .optional(),
})

export type ContactFormValues = z.infer<typeof contactFormSchema>

/**
 * Newsletter subscription schema
 */
export const newsletterSchema = z.object({
  email: z
    .string()
    .email('Please enter a valid email address'),
})

export type NewsletterValues = z.infer<typeof newsletterSchema>

/**
 * Feedback form schema
 */
export const feedbackSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters'),
  
  email: z
    .string()
    .email('Please enter a valid email address'),
  
  rating: z
    .number()
    .min(1, 'Please select a rating')
    .max(5, 'Rating must be between 1 and 5'),
  
  visitedLocation: z
    .string()
    .min(1, 'Please select a location'),
  
  feedback: z
    .string()
    .min(20, 'Feedback must be at least 20 characters')
    .max(1000, 'Feedback must be less than 1000 characters'),
  
  wouldRecommend: z
    .boolean(),
})

export type FeedbackValues = z.infer<typeof feedbackSchema>

/**
 * Sanitize user input to prevent XSS
 */
export function sanitizeInput(input: string): string {
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
    .trim()
}

/**
 * Sanitize all string fields in an object
 */
export function sanitizeFormData<T extends Record<string, unknown>>(data: T): T {
  const sanitized = { ...data }
  
  for (const key in sanitized) {
    if (typeof sanitized[key] === 'string') {
      sanitized[key] = sanitizeInput(sanitized[key] as string) as T[Extract<keyof T, string>]
    }
  }
  
  return sanitized
}
