"use client"

import { useState, useEffect } from 'react'
import { X, CheckCircle, AlertCircle } from 'lucide-react'

interface FormData {
  name: string
  email: string
  phone: string
  practiceArea: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  practiceArea?: string
}

export function ContactFormModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<FormErrors>({})
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    practiceArea: '',
    message: ''
  })

  const practiceAreas = [
    'Personal Injury',
    'Family Law',
    'Criminal Defense',
    'Business Law',
    'Real Estate',
    'Immigration',
    'Estate Planning',
    'Employment Law',
    'Other'
  ]

  useEffect(() => {
    const handleOpenModal = () => {
      setIsOpen(true)
      document.body.style.overflow = 'hidden'
    }

    const handleCloseModal = () => {
      setIsOpen(false)
      document.body.style.overflow = 'unset'
    }

    window.addEventListener('openContactModal', handleOpenModal)
    
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleCloseModal()
    }
    
    if (isOpen) {
      window.addEventListener('keydown', handleEscape)
    }

    return () => {
      window.removeEventListener('openContactModal', handleOpenModal)
      window.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^[\+]?[\d\s\-\(\)]+$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number'
    }

    if (!formData.practiceArea) {
      newErrors.practiceArea = 'Please select your practice area'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      // Track form submission
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'form_submit', {
          event_category: 'engagement',
          event_label: 'contact_form'
        })
      }

      if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', 'Lead', {
          content_name: 'Contact Form',
          content_category: 'lead_generation'
        })
      }

      // Here you would integrate with your email service (EmailJS, etc.)
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 2000))

      setIsSubmitted(true)
      
      // Reset form after successful submission
      setTimeout(() => {
        setIsOpen(false)
        setIsSubmitted(false)
        setFormData({
          name: '',
          email: '',
          phone: '',
          practiceArea: '',
          message: ''
        })
        document.body.style.overflow = 'unset'
      }, 3000)

    } catch (error) {
      console.error('Form submission error:', error)
      // Handle error state here
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const closeModal = () => {
    setIsOpen(false)
    document.body.style.overflow = 'unset'
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4">
        {/* Backdrop */}
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          onClick={closeModal}
        ></div>

        {/* Modal */}
        <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full mx-4">
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute -top-4 -right-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow z-10"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>

          <div className="p-8">
            {!isSubmitted ? (
              <>
                {/* Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-navy mb-2">
                    Get Your Setup Call
                  </h3>
                  <p className="text-gray-600">
                    Let&apos;s discuss how LexLinxs can transform your social media into a lead generation machine
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-mint focus:border-mint outline-none transition-colors ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your full name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-mint focus:border-mint outline-none transition-colors ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your email address"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-mint focus:border-mint outline-colors ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your phone number"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Practice Area */}
                  <div>
                    <label htmlFor="practiceArea" className="block text-sm font-medium text-gray-700 mb-2">
                      Practice Area *
                    </label>
                    <select
                      id="practiceArea"
                      name="practiceArea"
                      value={formData.practiceArea}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-mint focus:border-mint outline-none transition-colors ${
                        errors.practiceArea ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select your practice area</option>
                      {practiceAreas.map((area) => (
                        <option key={area} value={area}>{area}</option>
                      ))}
                    </select>
                    {errors.practiceArea && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.practiceArea}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Tell us about your current marketing (optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mint focus:border-mint outline-none transition-colors resize-none"
                      placeholder="What marketing are you currently doing? What challenges are you facing?"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Submitting...
                      </div>
                    ) : (
                      'Book My Setup Call'
                    )}
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    By submitting this form, you agree to our Terms of Service and Privacy Policy.
                  </p>
                </form>
              </>
            ) : (
              /* Success State */
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-mint/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-mint" />
                </div>
                <h3 className="text-2xl font-bold text-navy mb-4">
                  Thank You!
                </h3>
                <p className="text-gray-600 mb-6">
                  We&apos;ve received your request and will contact you within 24 hours to schedule your setup call.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600">
                    <strong>What&apos;s next?</strong><br />
                    Our team will review your practice area and current marketing, then reach out to schedule a personalized strategy session.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

// Extend window object for analytics
declare global {
  interface Window {
    gtag: (...args: any[]) => void
    fbq: (...args: any[]) => void
  }
}