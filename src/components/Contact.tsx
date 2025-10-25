'use client'

import { useRef, useEffect } from 'react'
import { useInView } from 'framer-motion'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  useEffect(() => {
    // Load the Spark form script
    const script = document.createElement('script')
    script.src = 'https://app.sparkmembership.com/wf/v.ashx?lid=3821'
    script.async = true
    document.head.appendChild(script)

    return () => {
      // Cleanup script on component unmount
      const existingScript = document.querySelector('script[src="https://app.sparkmembership.com/wf/v.ashx?lid=3821"]')
      if (existingScript) {
        document.head.removeChild(existingScript)
      }
    }
  }, [])

  return (
    <section id="contact" style={{
      padding: '3rem 1rem',
      background: 'linear-gradient(135deg, #f8f9fa 0%, #e8f5e8 100%)'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto'
      }}>
        {/* Section Header */}
        <div ref={ref} style={{
          textAlign: 'center',
          marginBottom: '4rem'
        }}>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
            fontWeight: 'bold',
            marginBottom: '1.5rem',
            background: 'linear-gradient(135deg, #31bf31, #1d301d)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s ease'
          }}>
            Contact Integrity Martial Arts Academy in Eltham
          </h2>
          <p style={{
            fontSize: '1.25rem',
            color: '#888888',
            maxWidth: '768px',
            margin: '0 auto',
            lineHeight: 1.6,
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s ease 0.2s'
          }}>
            Ready to start your martial arts journey? Get in touch with us today!
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem',
          alignItems: 'start'
        }}>
          {/* Google Map */}
          <div style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.6s ease 0.4s'
          }}>
            <h3 style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              color: '#1d301d',
              marginBottom: '2rem'
            }}>
              Find Us
            </h3>
            
            {/* Google Map Embed */}
            <div style={{
              background: 'white',
              borderRadius: '0.75rem',
              boxShadow: '0 4px 6px rgba(49, 191, 49, 0.1)',
              border: '1px solid rgba(49, 191, 49, 0.1)',
              overflow: 'hidden'
            }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1234567890!2d145.1234567!3d-37.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s2%2F30%20Bridge%20Street%2C%20Eltham%20VIC%203095!5e0!3m2!1sen!2sau!4v1234567890123!5m2!1sen!2sau"
                width="100%"
                height="400"
                style={{
                  border: 0,
                  borderRadius: '0.75rem'
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                       title="Integrity Martial Arts Academy Location - 2/30 Bridge Street Eltham VIC 3095"
              ></iframe>
            </div>

            {/* Address Below Map */}
            <div style={{
              marginTop: '1.5rem',
              background: 'white',
              borderRadius: '0.75rem',
              boxShadow: '0 4px 6px rgba(49, 191, 49, 0.1)',
              border: '1px solid rgba(49, 191, 49, 0.1)',
              padding: '1rem 1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem'
            }}>
              <div style={{
                fontSize: '1.5rem',
                color: '#31bf31'
              }}>📍</div>
              <div style={{
                textAlign: 'left'
              }}>
                <h4 style={{
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  color: '#1d301d',
                  margin: '0 0 0.25rem 0'
                }}>
                  Integrity Martial Arts Academy
                </h4>
                <p style={{
                  color: '#888888',
                  fontSize: '0.875rem',
                  margin: 0,
                  lineHeight: 1.3
                }}>
                  2/30 Bridge Street, Eltham VIC 3095
                </p>
              </div>
            </div>
          </div>

          {/* Spark Contact Form */}
          <div style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.6s ease 0.6s'
          }}>
            <div style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '1rem',
              boxShadow: '0 10px 25px rgba(49, 191, 49, 0.1)',
              border: '1px solid rgba(49, 191, 49, 0.1)'
            }}>
              <h3 style={{
                fontSize: '1.75rem',
                fontWeight: 'bold',
                color: '#1d301d',
                marginBottom: '1rem',
                textAlign: 'center'
              }}>
                Contact us
              </h3>
              <p style={{
                color: '#888888',
                fontSize: '1rem',
                textAlign: 'center',
                marginBottom: '2rem'
              }}>
                Please fill in your information below and we will be in touch
              </p>

              {/* Spark form start */}
              <div className="spark-form-wrap" style={{
                maxWidth: '100%'
              }}>
                <div id="ab-optin-container">
                  <form action="https://app.sparkmembership.com/wf/process.aspx" method="post" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem'
                  }}>
                    <div style={{ display: 'none' }}>
                      <input type="hidden" name="ab_locationID" id="ab_locationID" value="6222" />
                      <input type="hidden" name="ab_fid" id="ab_fid" value="38989" />
                      <input type="hidden" name="apiKey" id="apiKey" value="_wCb-c46a370706fd41ea91cd6a9005de5ab1" />
                      <input type="hidden" name="ab_upID" id="ab_upID" value="" />
                      <input type="hidden" name="ab_uuid" id="ab_uuid" value="" />
                    </div>
                    
                    <input 
                      type="text" 
                      required 
                      name="ab_firstName" 
                      id="ab_firstName" 
                      placeholder="Please enter your first name" 
                      value="" 
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '2px solid #e5e7eb',
                        borderRadius: '0.5rem',
                        fontSize: '1rem',
                        transition: 'border-color 0.3s ease',
                        outline: 'none',
                        boxSizing: 'border-box'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#31bf31'
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#e5e7eb'
                      }}
                    />
                    
                    <input 
                      type="text" 
                      required 
                      name="ab_lastName" 
                      id="ab_lastName" 
                      placeholder="Please enter your last name" 
                      value="" 
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '2px solid #e5e7eb',
                        borderRadius: '0.5rem',
                        fontSize: '1rem',
                        transition: 'border-color 0.3s ease',
                        outline: 'none',
                        boxSizing: 'border-box'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#31bf31'
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#e5e7eb'
                      }}
                    />
                    
                    <input 
                      type="tel" 
                      required 
                      name="ab_mobile" 
                      id="ab_mobile" 
                      placeholder="Please enter your mobile number" 
                      value="" 
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '2px solid #e5e7eb',
                        borderRadius: '0.5rem',
                        fontSize: '1rem',
                        transition: 'border-color 0.3s ease',
                        outline: 'none',
                        boxSizing: 'border-box'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#31bf31'
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#e5e7eb'
                      }}
                    />
                    
                    <input 
                      type="email" 
                      required 
                      name="ab_emailaddress" 
                      placeholder="Please enter your email address" 
                      value="" 
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '2px solid #e5e7eb',
                        borderRadius: '0.5rem',
                        fontSize: '1rem',
                        transition: 'border-color 0.3s ease',
                        outline: 'none',
                        boxSizing: 'border-box'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#31bf31'
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#e5e7eb'
                      }}
                    />
                    
                    <textarea 
                      rows={4} 
                      name="ab_comments" 
                      id="ab_comments" 
                      placeholder="How can we help you?" 
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '2px solid #e5e7eb',
                        borderRadius: '0.5rem',
                        fontSize: '1rem',
                        transition: 'border-color 0.3s ease',
                        outline: 'none',
                        resize: 'vertical',
                        boxSizing: 'border-box'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#31bf31'
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#e5e7eb'
                      }}
                    />
                    
                    <button 
                      type="submit" 
                      className="ab-optin-submit-button"
                      style={{
                        background: 'linear-gradient(135deg, #31bf31, #1d301d)',
                        color: 'white',
                        padding: '1.25rem 2.5rem',
                        borderRadius: '0.75rem',
                        border: 'none',
                        fontSize: '1.25rem',
                        fontWeight: '700',
                        cursor: 'pointer',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        boxShadow: '0 8px 25px rgba(49, 191, 49, 0.3), 0 4px 10px rgba(0, 0, 0, 0.1)',
                        width: '100%',
                        position: 'relative',
                        overflow: 'hidden',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)'
                      }}
                      onMouseEnter={(e) => {
                        const target = e.target as HTMLElement
                        target.style.background = 'linear-gradient(135deg, #1d301d, #31bf31)'
                        target.style.transform = 'translateY(-2px) scale(1.02)'
                        target.style.boxShadow = '0 12px 35px rgba(49, 191, 49, 0.4), 0 6px 15px rgba(0, 0, 0, 0.15)'
                      }}
                      onMouseLeave={(e) => {
                        const target = e.target as HTMLElement
                        target.style.background = 'linear-gradient(135deg, #31bf31, #1d301d)'
                        target.style.transform = 'translateY(0) scale(1)'
                        target.style.boxShadow = '0 8px 25px rgba(49, 191, 49, 0.3), 0 4px 10px rgba(0, 0, 0, 0.1)'
                      }}
                    >
                      <span style={{
                        position: 'relative',
                        zIndex: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem'
                      }}>
                        <span>Send Message</span>
                        <span style={{
                          fontSize: '1.1em',
                          transition: 'transform 0.3s ease'
                        }}>→</span>
                      </span>
                      {/* Animated background effect */}
                      <div style={{
                        position: 'absolute',
                        top: 0,
                        left: '-100%',
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
                        transition: 'left 0.6s ease'
                      }}></div>
                    </button>
                  </form>
                </div>
              </div>
              {/* Spark form end */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact