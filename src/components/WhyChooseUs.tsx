'use client'

const WhyChooseUs = () => {

  const reasons = [
    {
      icon: "🥋",
      title: "Master Instructor",
      description: "Train under Craig Donaldson, BJJ Black Belt with 30+ years of experience. Learn from someone who's been there, done that, and continues to evolve.",
      highlight: "30+ Years Mastery",
      color: "linear-gradient(135deg, #ff6b35, #f7931e)"
    },
    {
      icon: "🤝",
      title: "Family Atmosphere",
      description: "More than just a gym - we're a family. Every student is valued, supported, and encouraged to reach their full potential in a welcoming environment.",
      highlight: "Community First",
      color: "linear-gradient(135deg, #31bf31, #1d301d)"
    },
    {
      icon: "⚡",
      title: "Real-World Ready",
      description: "Learn techniques that actually work when it matters most. Our training prepares you for real situations, not just tournament scenarios.",
      highlight: "Street Effective",
      color: "linear-gradient(135deg, #8b5cf6, #3b82f6)"
    },
    {
      icon: "🎯",
      title: "Personalized Path",
      description: "Your journey is unique. We adapt our teaching to match your goals, whether that's self-defense, fitness, competition, or personal growth.",
      highlight: "Your Goals, Our Focus",
      color: "linear-gradient(135deg, #f59e0b, #ef4444)"
    },
    {
      icon: "💎",
      title: "Premium Experience",
      description: "Small class sizes, individual attention, and a clean, modern facility. You deserve the best training environment for your investment.",
      highlight: "Quality Training",
      color: "linear-gradient(135deg, #06b6d4, #3b82f6)"
    },
    {
      icon: "🚀",
      title: "Life Transformation",
      description: "Martial arts changes lives. Build unshakeable confidence, mental toughness, and life skills that extend far beyond the mat.",
      highlight: "Transform Your Life",
      color: "linear-gradient(135deg, #ec4899, #8b5cf6)"
    }
  ]

  const stats = [
    { number: "30+", label: "Years Teaching", subtext: "Proven Experience" },
    { number: "500+", label: "Students Transformed", subtext: "Life-Changing Results" },
    { number: "15+", label: "Martial Arts Styles", subtext: "Comprehensive Training" },
    { number: "100%", label: "Student Satisfaction", subtext: "Guaranteed Quality" }
  ]


  return (
    <section id="why-choose-us" style={{
      padding: '4rem 1rem',
      background: 'linear-gradient(135deg, #0f1a0f 0%, #1d301d 50%, #0f1a0f 100%)',
      color: 'white',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated Background Elements */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '5%',
        width: '200px',
        height: '200px',
        background: 'radial-gradient(circle, rgba(49, 191, 49, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        animation: 'float 6s ease-in-out infinite',
        zIndex: 0
      }}></div>
      
      <div style={{
        position: 'absolute',
        bottom: '20%',
        right: '10%',
        width: '150px',
        height: '150px',
        background: 'radial-gradient(circle, rgba(255, 107, 53, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        animation: 'float 8s ease-in-out infinite reverse',
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
          <div style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, #ff6b35, #f7931e)',
            padding: '0.5rem 1.5rem',
            borderRadius: '2rem',
            fontSize: '0.875rem',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            marginBottom: '1.5rem'
          }}>
            Why Choose Us
          </div>
          
          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 'bold',
            marginBottom: '1.5rem',
            background: 'linear-gradient(135deg, #ffffff 0%, #31bf31 50%, #ffffff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            The Integrity Difference
          </h2>
          
          <p style={{
            fontSize: '1.25rem',
            color: '#e8f5e8',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: 1.7
          }}>
            We don't just teach martial arts – we transform lives. Experience the difference of training with a master instructor who genuinely cares about your success, in a community that feels like family.
          </p>
        </div>

        {/* Stats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginBottom: '5rem'
        }}>
          {stats.map((stat, index) => (
            <div key={index} style={{
              textAlign: 'center',
              padding: '2.5rem 1.5rem',
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '1.5rem',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(20px)',
              position: 'relative',
              overflow: 'hidden',
              transition: `all 0.6s ease ${index * 0.1}s`
            }}>
              {/* Gradient overlay */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: 'linear-gradient(90deg, #ff6b35, #31bf31, #8b5cf6)',
                zIndex: 1
              }}></div>
              
              <div style={{
                fontSize: '3.5rem',
                fontWeight: 'bold',
                background: 'linear-gradient(135deg, #31bf31, #ff6b35)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '0.5rem',
                textShadow: '0 0 20px rgba(49, 191, 49, 0.3)'
              }}>
                {stat.number}
              </div>
              <div style={{
                fontSize: '1.25rem',
                color: 'white',
                fontWeight: '700',
                marginBottom: '0.25rem'
              }}>
                {stat.label}
              </div>
              <div style={{
                fontSize: '0.875rem',
                color: '#e8f5e8',
                opacity: 0.8
              }}>
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>

        {/* Reasons Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
          gap: '2.5rem',
          marginBottom: '5rem'
        }}>
          {reasons.map((reason, index) => (
            <div key={index} style={{
              background: 'rgba(255, 255, 255, 0.03)',
              borderRadius: '1.5rem',
              padding: '2.5rem',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(20px)',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              position: 'relative',
              overflow: 'hidden',
              transitionDelay: `${index * 0.1}s`
            }}
            onMouseEnter={(e) => {
              const target = e.target as HTMLElement
              target.style.transform = 'translateY(-8px) scale(1.02)'
              target.style.background = 'rgba(255, 255, 255, 0.08)'
              target.style.borderColor = 'rgba(255, 255, 255, 0.3)'
              target.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)'
            }}
            onMouseLeave={(e) => {
              const target = e.target as HTMLElement
              target.style.transform = 'translateY(0) scale(1)'
              target.style.background = 'rgba(255, 255, 255, 0.03)'
              target.style.borderColor = 'rgba(255, 255, 255, 0.1)'
              target.style.boxShadow = 'none'
            }}>
              {/* Animated background gradient */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: reason.color,
                zIndex: 1
              }}></div>

              {/* Icon */}
              <div style={{
                width: '90px',
                height: '90px',
                background: reason.color,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2.5rem',
                marginBottom: '1.5rem',
                boxShadow: `0 8px 25px ${reason.color.includes('#ff6b35') ? 'rgba(255, 107, 53, 0.4)' : 'rgba(49, 191, 49, 0.4)'}`,
                position: 'relative',
                zIndex: 2
              }}>
                {reason.icon}
              </div>

              {/* Content */}
              <h3 style={{
                fontSize: '1.75rem',
                fontWeight: 'bold',
                color: 'white',
                marginBottom: '0.75rem',
                position: 'relative',
                zIndex: 2
              }}>
                {reason.title}
              </h3>

              <div style={{
                background: reason.color,
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '1.5rem',
                fontSize: '0.875rem',
                fontWeight: '700',
                display: 'inline-block',
                marginBottom: '1.25rem',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                position: 'relative',
                zIndex: 2
              }}>
                {reason.highlight}
              </div>

              <p style={{
                color: '#e8f5e8',
                lineHeight: 1.7,
                fontSize: '1.1rem',
                position: 'relative',
                zIndex: 2
              }}>
                {reason.description}
              </p>

              {/* Subtle glow effect */}
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '200px',
                height: '200px',
                background: `radial-gradient(circle, ${reason.color.includes('#ff6b35') ? 'rgba(255, 107, 53, 0.1)' : 'rgba(49, 191, 49, 0.1)'} 0%, transparent 70%)`,
                borderRadius: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 0,
                opacity: 0,
                transition: 'opacity 0.3s ease'
              }}></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default WhyChooseUs
