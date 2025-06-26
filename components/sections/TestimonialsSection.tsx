"use client"

import { Star, Quote } from 'lucide-react'

export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "$15K case from the first 3 leads",
      author: "Sarah Martinez",
      firm: "Martinez Personal Injury Law",
      location: "Phoenix, AZ",
      rating: 5,
      details: "Within 48 hours of launching our LexLinxs funnel, we had 3 qualified leads. The first one turned into a $15,000 case."
    },
    {
      quote: "Finally, social media that actually converts",
      author: "Michael Chen",
      firm: "Chen Family Law",
      location: "San Diego, CA",
      rating: 5,
      details: "I was getting tons of views on my Reels but no clients. LexLinxs changed everything. Now every video works for my business."
    },
    {
      quote: "Best investment I've made for my practice",
      author: "Jennifer Rodriguez",
      firm: "Rodriguez Criminal Defense",
      location: "Miami, FL",
      rating: 5,
      details: "The setup was seamless and the results speak for themselves. I'm booked solid with quality clients from Instagram."
    }
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">
            Real Results from Real Attorneys
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how law firms are turning their social media into a client acquisition machine
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8 w-8 h-8 bg-mint rounded-full flex items-center justify-center">
                <Quote className="w-4 h-4 text-white" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4 mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg font-bold text-navy mb-4">
                "{testimonial.quote}"
              </blockquote>

              {/* Details */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {testimonial.details}
              </p>

              {/* Author */}
              <div className="border-t border-gray-200 pt-4">
                <div className="font-semibold text-navy">{testimonial.author}</div>
                <div className="text-sm text-gray-600">{testimonial.firm}</div>
                <div className="text-sm text-mint">{testimonial.location}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof Stats */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-mint mb-2">200+</div>
              <div className="text-gray-600">Law Firms Trust Us</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-mint mb-2">72hrs</div>
              <div className="text-gray-600">Average Setup Time</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-mint mb-2">$12K</div>
              <div className="text-gray-600">Average First Case Value</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}