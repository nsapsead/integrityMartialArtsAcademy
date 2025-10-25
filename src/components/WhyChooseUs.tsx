'use client'

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: "🏆",
      title: "World-Class Instructor",
      description: "Learn from Craig Donaldson, a BJJ Black Belt with over 30 years of martial arts experience and multiple instructor certifications.",
      highlight: "30+ Years Experience"
    },
    {
      icon: "👥",
      title: "Supportive Community",
      description: "Join a welcoming community where students of all levels train together in a positive, encouraging environment.",
      highlight: "All Skill Levels Welcome"
    },
    {
      icon: "🛡️",
      title: "Real-World Self Defense",
      description: "Learn practical self-defense techniques that work in real situations, not just in the gym.",
      highlight: "Practical Application"
    },
    {
      icon: "🎯",
      title: "Personalized Training",
      description: "Every student receives individual attention and training tailored to their specific goals and abilities.",
      highlight: "Individual Attention"
    },
    {
      icon: "💪",
      title: "Complete Fitness",
      description: "Build strength, flexibility, endurance, and mental toughness through comprehensive martial arts training.",
      highlight: "Physical & Mental Fitness"
    },
    {
      icon: "🌟",
      title: "Life Skills Development",
      description: "Develop confidence, discipline, respect, and leadership skills that extend far beyond the mat.",
      highlight: "Character Building"
    }
  ]

  const stats = [
    { number: "30+", label: "Years Experience" },
    { number: "500+", label: "Students Trained" },
    { number: "15+", label: "Martial Arts Styles" },
    { number: "100%", label: "Student Satisfaction" }
  ]

  return (
    <section id="why-choose-us" style={{
      padding: '3rem 1rem',
      background: 'linear-gradient(135deg, #1d301d 0%, #0f1a0f 100%)',
      color: 'white',
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
        opacity: 0.1,
        zIndex: 0
      }}></div>

      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1
      }}>
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '4rem'
        }}>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
            fontWeight: 'bold',
            marginBottom: '1.5rem',
            background: 'linear-gradient(135deg, #31bf31, #e8f5e8)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Why Choose Integrity MMA?
          </h2>
          <p style={{
            fontSize: '1.25rem',
            color: '#e8f5e8',
            maxWidth: '768px',
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            We're not just a gym. We're a community dedicated to helping you achieve your goals through martial arts training that builds character, confidence, and real-world skills.
          </p>
        </div>

        {/* Stats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          {stats.map((stat, index) => (
            <div key={index} style={{
              textAlign: 'center',
              padding: '2rem 1rem',
              background: 'rgba(49, 191, 49, 0.1)',
              borderRadius: '1rem',
              border: '1px solid rgba(49, 191, 49, 0.2)',
              backdropFilter: 'blur(10px)'
            }}>
              <div style={{
                fontSize: '3rem',
                fontWeight: 'bold',
                color: '#31bf31',
                marginBottom: '0.5rem'
              }}>
                {stat.number}
              </div>
              <div style={{
                fontSize: '1.125rem',
                color: '#e8f5e8',
                fontWeight: '600'
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Reasons Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {reasons.map((reason, index) => (
            <div key={index} style={{
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '1rem',
              padding: '2rem',
              border: '1px solid rgba(49, 191, 49, 0.2)',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              const target = e.target as HTMLElement
              target.style.transform = 'translateY(-5px)'
              target.style.background = 'rgba(49, 191, 49, 0.1)'
              target.style.borderColor = 'rgba(49, 191, 49, 0.4)'
            }}
            onMouseLeave={(e) => {
              const target = e.target as HTMLElement
              target.style.transform = 'translateY(0)'
              target.style.background = 'rgba(255, 255, 255, 0.05)'
              target.style.borderColor = 'rgba(49, 191, 49, 0.2)'
            }}>
              {/* Icon */}
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #31bf31, #1d301d)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                marginBottom: '1.5rem',
                boxShadow: '0 4px 8px rgba(49, 191, 49, 0.3)'
              }}>
                {reason.icon}
              </div>

              {/* Content */}
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: 'white',
                marginBottom: '0.5rem'
              }}>
                {reason.title}
              </h3>

              <div style={{
                background: 'linear-gradient(135deg, #31bf31, #1d301d)',
                color: 'white',
                padding: '0.25rem 0.75rem',
                borderRadius: '1rem',
                fontSize: '0.875rem',
                fontWeight: '600',
                display: 'inline-block',
                marginBottom: '1rem'
              }}>
                {reason.highlight}
              </div>

              <p style={{
                color: '#e8f5e8',
                lineHeight: 1.6,
                fontSize: '1rem'
              }}>
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonial Preview - Moved to dedicated Testimonials section */}
        {/*
        <div style={{
          background: 'rgba(49, 191, 49, 0.1)',
          borderRadius: '1rem',
          padding: '3rem 2rem',
          textAlign: 'center',
          border: '1px solid rgba(49, 191, 49, 0.2)',
          backdropFilter: 'blur(10px)'
        }}>
          <div style={{
            fontSize: '1.5rem',
            color: '#31bf31',
            marginBottom: '1rem'
          }}>
            "⭐⭐⭐⭐⭐"
          </div>
          <blockquote style={{
            fontSize: '1.25rem',
            color: 'white',
            fontStyle: 'italic',
            marginBottom: '1.5rem',
            lineHeight: 1.6
          }}>
            "Craig's instruction is world-class. The combination of technical expertise and genuine care for his students makes Integrity MMA the best martial arts academy in Melbourne."
          </blockquote>
          <div style={{
            color: '#e8f5e8',
            fontWeight: '600'
          }}>
            - Sarah M., BJJ Blue Belt
          </div>
        </div>
        */}
      </div>
    </section>
  )
}

export default WhyChooseUs
