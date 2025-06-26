"use client"

import { Video, Brain, Mail } from 'lucide-react'

export function HowItWorksSection() {
  const steps = [
    {
      icon: Video,
      number: '01',
      title: 'Launch a short video ad',
      description: 'We create scroll-stopping ads using your existing content or our proven templates that capture attention in the first 3 seconds.'
    },
    {
      icon: Brain,
      number: '02',
      title: 'Funnel filters and qualifies',
      description: 'Our smart quiz funnel asks the right questions to separate tire-kickers from serious prospects ready to hire.'
    },
    {
      icon: Mail,
      number: '03',
      title: 'Get leads in real-time',
      description: 'Qualified leads are delivered instantly to your WhatsApp, CRM, or email with all the details you need to close.'
    }
  ]

  return (
    <section id="how-it-works" className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From video to verified leads in three simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-px bg-gradient-to-r from-mint to-mint/30 z-0"></div>
              )}
              
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-mint text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-mint/10 rounded-xl flex items-center justify-center mx-auto mb-6 mt-4">
                  <step.icon className="w-8 h-8 text-mint" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-navy mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <button
            onClick={() => {
              const event = new CustomEvent('openContactModal')
              window.dispatchEvent(event)
            }}
            className="btn-primary"
          >
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  )
}