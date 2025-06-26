"use client"

import { ArrowRight, Play } from 'lucide-react'

export function HeroSection() {
  const openContactModal = () => {
    const event = new CustomEvent('openContactModal')
    window.dispatchEvent(event)
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-navy via-navy to-blue-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-mint/20 to-transparent"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-mint/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-mint/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-mint/20 border border-mint/30 text-mint mb-8">
            <Play className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">72-Hour Setup Guarantee</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
            Turn Your Reels Into{' '}
            <span className="text-mint">Retainers</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            We build short-form ad funnels that deliver qualified legal leads straight to your inbox — in 72 hours or less.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={openContactModal}
              className="btn-primary text-xl px-10 py-5 group"
            >
              Book Your Setup Call
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button 
              onClick={() => document.querySelector('#how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-white hover:text-mint transition-colors text-lg font-medium flex items-center"
            >
              <Play className="w-5 h-5 mr-2" />
              See How It Works
            </button>
          </div>

          {/* Social Proof */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-gray-400 text-sm mb-4">Trusted by 200+ law firms</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-2xl font-bold">Personal Injury</div>
              <div className="w-px h-6 bg-gray-400"></div>
              <div className="text-2xl font-bold">Family Law</div>
              <div className="w-px h-6 bg-gray-400"></div>
              <div className="text-2xl font-bold">Criminal Defense</div>
              <div className="w-px h-6 bg-gray-400"></div>
              <div className="text-2xl font-bold">Business Law</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}