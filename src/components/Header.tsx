'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50)
      }
      
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'Programs', href: '#programs' },
    { name: 'About', href: '#about' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
        <header style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: 'all 0.3s ease',
          background: 'rgba(29, 48, 29, 0.95)', // Consistent background for both states
          backdropFilter: 'blur(10px)',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3)'
        }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0',
          position: 'relative'
        }}>
             <div style={{
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'space-between',
               height: isScrolled ? '70px' : '100px',
               padding: '0 2rem',
               position: 'relative',
               transition: 'height 0.3s ease'
             }}>
          {/* Logo - Centered */}
               <Image 
                 src={isScrolled ? "/images/logo-small.png" : "/images/logo.png"} 
                 alt="Integrity MMA Logo" 
                 width={isScrolled ? 60 : 80}
                 height={isScrolled ? 60 : 80}
                 style={{
                   objectFit: 'contain',
                   transition: 'all 0.3s ease'
                 }}
               />

          {/* Navigation */}
          <nav style={{
            display: isClient && (typeof window !== 'undefined' ? window.innerWidth : 1024) >= 1024 ? 'flex' : 'none',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  transition: 'all 0.3s ease',
                  padding: '0.75rem 1rem',
                  borderRadius: '0.5rem',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  const target = e.target as HTMLElement
                  target.style.color = '#31bf31'
                  target.style.background = 'rgba(49, 191, 49, 0.1)'
                  target.style.transform = 'translateY(-1px)'
                }}
                onMouseLeave={(e) => {
                  const target = e.target as HTMLElement
                  target.style.color = 'white'
                  target.style.background = 'transparent'
                  target.style.transform = 'translateY(0)'
                }}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div style={{
            display: isClient && (typeof window !== 'undefined' ? window.innerWidth : 1024) >= 1024 ? 'flex' : 'none',
            alignItems: 'center'
          }}>
                 <a
                   href="https://sparkpages.io/?i=_e0zb"
                   target="_blank"
              style={{
                background: 'linear-gradient(135deg, #31bf31, #1d301d)',
                color: 'white',
                padding: '0.75rem 1.5rem',
                borderRadius: '0.75rem',
                textDecoration: 'none',
                fontWeight: '700',
                fontSize: '0.9rem',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 4px 15px rgba(49, 191, 49, 0.3), 0 2px 5px rgba(0, 0, 0, 0.1)',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                const target = e.target as HTMLElement
                target.style.background = 'linear-gradient(135deg, #1d301d, #31bf31)'
                target.style.transform = 'translateY(-2px) scale(1.05)'
                target.style.boxShadow = '0 8px 25px rgba(49, 191, 49, 0.4), 0 4px 10px rgba(0, 0, 0, 0.15)'
              }}
              onMouseLeave={(e) => {
                const target = e.target as HTMLElement
                target.style.background = 'linear-gradient(135deg, #31bf31, #1d301d)'
                target.style.transform = 'translateY(0) scale(1)'
                target.style.boxShadow = '0 4px 15px rgba(49, 191, 49, 0.3), 0 2px 5px rgba(0, 0, 0, 0.1)'
              }}
            >
              <span style={{
                position: 'relative',
                zIndex: 2,
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem'
              }}>
                Start Trial
                <span style={{
                  fontSize: '0.8em',
                  transition: 'transform 0.3s ease'
                }}>→</span>
              </span>
            </a>
          </div>

        </div>
      </div>
    </header>
  )
}

export default Header