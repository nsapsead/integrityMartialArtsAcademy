'use client'

import Image from 'next/image'

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Contact', href: '#contact' }
  ]

  const programs = [
    { name: 'Kids Martial Arts', href: '#programs' },
    { name: 'Teen Martial Arts', href: '#programs' },
    { name: 'Adult BJJ', href: '#programs' },
    { name: 'Integrity Combatives', href: '#programs' },
    { name: 'Muay Thai', href: '#programs' },
    { name: 'Private Lessons', href: '#programs' }
  ]

  const contactInfo = {
    address: '2/30 Bridge Street, Eltham, Victoria 3095',
    phone: '0403 990 791',
    email: 'train@integritymartialartsacademy.com.au',
    hours: 'Mon-Fri: 6:00 PM - 9:00 PM\nSat: 9:00 AM - 12:00 PM\nSun: Closed'
  }

  return (
    <footer style={{
      background: 'linear-gradient(135deg, #1d301d 0%, #0f1a0f 100%)',
      color: 'white',
      padding: '3rem 1rem 2rem 1rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'url("/images/hero-background-brick.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.05,
        zIndex: 0
      }}></div>

      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1
      }}>
        {/* Main Footer Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem'
        }}>
          {/* Academy Info */}
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              marginBottom: '1.5rem'
            }}>
              <Image
                src="/images/logo.png"
                alt="Integrity MMA Logo"
                width={104}
                height={104}
                style={{
                  objectFit: 'contain'
                }}
              />
            </div>
            
            <p style={{
              color: '#e8f5e8',
              lineHeight: 1.6,
              marginTop: '0.5rem',
              marginBottom: '1.5rem'
            }}>
              Professional martial arts training with Craig Donaldson. Brazilian Jiu Jitsu, self-defence, and fitness training in a supportive environment.
            </p>

            {/* Social Links */}
            <div style={{
              display: 'flex',
              gap: '1rem'
            }}>
              {/* Facebook */}
              <a href="https://www.facebook.com/integritybjj" target="_blank" rel="noopener noreferrer" style={{
                width: '40px',
                height: '40px',
                background: 'linear-gradient(135deg, #1877f2, #0d47a1)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 8px rgba(24, 119, 242, 0.3)'
              }}
              onMouseEnter={(e) => {
                const target = e.target as HTMLElement
                target.style.transform = 'scale(1.1)'
                target.style.boxShadow = '0 6px 12px rgba(24, 119, 242, 0.4)'
              }}
              onMouseLeave={(e) => {
                const target = e.target as HTMLElement
                target.style.transform = 'scale(1)'
                target.style.boxShadow = '0 4px 8px rgba(24, 119, 242, 0.3)'
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              
              {/* Instagram */}
              <a href="https://www.instagram.com/integritymartialartsacademy/" target="_blank" rel="noopener noreferrer" style={{
                width: '40px',
                height: '40px',
                background: 'linear-gradient(135deg, #e4405f, #833ab4, #fd1d1d)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 8px rgba(228, 64, 95, 0.3)'
              }}
              onMouseEnter={(e) => {
                const target = e.target as HTMLElement
                target.style.transform = 'scale(1.1)'
                target.style.boxShadow = '0 6px 12px rgba(228, 64, 95, 0.4)'
              }}
              onMouseLeave={(e) => {
                const target = e.target as HTMLElement
                target.style.transform = 'scale(1)'
                target.style.boxShadow = '0 4px 8px rgba(228, 64, 95, 0.3)'
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              fontSize: '1.25rem',
              fontWeight: 'bold',
              color: 'white',
              marginBottom: '1.5rem'
            }}>
              Quick Links
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              {quickLinks.map((link, index) => (
                <li key={index} style={{ marginBottom: '0.75rem' }}>
                  <a href={link.href} style={{
                    color: '#e8f5e8',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                    fontSize: '0.875rem'
                  }}
                  onMouseEnter={(e) => {
                    const target = e.target as HTMLElement
                    target.style.color = '#31bf31'
                  }}
                  onMouseLeave={(e) => {
                    const target = e.target as HTMLElement
                    target.style.color = '#e8f5e8'
                  }}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 style={{
              fontSize: '1.25rem',
              fontWeight: 'bold',
              color: 'white',
              marginBottom: '1.5rem'
            }}>
              Our Programs
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              {programs.map((program, index) => (
                <li key={index} style={{ marginBottom: '0.75rem' }}>
                  <a href={program.href} style={{
                    color: '#e8f5e8',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                    fontSize: '0.875rem'
                  }}
                  onMouseEnter={(e) => {
                    const target = e.target as HTMLElement
                    target.style.color = '#31bf31'
                  }}
                  onMouseLeave={(e) => {
                    const target = e.target as HTMLElement
                    target.style.color = '#e8f5e8'
                  }}>
                    {program.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{
              fontSize: '1.25rem',
              fontWeight: 'bold',
              color: 'white',
              marginBottom: '1.5rem'
            }}>
              Contact Info
            </h4>
            
            <div style={{
              marginBottom: '1.5rem'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.75rem',
                marginBottom: '1rem'
              }}>
                <span style={{ fontSize: '1.25rem' }}>📍</span>
                <div>
                  <p style={{
                    color: '#e8f5e8',
                    margin: 0,
                    fontSize: '0.875rem',
                    lineHeight: 1.4
                  }}>
                    {contactInfo.address}
                  </p>
                </div>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '1rem'
              }}>
                <span style={{ fontSize: '1.25rem' }}>📞</span>
                <a href={`tel:${contactInfo.phone}`} style={{
                  color: '#31bf31',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  fontWeight: '600'
                }}>
                  {contactInfo.phone}
                </a>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '1rem'
              }}>
                <span style={{ fontSize: '1.25rem' }}>✉️</span>
                <a href={`mailto:${contactInfo.email}`} style={{
                  color: '#31bf31',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  fontWeight: '600'
                }}>
                  {contactInfo.email}
                </a>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.75rem'
              }}>
                <span style={{ fontSize: '1.25rem' }}>🕒</span>
                <div>
                  <p style={{
                    color: '#e8f5e8',
                    margin: 0,
                    fontSize: '0.875rem',
                    lineHeight: 1.4,
                    whiteSpace: 'pre-line'
                  }}>
                    {contactInfo.hours}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>


        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(49, 191, 49, 0.2)',
          paddingTop: '2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2rem',
            width: '100%',
            position: 'relative'
          }}>
            {/* Copyright - Center */}
            <p style={{
              color: '#e8f5e8',
              fontSize: '0.875rem',
              margin: 0,
              textAlign: 'center'
            }}>
              © {new Date().getFullYear()} Integrity Martial Arts Academy. All rights reserved.
            </p>
            
            {/* NerdJitsu Logo - Right side */}
            <a 
              href="https://www.nerdjitsu.com.au" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                transition: 'transform 0.3s ease, opacity 0.3s ease',
                opacity: 0.8
              }}
              onMouseEnter={(e) => {
                const target = e.target as HTMLElement
                target.style.transform = 'translateY(-2px)'
                target.style.opacity = '0.9'
              }}
              onMouseLeave={(e) => {
                const target = e.target as HTMLElement
                target.style.transform = 'translateY(0)'
                target.style.opacity = '0.8'
              }}
            >
              <Image
                src="/images/nerdjitsulogotransparent.png"
                alt="NerdJitsu - Web Development"
                width={48}
                height={36}
                style={{
                  objectFit: 'contain'
                }}
              />
            </a>
          </div>
          
          <div style={{
            display: 'flex',
            gap: '2rem',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            <a href="#" style={{
              color: '#e8f5e8',
              textDecoration: 'none',
              fontSize: '0.75rem',
              transition: 'color 0.2s ease'
            }}
            onMouseEnter={(e) => {
              const target = e.target as HTMLElement
              target.style.color = '#31bf31'
            }}
            onMouseLeave={(e) => {
              const target = e.target as HTMLElement
              target.style.color = '#e8f5e8'
            }}>
              Privacy Policy
            </a>
            <a href="#" style={{
              color: '#e8f5e8',
              textDecoration: 'none',
              fontSize: '0.75rem',
              transition: 'color 0.2s ease'
            }}
            onMouseEnter={(e) => {
              const target = e.target as HTMLElement
              target.style.color = '#31bf31'
            }}
            onMouseLeave={(e) => {
              const target = e.target as HTMLElement
              target.style.color = '#e8f5e8'
            }}>
              Terms of Service
            </a>
            <a href="#" style={{
              color: '#e8f5e8',
              textDecoration: 'none',
              fontSize: '0.75rem',
              transition: 'color 0.2s ease'
            }}
            onMouseEnter={(e) => {
              const target = e.target as HTMLElement
              target.style.color = '#31bf31'
            }}
            onMouseLeave={(e) => {
              const target = e.target as HTMLElement
              target.style.color = '#e8f5e8'
            }}>
              Refund Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
