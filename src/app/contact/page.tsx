'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { Send, Phone, Mail, MapPin, CheckCircle, AlertCircle } from 'lucide-react'
import { Container, Section, Card, Button, Input, Textarea, Select } from '@/components/ui'
import { contactFormSchema, type ContactFormValues, sanitizeFormData } from '@/lib/validations'
import { submitContactForm } from '@/services/api'
import { SITE_CONFIG, CONTACT_SUBJECTS } from '@/lib/constants'

export default function ContactPage() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [ticketId, setTicketId] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  })

  const onSubmit = async (data: ContactFormValues) => {
    setSubmitStatus('loading')
    
    try {
      // Sanitize form data
      const sanitizedData = sanitizeFormData(data)
      
      const response = await submitContactForm({
        name: sanitizedData.name,
        email: sanitizedData.email,
        phone: sanitizedData.phone,
        subject: sanitizedData.subject,
        message: sanitizedData.message,
      })

      if (response.success) {
        setSubmitStatus('success')
        setTicketId(response.ticketId || null)
        reset()
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    }
  }

  return (
    <>
      {/* Hero Section */}
      <Section background="light" padding="lg">
        <Container>
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-center mb-6"
            >
              <div className="w-32 h-32" aria-hidden />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="section-title text-neutral-900 mb-4"
            >
              Get in <span className="text-primary-500">Touch</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="section-subtitle mx-auto"
            >
              Have a question, feedback, or just want to say hi? 
              We&apos;d love to hear from you!
            </motion.p>
          </div>
        </Container>
      </Section>

      {/* Contact Section */}
      <Section background="white" padding="lg">
        <Container>
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-2"
            >
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                {/* Phone */}
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="flex items-start gap-4 p-4 bg-neutral-50 rounded-xl hover:bg-neutral-100 transition-colors group"
                >
                  <div className="p-3 bg-primary-100 rounded-lg group-hover:bg-primary-200 transition-colors">
                    <Phone className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900">Phone</h3>
                    <p className="text-neutral-600">{SITE_CONFIG.phone}</p>
                    <p className="text-sm text-neutral-500">Mon-Sun, 8AM-10PM</p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-start gap-4 p-4 bg-neutral-50 rounded-xl hover:bg-neutral-100 transition-colors group"
                >
                  <div className="p-3 bg-accent-100 rounded-lg group-hover:bg-accent-200 transition-colors">
                    <Mail className="w-6 h-6 text-accent-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900">Email</h3>
                    <p className="text-neutral-600">{SITE_CONFIG.email}</p>
                    <p className="text-sm text-neutral-500">We reply within 24 hours</p>
                  </div>
                </a>

                {/* Locations */}
                <div className="flex items-start gap-4 p-4 bg-neutral-50 rounded-xl">
                  <div className="p-3 bg-green-100 rounded-lg">
                    <MapPin className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900">Locations</h3>
                    <p className="text-neutral-600">6+ outlets in Maharashtra</p>
                    <a href="/locations" className="text-sm text-primary-500 hover:underline">
                      Find your nearest store →
                    </a>
                  </div>
                </div>
              </div>

              {/* FAQ Link */}
              <div className="mt-8 p-4 bg-primary-50 rounded-xl">
                <h3 className="font-semibold text-primary-900 mb-2">
                  Looking for quick answers?
                </h3>
                <p className="text-primary-700 text-sm mb-3">
                  Check out our FAQ section for common questions about menu, 
                  locations, and more.
                </p>
                <Button variant="outline" size="sm">
                  Visit FAQ
                </Button>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-3"
            >
              <Card className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-neutral-900 mb-6">
                  Send us a Message
                </h2>

                {submitStatus === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-neutral-600 mb-4">
                      Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                    </p>
                    {ticketId && (
                      <p className="text-sm text-neutral-500">
                        Reference ID: <span className="font-mono font-medium">{ticketId}</span>
                      </p>
                    )}
                    <Button
                      variant="outline"
                      className="mt-6"
                      onClick={() => setSubmitStatus('idle')}
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {submitStatus === 'error' && (
                      <div className="flex items-center gap-3 p-4 bg-red-50 text-red-700 rounded-xl">
                        <AlertCircle className="w-5 h-5 flex-shrink-0" />
                        <p>Something went wrong. Please try again.</p>
                      </div>
                    )}

                    <div className="grid md:grid-cols-2 gap-6">
                      <Input
                        label="Full Name"
                        placeholder="Your name"
                        error={errors.name?.message}
                        required
                        {...register('name')}
                      />
                      <Input
                        label="Email"
                        type="email"
                        placeholder="your@email.com"
                        error={errors.email?.message}
                        required
                        {...register('email')}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <Input
                        label="Phone (Optional)"
                        type="tel"
                        placeholder="+91 98765 43210"
                        error={errors.phone?.message}
                        {...register('phone')}
                      />
                      <Select
                        label="Subject"
                        placeholder="Select a subject"
                        options={CONTACT_SUBJECTS.map(s => ({ value: s.value, label: s.label }))}
                        error={errors.subject?.message}
                        required
                        {...register('subject')}
                      />
                    </div>

                    <Textarea
                      label="Message"
                      placeholder="How can we help you?"
                      rows={5}
                      error={errors.message?.message}
                      required
                      {...register('message')}
                    />

                    <Button
                      type="submit"
                      size="lg"
                      fullWidth
                      isLoading={submitStatus === 'loading'}
                      rightIcon={<Send className="w-5 h-5" />}
                    >
                      Send Message
                    </Button>
                  </form>
                )}
              </Card>
            </motion.div>
          </div>
        </Container>
      </Section>
    </>
  )
}
