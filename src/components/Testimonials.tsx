'use client'

import { useRef } from 'react'
import { useInView } from 'framer-motion'

const Testimonials = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Parent",
      content: "My son has been training at Integrity MMA for 2 years and the transformation has been incredible. Craig's teaching style builds confidence while maintaining discipline. Highly recommended!",
      rating: 5
    },
    {
      name: "James Chen",
      role: "Adult Student",
      content: "Craig's instruction is world-class. The combination of technical expertise and genuine care for his students makes Integrity MMA the best martial arts academy in Melbourne.",
      rating: 5
    },
    {
      name: "Emma Thompson",
      role: "Teen Student",
      content: "I've learned so much more than just martial arts here. The life skills, confidence, and friendships I've gained are invaluable. Craig is an amazing instructor!",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Parent",
      content: "Both my kids train here and they absolutely love it. The environment is supportive, the instruction is excellent, and I can see real growth in their confidence and discipline.",
      rating: 5
    },
    {
      name: "Lisa Wang",
      role: "Adult Student",
      content: "After trying several other martial arts schools, I found Integrity MMA and knew this was the right place. Craig's expertise and teaching methods are outstanding.",
      rating: 5
    },
    {
      name: "David Park",
      role: "Parent",
      content: "The self-defense skills my daughter has learned here are practical and effective. More importantly, she's gained confidence and respect. Thank you, Integrity MMA!",
      rating: 5
    }
  ]

  return (
    <section id="testimonials" style={{
      padding: '3rem 1rem',
      background: 'linear-gradient(135deg, #f8f9fa 0%, #e8f5e8 100%)'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto'
      }}>
        {/* Section Header */}
        <div style={{
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
            backgroundClip: 'text'
          }}>
            What Our Students Say
          </h2>
          <p style={{
            fontSize: '1.25rem',
            color: '#888888',
            maxWidth: '768px',
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            Hear from parents and students about their experience training at Integrity Martial Arts Academy.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div ref={ref} style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '1rem',
                boxShadow: '0 10px 25px rgba(49, 191, 49, 0.1)',
                border: '1px solid rgba(49, 191, 49, 0.1)',
                transition: 'all 0.3s ease',
                transform: isInView ? 'translateY(0)' : 'translateY(20px)',
                opacity: isInView ? 1 : 0,
                transitionDelay: `${index * 0.1}s`
              }}
              onMouseEnter={(e) => {
                const target = e.target as HTMLElement
                target.style.transform = 'translateY(-5px)'
                target.style.boxShadow = '0 20px 40px rgba(49, 191, 49, 0.15)'
              }}
              onMouseLeave={(e) => {
                const target = e.target as HTMLElement
                target.style.transform = 'translateY(0)'
                target.style.boxShadow = '0 10px 25px rgba(49, 191, 49, 0.1)'
              }}
            >
              {/* Rating Stars */}
              <div style={{
                display: 'flex',
                gap: '0.25rem',
                marginBottom: '1rem'
              }}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} style={{ color: '#ffd700', fontSize: '1.25rem' }}>★</span>
                ))}
              </div>

              {/* Testimonial Content */}
              <p style={{
                fontSize: '1.125rem',
                lineHeight: 1.6,
                color: '#1d301d',
                marginBottom: '1.5rem',
                fontStyle: 'italic'
              }}>
                "{testimonial.content}"
              </p>

              {/* Author Info */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: 'linear-gradient(135deg, #31bf31, #1d301d)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '1.25rem'
                }}>
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 style={{
                    fontSize: '1.125rem',
                    fontWeight: 'bold',
                    color: '#1d301d',
                    margin: 0,
                    marginBottom: '0.25rem'
                  }}>
                    {testimonial.name}
                  </h4>
                  <p style={{
                    fontSize: '0.875rem',
                    color: '#31bf31',
                    margin: 0,
                    fontWeight: '500'
                  }}>
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div style={{
          textAlign: 'center',
          padding: '3rem 2rem',
          background: 'linear-gradient(135deg, #31bf31, #1d301d)',
          borderRadius: '1rem',
          boxShadow: '0 10px 25px rgba(49, 191, 49, 0.2)',
          color: 'white'
        }}>
          <h3 style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
            fontWeight: 'bold',
            marginBottom: '1rem'
          }}>
            Ready to Join Our Community?
          </h3>
          <p style={{
            fontSize: '1.125rem',
            marginBottom: '2rem',
            maxWidth: '600px',
            margin: '0 auto 2rem auto'
          }}>
            Experience the same transformation that our students and parents rave about.
          </p>
          <a href="https://sparkpages.io/?i=_e0zb" target="_blank" style={{
            background: 'white',
            color: '#1d301d',
            padding: '1rem 2.5rem',
            borderRadius: '0.5rem',
            textDecoration: 'none',
            fontSize: '1.125rem',
            fontWeight: '700',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            display: 'inline-block'
          }}
          onMouseEnter={(e) => {
            const target = e.target as HTMLElement
            target.style.transform = 'scale(1.05)'
            target.style.background = '#e8f5e8'
            target.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.3)'
          }}
          onMouseLeave={(e) => {
            const target = e.target as HTMLElement
            target.style.transform = 'scale(1)'
            target.style.background = 'white'
            target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)'
          }}>
            Start Your Journey Today
          </a>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
