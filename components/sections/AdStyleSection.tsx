"use client"

import { useState } from 'react'
import { Play, X, User, Users, Bot, Star } from 'lucide-react'

export function AdStyleSection() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  const adStyles = [
    {
      id: 'lawyer-talking-head',
      title: 'Lawyer Talking Head',
      description: 'Professional attorney speaking directly to camera about your expertise and results.',
      icon: User,
      preview: '/video-placeholder.mp4',
      features: ['Builds trust', 'Shows expertise', 'Personal connection']
    },
    {
      id: 'consumer-ugc',
      title: 'Consumer UGC',
      description: 'Authentic user-generated content that feels native to social media feeds.',
      icon: Users,
      preview: '/video-placeholder.mp4',
      features: ['High engagement', 'Native feel', 'Cost-effective']
    },
    {
      id: 'ai-avatar',
      title: 'AI Avatar',
      description: 'AI-generated spokesperson delivering your message with perfect consistency.',
      icon: Bot,
      preview: '/video-placeholder.mp4',
      features: ['Always available', 'Consistent delivery', 'Multilingual']
    },
    {
      id: 'past-client',
      title: 'Past Client',
      description: 'Real client testimonials showcasing successful case outcomes.',
      icon: Star,
      preview: '/video-placeholder.mp4',
      features: ['Social proof', 'Real results', 'Authentic stories']
    }
  ]

  const openVideoModal = (videoId: string) => {
    setSelectedVideo(videoId)
  }

  const closeVideoModal = () => {
    setSelectedVideo(null)
  }

  return (
    <section id="ad-examples" className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">
            Pick Your Ad Style
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the video format that best represents your firm and resonates with your ideal clients
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {adStyles.map((style) => (
            <div key={style.id} className="group bg-white rounded-2xl border border-gray-200 hover:border-mint hover:shadow-xl transition-all duration-300 overflow-hidden">
              {/* Video Preview Area */}
              <div className="relative h-48 bg-gradient-to-br from-navy to-blue-900 flex items-center justify-center">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <style.icon className="w-8 h-8 text-white" />
                  </div>
                  <button
                    onClick={() => openVideoModal(style.id)}
                    className="flex items-center justify-center w-12 h-12 bg-mint rounded-full text-white hover:bg-mint/90 transition-colors group-hover:scale-110 transform duration-200"
                  >
                    <Play className="w-5 h-5 ml-0.5" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-navy mb-2">
                  {style.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {style.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-2">
                  {style.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-mint rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => openVideoModal(style.id)}
                  className="w-full mt-4 py-2 text-mint font-medium hover:text-mint/80 transition-colors text-sm flex items-center justify-center"
                >
                  <Play className="w-4 h-4 mr-1" />
                  Preview Example
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
            <div className="relative bg-white rounded-2xl max-w-2xl w-full">
              <button
                onClick={closeVideoModal}
                className="absolute -top-4 -right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <X className="w-4 h-4" />
              </button>
              
              <div className="p-6">
                <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
                  <div className="text-center text-white">
                    <Play className="w-16 h-16 mx-auto mb-4 opacity-60" />
                    <p className="text-lg font-medium">Sample Video Preview</p>
                    <p className="text-gray-400 text-sm mt-2">
                      {adStyles.find(s => s.id === selectedVideo)?.title}
                    </p>
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <button
                    onClick={() => {
                      closeVideoModal()
                      const event = new CustomEvent('openContactModal')
                      window.dispatchEvent(event)
                    }}
                    className="btn-primary"
                  >
                    Get This Style for Your Firm
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}