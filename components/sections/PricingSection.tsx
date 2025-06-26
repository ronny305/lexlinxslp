"use client"

import { Check, ArrowRight } from 'lucide-react'

export function PricingSection() {
  const openContactModal = () => {
    const event = new CustomEvent('openContactModal')
    window.dispatchEvent(event)
  }

  const plans = [
    {
      name: 'Starter',
      price: '$997',
      billing: 'setup + $30/lead',
      description: 'Perfect for solo attorneys testing the waters',
      features: [
        'Custom video ad creation',
        'Smart quiz funnel setup',
        'Lead delivery to email',
        'Basic geo-targeting',
        'Performance analytics',
        '72-hour setup guarantee'
      ],
      cta: 'Book Setup',
      popular: false
    },
    {
      name: 'Growth',
      price: '$1,497',
      billing: 'per month',
      description: 'Best for established firms scaling their lead generation',
      features: [
        'Everything in Starter',
        'Multiple ad variations',
        'Advanced lead scoring',
        'WhatsApp + CRM integration',
        'A/B testing optimization',
        'Priority support',
        'Monthly strategy calls',
        'Competitor analysis'
      ],
      cta: 'Book Setup',
      popular: true
    },
    {
      name: 'Agency Collab',
      price: 'Custom',
      billing: 'pricing',
      description: 'For marketing agencies and large firms',
      features: [
        'Everything in Growth',
        'White-label solutions',
        'Multi-location support',
        'Custom integrations',
        'Dedicated account manager',
        'Revenue sharing options',
        'Co-branded materials',
        'Training & certification'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ]

  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your firm's growth goals. No hidden fees, no long-term contracts.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-white rounded-2xl border-2 p-8 ${
                plan.popular 
                  ? 'border-mint shadow-xl scale-105' 
                  : 'border-gray-200 hover:border-mint hover:shadow-lg'
              } transition-all duration-300`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-mint text-white px-6 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-navy mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-navy">{plan.price}</span>
                  <span className="text-gray-600 ml-2">{plan.billing}</span>
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-mint flex-shrink-0 mt-0.5 mr-3" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                onClick={openContactModal}
                className={`w-full py-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center ${
                  plan.popular
                    ? 'bg-mint text-white hover:bg-mint/90 shadow-lg hover:shadow-xl'
                    : 'bg-gray-100 text-navy hover:bg-mint hover:text-white border-2 border-transparent hover:border-mint'
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom guarantee */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-gray-50 rounded-2xl p-6">
            <div className="w-12 h-12 bg-mint/20 rounded-full flex items-center justify-center">
              <Check className="w-6 h-6 text-mint" />
            </div>
            <div className="text-left">
              <p className="font-semibold text-navy">72-Hour Setup Guarantee</p>
              <p className="text-gray-600">If we don't have your funnel live in 72 hours, setup is free</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}