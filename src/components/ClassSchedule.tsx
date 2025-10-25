'use client'

import { useRef } from 'react'
import { useInView } from 'framer-motion'

const ClassSchedule = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="schedule" style={{
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
          marginBottom: '3rem'
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
            Class Schedule
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
            View our weekly class timetable. All classes are led by Craig Donaldson and designed for all skill levels.
          </p>
        </div>

        {/* Timetable Image Container */}
        <div style={{
          background: 'white',
          borderRadius: '1rem',
          boxShadow: '0 10px 25px rgba(49, 191, 49, 0.1)',
          overflow: 'hidden',
          border: '1px solid rgba(49, 191, 49, 0.1)',
          opacity: isInView ? 1 : 0,
          transform: isInView ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.6s ease 0.4s'
        }}>
          <img 
            src="/images/Timetable No Logo.png"
            alt="Integrity Martial Arts Class Timetable"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              borderRadius: '1rem'
            }}
          />
        </div>

        {/* Additional Info */}
        <div style={{
          marginTop: '2rem',
          textAlign: 'center',
          opacity: isInView ? 1 : 0,
          transform: isInView ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.6s ease 0.6s'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginBottom: '2rem'
          }}>
            <div style={{
              background: 'rgba(49, 191, 49, 0.1)',
              padding: '1.5rem',
              borderRadius: '0.75rem',
              border: '1px solid rgba(49, 191, 49, 0.2)'
            }}>
              <div style={{
                fontSize: '2rem',
                marginBottom: '0.5rem'
              }}>📅</div>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: 'bold',
                color: '#1d301d',
                marginBottom: '0.5rem'
              }}>
                Weekly Schedule
              </h3>
              <p style={{
                color: '#888888',
                fontSize: '0.875rem',
                lineHeight: 1.5
              }}>
                Classes available Monday through Saturday with various time slots
              </p>
            </div>

            <div style={{
              background: 'rgba(49, 191, 49, 0.1)',
              padding: '1.5rem',
              borderRadius: '0.75rem',
              border: '1px solid rgba(49, 191, 49, 0.2)'
            }}>
              <div style={{
                fontSize: '2rem',
                marginBottom: '0.5rem'
              }}>👥</div>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: 'bold',
                color: '#1d301d',
                marginBottom: '0.5rem'
              }}>
                All Ages Welcome
              </h3>
              <p style={{
                color: '#888888',
                fontSize: '0.875rem',
                lineHeight: 1.5
              }}>
                From kids (3-6 years) to adults, we have classes for everyone
              </p>
            </div>

            <div style={{
              background: 'rgba(49, 191, 49, 0.1)',
              padding: '1.5rem',
              borderRadius: '0.75rem',
              border: '1px solid rgba(49, 191, 49, 0.2)'
            }}>
              <div style={{
                fontSize: '2rem',
                marginBottom: '0.5rem'
              }}>🏆</div>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: 'bold',
                color: '#1d301d',
                marginBottom: '0.5rem'
              }}>
                Expert Instruction
              </h3>
              <p style={{
                color: '#888888',
                fontSize: '0.875rem',
                lineHeight: 1.5
              }}>
                Learn from Craig Donaldson with 30+ years of experience
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ClassSchedule
