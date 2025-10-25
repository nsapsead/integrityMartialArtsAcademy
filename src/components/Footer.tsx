'use client'

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
              gap: '0.75rem',
              marginBottom: '1.5rem'
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                background: 'white',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 8px rgba(49, 191, 49, 0.3)',
                overflow: 'hidden'
              }}>
                <img
                  src="/images/logo-small.png"
                  alt="Integrity MMA Logo"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain'
                  }}
                />
              </div>
              <div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: 'white',
                  margin: 0
                }}>
                  Integrity MMA
                </h3>
                <p style={{
                  fontSize: '0.875rem',
                  color: '#31bf31',
                  margin: 0
                }}>
                  Martial Arts Academy
                </p>
              </div>
            </div>
            
            <p style={{
              color: '#e8f5e8',
              lineHeight: 1.6,
              marginBottom: '1.5rem'
            }}>
              Professional martial arts training with Craig Donaldson. Brazilian Jiu Jitsu, self-defence, and fitness training in a supportive environment.
            </p>

            {/* Social Links */}
            <div style={{
              display: 'flex',
              gap: '1rem'
            }}>
              <a href="#" style={{
                width: '40px',
                height: '40px',
                background: 'linear-gradient(135deg, #31bf31, #1d301d)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 8px rgba(49, 191, 49, 0.3)'
              }}
              onMouseEnter={(e) => {
                const target = e.target as HTMLElement
                target.style.transform = 'scale(1.1)'
                target.style.boxShadow = '0 6px 12px rgba(49, 191, 49, 0.4)'
              }}
              onMouseLeave={(e) => {
                const target = e.target as HTMLElement
                target.style.transform = 'scale(1)'
                target.style.boxShadow = '0 4px 8px rgba(49, 191, 49, 0.3)'
              }}>
                📘
              </a>
              <a href="#" style={{
                width: '40px',
                height: '40px',
                background: 'linear-gradient(135deg, #31bf31, #1d301d)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 8px rgba(49, 191, 49, 0.3)'
              }}
              onMouseEnter={(e) => {
                const target = e.target as HTMLElement
                target.style.transform = 'scale(1.1)'
                target.style.boxShadow = '0 6px 12px rgba(49, 191, 49, 0.4)'
              }}
              onMouseLeave={(e) => {
                const target = e.target as HTMLElement
                target.style.transform = 'scale(1)'
                target.style.boxShadow = '0 4px 8px rgba(49, 191, 49, 0.3)'
              }}>
                📷
              </a>
              <a href="#" style={{
                width: '40px',
                height: '40px',
                background: 'linear-gradient(135deg, #31bf31, #1d301d)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 8px rgba(49, 191, 49, 0.3)'
              }}
              onMouseEnter={(e) => {
                const target = e.target as HTMLElement
                target.style.transform = 'scale(1.1)'
                target.style.boxShadow = '0 6px 12px rgba(49, 191, 49, 0.4)'
              }}
              onMouseLeave={(e) => {
                const target = e.target as HTMLElement
                target.style.transform = 'scale(1)'
                target.style.boxShadow = '0 4px 8px rgba(49, 191, 49, 0.3)'
              }}>
                📺
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
                 <p style={{
                   color: '#e8f5e8',
                   fontSize: '0.875rem',
                   margin: 0,
                   textAlign: 'center'
                 }}>
                   © {new Date().getFullYear()} Integrity Martial Arts Academy. All rights reserved.
                 </p>
          
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
