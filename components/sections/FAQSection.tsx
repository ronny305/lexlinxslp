"use client"

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "How long does setup take?",
      answer: "We guarantee your funnel will be live within 72 hours. Most setups are completed in 24-48 hours. Our streamlined process includes video creation, funnel setup, and lead delivery configuration."
    },
    {
      question: "Can I use my own video?",
      answer: "Absolutely! If you have existing video content that performs well, we can integrate it into your funnel. We'll also optimize it for conversion and create additional variations if needed."
    },
    {
      question: "How do you filter leads?",
      answer: "Our smart quiz funnel asks targeted questions about case type, timeline, budget, and injury severity (for PI cases). We score leads based on your criteria and only send you prospects that meet your standards."
    },
    {
      question: "What platforms do you advertise on?",
      answer: "We create campaigns for Instagram Reels, Instagram Stories, TikTok, and Facebook. Our content is optimized for each platform's unique audience and algorithm requirements."
    },
    {
      question: "Do you guarantee results?",
      answer: "While we can't guarantee specific case outcomes, we do guarantee setup within 72 hours and that you'll receive qualified leads. Most clients see their first leads within 48 hours of going live."
    },
    {
      question: "Is this compliant with bar association rules?",
      answer: "Yes, all our ads and funnels are designed to be compliant with state bar association advertising rules. We stay updated on regulations and review all content for compliance before launch."
    }
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about LexLinxs Lead Engine™
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-navy pr-4">{faq.question}</span>
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-mint flex-shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-mint flex-shrink-0" />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Still have questions CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <button
            onClick={() => {
              const event = new CustomEvent('openContactModal')
              window.dispatchEvent(event)
            }}
            className="btn-secondary"
          >
            Book a Call to Learn More
          </button>
        </div>
      </div>
    </section>
  )
}