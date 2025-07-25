import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Script from 'next/script'
import Image from 'next/image'
import './globals.css'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'LexLinxs Lead Engine™ - Turn Your Reels Into Retainers',
  description: 'We build short-form ad funnels that deliver qualified legal leads straight to your inbox — in 72 hours or less.',
  keywords: 'legal leads, attorney marketing, instagram ads, law firm leads, legal lead generation',
  openGraph: {
    title: 'LexLinxs Lead Engine™ - Turn Your Reels Into Retainers',
    description: 'We build short-form ad funnels that deliver qualified legal leads straight to your inbox — in 72 hours or less.',
    type: 'website',
    url: 'https://lexlinxs.com',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'LexLinxs Lead Engine™',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LexLinxs Lead Engine™ - Turn Your Reels Into Retainers',
    description: 'We build short-form ad funnels that deliver qualified legal leads straight to your inbox — in 72 hours or less.',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const pixelId = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Analytics */}
        {gaId && gaId !== 'GA_MEASUREMENT_ID' && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaId}');
                `,
              }}
            />
          </>
        )}
        {/* Meta Pixel */}
        {pixelId && pixelId !== 'YOUR_PIXEL_ID' && (
          <>
            <Script
              id="meta-pixel"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  !function(f,b,e,v,n,t,s)
                  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                  n.queue=[];t=b.createElement(e);t.async=!0;
                  t.src=v;s=b.getElementsByTagName(e)[0];
                  s.parentNode.insertBefore(t,s)}(window, document,'script',
                  'https://connect.facebook.net/en_US/fbevents.js');
                  fbq('init', '${pixelId}');
                  fbq('track', 'PageView');
                `,
              }}
            />
            <noscript>
              <Image
                height={1}
                width={1}
                style={{ display: 'none' }}
                src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
                alt=""
              />
            </noscript>
          </>
        )}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}>
        {children}
      </body>
    </html>
  )
}