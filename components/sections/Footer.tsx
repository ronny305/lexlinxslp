"use client"

import { Instagram, Linkedin, Mail, Phone } from 'lucide-react'
import Image from 'next/image'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { name: 'About', href: '#about' },
      { name: 'How It Works', href: '#how-it-works' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Contact', href: '#contact' }
    ],
    legal: [
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'Disclaimer', href: '/disclaimer' }
    ],
    support: [
      { name: 'Help Center', href: '/help' },
      { name: 'Documentation', href: '/docs' },
      { name: 'Status', href: '/status' },
      { name: 'Book a Call', href: '#contact' }
    ]
  }

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/lexlinxs' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/lexlinxs' }
  ]

  return (
    <footer className="bg-navy text-white">
      <div className="container">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <Image
                src="/logo.svg"
                alt="LexLinxs Lead Engine Logo"
                width={240}
                height={48}
                className="h-12 w-auto mb-4"
              />
              <p className="text-gray-300 mb-6 leading-relaxed">
                Turn your social media content into qualified legal leads with our proven short-form video funnels.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-mint mr-3" />
                  <span className="text-gray-300">hello@lexlinxs.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-mint mr-3" />
                  <span className="text-gray-300">(555) 123-4567</span>
                </div>
              </div>
            </div>

            {/* Links Columns */}
            <div className="lg:col-span-3 grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-3">
                  {footerLinks.company.map((link) => (
                    <li key={link.name}>
                      <a 
                        href={link.href} 
                        className="text-gray-300 hover:text-mint transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Legal</h4>
                <ul className="space-y-3">
                  {footerLinks.legal.map((link) => (
                    <li key={link.name}>
                      <a 
                        href={link.href} 
                        className="text-gray-300 hover:text-mint transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Support</h4>
                <ul className="space-y-3">
                  {footerLinks.support.map((link) => (
                    <li key={link.name}>
                      <a 
                        href={link.href} 
                        className="text-gray-300 hover:text-mint transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} LexLinxs Lead Engine™. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm mr-2">Follow us:</span>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-mint transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 pt-8 border-t border-gray-700 text-xs text-gray-400 leading-relaxed">
            <p>
              <strong>Disclaimer:</strong> The information on this website is for general information purposes only. 
              Nothing on this site should be taken as legal advice for any individual case or situation. 
              This information is not intended to create, and receipt or viewing does not constitute, an attorney-client relationship. 
              Results may vary and past performance does not guarantee future results.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}