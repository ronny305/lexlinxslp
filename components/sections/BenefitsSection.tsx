"use client"

import { MapPin, Zap, MessageSquare, TrendingUp } from 'lucide-react'

export function BenefitsSection() {
  const benefits = [
    {
      icon: MapPin,
      title: 'Geo-targeted & compliant',
      description: 'Target specific counties, cities, or practice areas while staying 100% compliant with advertising rules.'
    },
    {
      icon: Zap,
      title: 'Powered by LexLinxs smart quiz funnel',
      description: 'Our proprietary funnel technology qualifies leads based on case value, timeline, and readiness to hire.'
    },
    {
      icon: MessageSquare,
      title: 'Delivered to WhatsApp, CRM, or email',
      description: 'Get instant notifications via your preferred channel with all lead details and contact information.'
    },
    {
      icon: TrendingUp,
      title: 'Works on Instagram, TikTok, Reels & Stories',
      description: 'Multi-platform campaigns ensure maximum reach across all major short-form video platforms.'
    }
  ]

  return (
    <section className="section-padding bg-navy text-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Why LexLinxs Lead Engine™ Works
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Built specifically for attorneys who want more than just views – you want cases
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start space-x-4">
              {/* Icon */}
              <div className="flex-shrink-0 w-12 h-12 bg-mint/20 rounded-xl flex items-center justify-center">
                <benefit.icon className="w-6 h-6 text-mint" />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <span className="text-mint mr-2">✓</span>
                  {benefit.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-white/10 rounded-2xl p-6">
            <div className="text-left">
              <p className="text-lg font-semibold text-mint">Ready to get started?</p>
              <p className="text-gray-300">Setup takes just 72 hours</p>
            </div>
            <button
              onClick={() => {
                const event = new CustomEvent('openContactModal')
                window.dispatchEvent(event)
              }}
              className="btn-primary"
            >
              Book Setup Call
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}