'use client'

import { useState, useEffect } from 'react'

const Hero = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 100) // Show popup after scrolling 100px
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    // Check initial screen size
    handleResize()

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return (
    <section id="home" style={{
      position: 'relative',
      minHeight: '60vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #1d301d 0%, #0f1a0f 100%)',
      paddingTop: '100px'
    }}>
      {/* Background Image Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'url("/images/hero-background-alt.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity: 0.5
      }}>
        {/* SEO-optimized hidden image for search engines */}
        <img 
          src="/images/hero-background-alt.jpg" 
          alt="Integrity Martial Arts Academy Eltham - Brazilian Jiu Jitsu training facility with students practicing martial arts techniques in modern gym setting"
          style={{
            position: 'absolute',
            width: '1px',
            height: '1px',
            opacity: 0,
            pointerEvents: 'none'
          }}
        />
      </div>
      
      {/* Dark Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, rgba(29, 48, 29, 0.6) 0%, rgba(15, 26, 15, 0.6) 100%)'
      }}></div>

      {/* Special Offer Banner - Hidden on Mobile */}
      <div style={{
        position: 'absolute',
        top: '100px', // Position below the header
        left: '0',
        right: '0',
        background: 'linear-gradient(135deg, #ff6b35, #f7931e)',
        color: 'white',
        padding: '0.75rem',
        textAlign: 'center',
        zIndex: 15,
        animation: 'slideDown 0.8s ease-out, pulse 2s ease-in-out infinite 1s',
        boxShadow: '0 2px 10px rgba(255, 107, 53, 0.4)',
        borderBottom: '2px solid #ff4500',
        display: isMobile ? 'none' : 'block' // Hide on mobile
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          flexWrap: 'wrap'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <span style={{ fontSize: '1.5rem' }}>🔥</span>
            <span style={{ 
              fontSize: '1.25rem', 
              fontWeight: 'bold',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
            }}>
              LIMITED TIME OFFER
            </span>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(255, 255, 255, 0.2)',
            padding: '0.5rem 1rem',
            borderRadius: '25px',
            border: '2px solid rgba(255, 255, 255, 0.3)'
          }}>
            <span style={{ 
              fontSize: '2rem', 
              fontWeight: 'bold',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
            }}>
              5 CLASSES
            </span>
            <span style={{ 
              fontSize: '1.5rem',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
            }}>
              for just
            </span>
            <span style={{ 
              fontSize: '3rem', 
              fontWeight: 'bold',
              color: '#ffeb3b',
              textShadow: '3px 3px 6px rgba(0, 0, 0, 0.5)',
              animation: 'bounce 1s ease-in-out infinite'
            }}>
              $25
            </span>
          </div>
          <a href="#contact" style={{
            background: 'rgba(255, 255, 255, 0.95)',
            color: '#ff6b35',
            padding: '0.75rem 2rem',
            borderRadius: '25px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '1.125rem',
            border: '2px solid white',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
            transition: 'all 0.3s ease',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}
          onMouseEnter={(e) => {
            const target = e.target as HTMLElement
            target.style.transform = 'scale(1.1)'
            target.style.background = '#ff6b35'
            target.style.color = 'white'
            target.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.3)'
          }}
          onMouseLeave={(e) => {
            const target = e.target as HTMLElement
            target.style.transform = 'scale(1)'
            target.style.background = 'rgba(255, 255, 255, 0.95)'
            target.style.color = '#ff6b35'
            target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)'
          }}>
            CLAIM NOW!
          </a>
        </div>
      </div>

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        textAlign: 'center',
        color: 'white',
        maxWidth: '1024px',
        padding: '0 1rem',
        marginTop: isMobile ? '120px' : '180px' // Reduced margin on mobile since banner is hidden
      }}>
              <h1 style={{
                fontSize: 'clamp(3rem, 8vw, 6rem)',
                fontWeight: 'bold',
                marginBottom: '1.5rem',
                textShadow: '4px 4px 8px rgba(0, 0, 0, 0.7)',
                lineHeight: 1.1,
                position: 'relative',
                display: 'inline-block'
              }}>
                 <span style={{
                   position: 'relative',
                   zIndex: 2,
                   color: 'white',
                   background: 'linear-gradient(135deg, #ffffff 0%, #f0f9f0 50%, #ffffff 100%)',
                   WebkitBackgroundClip: 'text',
                   WebkitTextFillColor: 'transparent',
                   backgroundClip: 'text',
                   textShadow: 'none'
                 }}>
                   Train with Integrity
                 </span>
                
                {/* Elegant underline accent */}
                <span style={{
                  position: 'absolute',
                  bottom: '-10px',
                  left: '0',
                  right: '0',
                  height: '4px',
                  background: 'linear-gradient(90deg, transparent 0%, #31bf31 20%, #1d301d 50%, #31bf31 80%, transparent 100%)',
                  borderRadius: '2px',
                  zIndex: 1,
                  boxShadow: '0 0 15px rgba(49, 191, 49, 0.5)'
                }}></span>
                
                {/* Floating accent dots */}
                <span style={{
                  position: 'absolute',
                  top: '-15px',
                  left: '20%',
                  width: '6px',
                  height: '6px',
                  background: '#31bf31',
                  borderRadius: '50%',
                  zIndex: 3,
                  boxShadow: '0 0 10px rgba(49, 191, 49, 0.8)',
                  animation: 'float 2s ease-in-out infinite'
                }}></span>
                
                <span style={{
                  position: 'absolute',
                  top: '-10px',
                  right: '25%',
                  width: '4px',
                  height: '4px',
                  background: '#1d301d',
                  borderRadius: '50%',
                  zIndex: 3,
                  boxShadow: '0 0 8px rgba(29, 48, 29, 0.6)',
                  animation: 'float 2.5s ease-in-out infinite reverse'
                }}></span>
                
                {/* Subtle text glow */}
                <span style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  right: '0',
                  bottom: '0',
                  background: 'radial-gradient(ellipse at center, rgba(49, 191, 49, 0.1) 0%, transparent 60%)',
                  zIndex: 0,
                  animation: 'gentleGlow 4s ease-in-out infinite'
                }}></span>
              </h1>
        
        {/* SEO-optimized H2 subtitle */}
        <h2 style={{
          fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
          fontWeight: '600',
          marginBottom: '1rem',
          color: '#31bf31',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
          lineHeight: 1.2
        }}>
          BJJ, Kickboxing, Combatives & Self Defence
        </h2>

        <p style={{
          fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
          marginBottom: '2rem',
          color: '#e8f5e8',
          maxWidth: '768px',
          margin: '0 auto 2rem auto',
          lineHeight: 1.6
        }}>
          Learn Brazilian Jiu Jitsu, self-defence, and martial arts in Eltham, Victoria with Craig Donaldson. 
          30+ years experience teaching kids, teens, and adults in a supportive family environment.
        </p>



      </div>


      {/* Desktop Floating Special Offer Popup */}
      {isScrolled && !isMobile && (
        <div style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          background: 'linear-gradient(135deg, #ff6b35, #f7931e)',
          color: 'white',
          padding: '1.755rem',
          borderRadius: '12px',
          boxShadow: '0 6px 20px rgba(255, 107, 53, 0.4)',
          zIndex: 1000,
          maxWidth: '409px',
          minWidth: '351px',
          animation: 'slideInUp 0.5s ease-out, pulse 2s ease-in-out infinite 1s',
          border: '2px solid #ff4500',
          cursor: 'pointer'
        }}
        onClick={() => {
          window.open('https://sparkpages.io/?i=_e0zb', '_blank')
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.585rem',
            marginBottom: '0.8775rem'
          }}>
            <span style={{ fontSize: '1.4625rem' }}>🔥</span>
            <span style={{ 
              fontSize: '1.17rem',
              fontWeight: 'bold',
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)'
            }}>
              LIMITED TIME
            </span>
          </div>
          
          <div style={{
            textAlign: 'center',
            marginBottom: '0.8775rem'
          }}>
            <div style={{
              fontSize: '2.0475rem',
              fontWeight: 'bold',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
              marginBottom: '0.2925rem'
            }}>
              5 CLASSES
            </div>
            <div style={{
              fontSize: '1.17rem',
              marginBottom: '0.2925rem'
            }}>
              for just
            </div>
            <div style={{
              fontSize: '2.925rem',
              fontWeight: 'bold',
              color: '#ffeb3b',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
              animation: 'bounce 1s ease-in-out infinite'
            }}>
              $25
            </div>
          </div>

          <div style={{
            background: 'rgba(255, 255, 255, 0.9)',
            color: '#ff6b35',
            padding: '1.35rem 2.7rem',
            borderRadius: '22.5px',
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: '1.8rem',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            const target = e.target as HTMLElement
            target.style.background = '#ff6b35'
            target.style.color = 'white'
          }}
          onMouseLeave={(e) => {
            const target = e.target as HTMLElement
            target.style.background = 'rgba(255, 255, 255, 0.9)'
            target.style.color = '#ff6b35'
          }}>
            CLAIM NOW!
          </div>

          {/* Close button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              setIsScrolled(false)
            }}
            style={{
              position: 'absolute',
              top: '15px',
              right: '15px',
              background: 'rgba(255, 255, 255, 0.2)',
              border: 'none',
              color: 'white',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              cursor: 'pointer',
              fontSize: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onMouseEnter={(e) => {
              const target = e.target as HTMLElement
              target.style.background = 'rgba(255, 255, 255, 0.3)'
            }}
            onMouseLeave={(e) => {
              const target = e.target as HTMLElement
              target.style.background = 'rgba(255, 255, 255, 0.2)'
            }}
          >
            ×
          </button>
        </div>
      )}

      {/* Mobile Floating Special Offer Popup - Always visible on mobile */}
      {isMobile && (
        <div style={{
          position: 'fixed',
          bottom: '0',
          left: '0',
          right: '0',
          background: 'linear-gradient(135deg, #ff6b35, #f7931e)',
          color: 'white',
          padding: '1rem',
          zIndex: 1000,
          animation: 'slideInUp 0.5s ease-out, pulse 2s ease-in-out infinite 1s',
          borderTop: '3px solid #ff4500',
          boxShadow: '0 -4px 20px rgba(255, 107, 53, 0.4)',
          cursor: 'pointer'
        }}
        onClick={() => {
          window.open('https://sparkpages.io/?i=_e0zb', '_blank')
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            maxWidth: '100%'
          }}>
            {/* Left side - Offer details */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              flex: 1
            }}>
              <span style={{ fontSize: '1.5rem' }}>🔥</span>
              <div>
                <div style={{
                  fontSize: '0.9rem',
                  fontWeight: 'bold',
                  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
                  marginBottom: '0.25rem'
                }}>
                  LIMITED TIME
                </div>
                <div style={{
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  5 CLASSES for just <span style={{
                    color: '#ffeb3b',
                    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
                    animation: 'bounce 1s ease-in-out infinite'
                  }}>$25</span>
                </div>
              </div>
            </div>
            
            {/* Right side - CTA button */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.9)',
              color: '#ff6b35',
              padding: '0.75rem 1.25rem',
              borderRadius: '20px',
              fontWeight: 'bold',
              fontSize: '0.9rem',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              transition: 'all 0.3s ease',
              whiteSpace: 'nowrap',
              marginLeft: '0.5rem'
            }}
            onMouseEnter={(e) => {
              const target = e.target as HTMLElement
              target.style.background = 'rgba(255, 255, 255, 1)'
              target.style.transform = 'scale(1.05)'
            }}
            onMouseLeave={(e) => {
              const target = e.target as HTMLElement
              target.style.background = 'rgba(255, 255, 255, 0.9)'
              target.style.transform = 'scale(1)'
            }}>
              CLAIM NOW!
            </div>
          </div>
          
          {/* Close button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              setIsScrolled(false)
            }}
            style={{
              position: 'absolute',
              top: '8px',
              right: '8px',
              background: 'rgba(255, 255, 255, 0.2)',
              border: 'none',
              color: 'white',
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              cursor: 'pointer',
              fontSize: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onMouseEnter={(e) => {
              const target = e.target as HTMLElement
              target.style.background = 'rgba(255, 255, 255, 0.3)'
            }}
            onMouseLeave={(e) => {
              const target = e.target as HTMLElement
              target.style.background = 'rgba(255, 255, 255, 0.2)'
            }}
          >
            ×
          </button>
        </div>
      )}

    </section>
  )
}

export default Hero