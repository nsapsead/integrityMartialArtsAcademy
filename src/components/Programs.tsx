'use client'

import Image from 'next/image'

const Programs = () => {
  const programs = [
    {
      title: "Kids Martial Arts",
      ages: "Ages 5-12",
      description: "Build confidence, discipline, and respect while learning self-defense in a fun, safe environment.",
      features: ["Basic self-defense", "Confidence building", "Discipline & respect", "Physical fitness"],
      image: "/images/integrity-style-kids.png",
      color: "from-green-400 to-green-600"
    },
    {
      title: "Brazilian Jiu Jitsu",
      ages: "Ages 18+",
      description: "Learn the art of ground fighting and self-defense with Craig Donaldson's expert instruction.",
      features: ["Ground fighting", "Self-defense", "Physical fitness", "Mental discipline"],
      image: "/images/integrity-style-bjj.png",
      color: "from-green-600 to-green-800"
    },
    {
      title: "Integrity Combatives",
      ages: "Ages 16+",
      description: "Real-world self-defense techniques for practical application in modern situations.",
      features: ["Real-world tactics", "Situational awareness", "Practical application", "Confidence building"],
      image: "/images/integrity-style-combatives.png",
      color: "from-green-700 to-green-900"
    },
    {
      title: "Muay Thai Kickboxing",
      ages: "Ages 14+",
      description: "High-energy striking art that combines punches, kicks, elbows, and knees for complete fitness.",
      features: ["Striking techniques", "Cardio fitness", "Coordination", "Stress relief"],
      image: "/images/integrity-style-muay-thai.png",
      color: "from-green-400 to-green-600"
    },
    {
      title: "Mixed Martial Arts",
      ages: "Ages 16+",
      description: "Comprehensive training combining striking, grappling, and conditioning for complete martial arts development.",
      features: ["Complete skill set", "Competition training", "Physical conditioning", "Mental toughness"],
      image: "/images/integrity-style-mma.png",
      color: "from-green-500 to-green-700"
    },
    {
      title: "Women's Self-Defense",
      ages: "Ages 16+",
      description: "Specialized self-defense training designed specifically for women in a supportive environment.",
      features: ["Practical techniques", "Confidence building", "Situational awareness", "Empowerment"],
      image: "/images/integrity-style-womens-self-defence.png",
      color: "from-green-600 to-green-800"
    }
  ]

  return (
    <section id="programs" style={{
      padding: '3rem 1rem',
      background: 'linear-gradient(135deg, #f8f9fa 0%, #e8f5e8 100%)'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto'
      }}>
        {/* Header */}
        <div style={{
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
                   backgroundClip: 'text'
                 }}>
                   Martial Arts Programs in Eltham | Kids, Teens & Adults
                 </h2>
          <p style={{
            fontSize: '1.25rem',
            color: '#888888',
            maxWidth: '768px',
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            Learn Brazilian Jiu Jitsu, self-defence, and martial arts in Eltham, Victoria. Our programs are designed for kids, teens, and adults to build confidence, discipline, and real-world self-defense skills.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="programs-grid">
          {programs.map((program, index) => (
            <div key={index} style={{
              background: 'white',
              borderRadius: '0.75rem',
              padding: '1.5rem',
              boxShadow: '0 4px 12px rgba(49, 191, 49, 0.1)',
              transition: 'all 0.3s ease',
              border: '1px solid rgba(49, 191, 49, 0.1)',
              position: 'relative',
              overflow: 'hidden',
              minHeight: '280px'
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
            }}>
              {/* Background Image */}
              <div style={{
                position: 'absolute',
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                backgroundImage: `url(${program.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                opacity: '0.15',
                zIndex: '1'
              }}>
                {/* SEO-optimized hidden image for search engines */}
                <Image
                  src={program.image}
                  alt={`${program.title} classes at Integrity Martial Arts Academy Eltham Victoria - ${program.ages} martial arts training program`}
                  width={1}
                  height={1}
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
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                background: 'linear-gradient(135deg, rgba(29, 48, 29, 0.7) 0%, rgba(49, 191, 49, 0.3) 100%)',
                zIndex: '2'
              }}></div>

              {/* Content */}
              <div style={{
                position: 'relative',
                zIndex: '3',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>

                {/* Title and Age */}
                <div>
                  <h3 style={{
                    fontSize: '1.75rem',
                    fontWeight: 'bold',
                    color: 'white',
                    marginBottom: '0.5rem',
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)'
                  }}>
                    {program.title}
                  </h3>
                  
                  <p style={{
                    fontSize: '1.125rem',
                    color: '#31bf31',
                    fontWeight: '600',
                    marginBottom: '1rem',
                    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)'
                  }}>
                    {program.ages}
                  </p>

                  <p style={{
                    color: '#e8f5e8',
                    lineHeight: 1.6,
                    marginBottom: '1.5rem',
                    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)'
                  }}>
                    {program.description}
                  </p>
                </div>

                {/* Features */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  marginBottom: '1.5rem'
                }}>
                  {program.features.map((feature, featureIndex) => (
                    <span key={featureIndex} style={{
                      background: 'rgba(255, 255, 255, 0.9)',
                      color: '#1d301d',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '1rem',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      border: '1px solid rgba(49, 191, 49, 0.3)',
                      textShadow: 'none'
                    }}>
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <div style={{
                  textAlign: 'center'
                }}>
                         <a href="https://sparkpages.io/?i=_e0zb" target="_blank" style={{
                    background: 'rgba(255, 255, 255, 0.95)',
                    color: '#1d301d',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '0.5rem',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '0.875rem',
                    display: 'inline-block',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    border: '2px solid #31bf31'
                  }}
                  onMouseEnter={(e) => {
                    const target = e.target as HTMLElement
                    target.style.transform = 'scale(1.05)'
                    target.style.background = '#31bf31'
                    target.style.color = 'white'
                    target.style.boxShadow = '0 6px 12px rgba(49, 191, 49, 0.4)'
                  }}
                  onMouseLeave={(e) => {
                    const target = e.target as HTMLElement
                    target.style.transform = 'scale(1)'
                    target.style.background = 'rgba(255, 255, 255, 0.95)'
                    target.style.color = '#1d301d'
                    target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)'
                  }}>
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action - Commented Out */}
        {/*
        <div style={{
          background: 'linear-gradient(135deg, #31bf31, #1d301d)',
          borderRadius: '1rem',
          padding: '3rem 2rem',
          textAlign: 'center',
          color: 'white',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: '-50%',
            right: '-50%',
            width: '200%',
            height: '200%',
            background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
            pointerEvents: 'none'
          }}></div>
          
          <h3 style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            position: 'relative',
            zIndex: 1
          }}>
            Ready to Start Your Journey?
          </h3>
          
          <p style={{
            fontSize: '1.125rem',
            marginBottom: '2rem',
            opacity: 0.9,
            position: 'relative',
            zIndex: 1
          }}>
            Join hundreds of students who have transformed their lives through martial arts training at Integrity MMA.
          </p>
          
                         <a href="https://sparkpages.io/?i=_e0zb" target="_blank" style={{
            background: 'white',
            color: '#1d301d',
            padding: '1rem 2rem',
            borderRadius: '0.5rem',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '1.125rem',
            display: 'inline-block',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            position: 'relative',
            zIndex: 1
          }}
          onMouseEnter={(e) => {
            const target = e.target as HTMLElement
            target.style.transform = 'scale(1.05)'
            target.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.3)'
          }}
          onMouseLeave={(e) => {
            const target = e.target as HTMLElement
            target.style.transform = 'scale(1)'
            target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)'
          }}>
            Start Your Free Trial
          </a>
        </div>
        */}
      </div>
    </section>
  )
}

export default Programs
